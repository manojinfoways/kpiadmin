import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, CircularProgress, Tooltip, Typography} from '@material-ui/core';
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import {LocalPrintshop} from "@material-ui/icons";
import clsx from "clsx";
import AddTaxInfo from "app/main/PTR/Admin/Components/AddTaxInfo";
import PrintModal from "app/shared-components/PrintModal";
import {showError} from "app/utils/helpers";
import {getPtrDetailsById} from "app/main/PTR/Admin/API";

const useStyles = makeStyles({
    dark1Background: {
        backgroundColor: "rgba(200,200,200,0.5)"
    },
    dark2Background: {
        '&:hover': {
            backgroundColor: "rgba(200,200,200,1)"
        }
    }
});

const columns = [
    {
        name: 'Id',
        label: 'Id',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Owner Name',
        label: 'Owner Name',
        options: {
            filter: true,
            sort: true,
            display: false
        },
    },
    {
        name: 'Location Type',
        label: 'Location Type',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Parcel Search',
        label: 'Parcel Search',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Land Assessed Value',
        label: 'Land Assessed Value',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Bldg Assessed Value',
        label: 'Bldg Assessed Value',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Total Assessed Value',
        label: 'Total Assessed Value',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'First Install Payment',
        label: 'First Install Payment',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Second Install Payment',
        label: 'Second Install Payment',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Total Tax',
        label: 'Total Tax',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Exempt',
        label: 'Exempt',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'Bldg Area',
        label: 'Bldg Area',
        options: {
            filter: true,
            sort: true,
        },
    }
]

const TaxInfo = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const [data, setData] = useState([])
    const [dataToPrint, setDataToPrint] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [printDataModal, setPrintDataModal] = useState(false);

    const ptrDetails = useSelector(({ptr}) => ptr.ptrDetails.details);

    useEffect(() => {
        dispatch(setToolbarHeader('Tax Info'))
    }, []);

    useEffect(async () => {
        dispatch(setToolbarHeader('Tax Info'));
        if (!_.isEmpty(ptrDetails)) {
            if (props.match.params.id !== ptrDetails[0].id) {
                await fetchData(props.match.params.id);
            }
        } else if (props?.match?.params?.id) {
            await fetchData(props.match.params.id);
        }
    }, [props?.match?.params?.id]);

    useEffect(() => {
        getPTRTaxInfo()
    }, []);

    const options = useMemo(() => ({
        filter: true,
        filterType: "multiselect",
        tableBodyMaxHeight: 'calc(100vh - 280px)',
        rowsPerPage: 100,
        fixedHeader: true,
        print: false,
        customToolbar: () => (
            <Tooltip title="Print">
                <LocalPrintshop className="text-gray-600 cursor-pointer hover:text-black"
                                onClick={() => setPrintDataModal(true)}/>
            </Tooltip>
        ),
        draggableColumns: {
            enabled: true,
            transitionTime: 300,
        },
        selectableRows: 'none',
        downloadOptions: {
            filename: "Tax-Info.csv",
            separator: ",",
        },
        setRowProps: (row, dataIndex, rowIndex) => {
            const properties = {class: classes.dark2Background};
            if (rowIndex % 2 === 0) {
                properties["class"] = clsx(
                    properties["class"],
                    classes.dark1Background
                );
            }
            return properties;
        },
        onTableChange: (action, tableState) => {
            if (action === 'sort')
                setDataToPrint(tableState.displayData.map(row => row.data))
        }
    }), [classes, data]);

    const getPTRTaxInfo = () => {
        setIsLoading(true);
        axios.post('/associate_taxinfo_list', {
            "ptr_id": props.match.params.id
        }).then(res => {
            if (res.status) {
                const data = res.data.result.map(row => [
                    row.ID,
                    row.OwnerName,
                    row.LocationType,
                    row.ParcelSearch,
                    row.LandAssessedValue,
                    row.BldgAssessedValue,
                    row.TotalAssessedValue,
                    row.FirstInstallPayment,
                    row.SecondInstallPayment,
                    row.TotalTax,
                    row.Exempt,
                    row.BldgArea
                ])
                setData(data)
                setDataToPrint(data);
                setIsLoading(false)
            }
        }).catch(error => {
            showError(error.response?.data?.message);
            setIsLoading(false)
        })
    }

    const fetchData = async (id) => {
        setIsLoading(true);
        await getPtrDetailsById(id);
        setIsLoading(false);
    }

    return (
        <div>
            <Box sx={{margin: '30px', width: '50%'}}>
                <AddTaxInfo
                    ptrId={props.match.params.id}
                    ptrDetails={ptrDetails}
                    refreshData={getPTRTaxInfo}
                />
            </Box>
            <div className="mx-20 my-20">
                <MUIDataTable
                    title={
                        <Typography variant="h6">
                            Tax Info
                            {isLoading && (
                                <CircularProgress
                                    size={24}
                                    style={{marginLeft: 15, position: "relative", top: 4}}
                                />)}
                        </Typography>
                    }
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>

            {dataToPrint && <PrintModal
                openModal={printDataModal}
                setOpenModal={setPrintDataModal}
                title="PTR Tax Info"
                subTitle="PinPointGuam: Tax Info List"
                columns={columns}
                rows={dataToPrint}
                isLoading={isLoading}
            />}
        </div>
    )
}

export default TaxInfo

