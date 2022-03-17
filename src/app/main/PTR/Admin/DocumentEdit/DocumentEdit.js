import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {Box, CircularProgress} from "@material-ui/core";
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import MUIDataTable from "mui-datatables";
import {makeStyles} from '@material-ui/core/styles';
import Legend from "app/shared-components/Legend";
import {getPtrDetailsById} from "app/main/PTR/Admin/API";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import PrintModal from "app/shared-components/PrintModal";
import {
    customDataBodyRender,
    customDataSearch,
    docSortCompare,
    getFilteredDocumentsFromPTR
} from "app/utils/helpers";
import DocumentChip from "app/shared-components/DocumentChip";
import AdminNote from "app/main/PTR/Admin/Components/AdminNote";
import PTRStatusForm from "app/main/PTR/Admin/Components/PTRStatusForm";
import RequestedPropertyPTRDetails from "app/main/PTR/Admin/Components/RequestedPropertyPTRDetails";
import UrbanForm from "app/main/PTR/Admin/Components/UrbanForm";
import CTInfoForm from "app/main/PTR/Admin/Components/CTInfoForm";

const columns = [
    {
        name: "Document No.",
        label: "Doc No.",
        options: {
            filter: true,
            display: 'excluded',
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Doc No.",
        label: "Doc No.",
        options: {
            filter: false,
            sort: true,
            download: false,
            setCellProps: () => ({
                style: {textAlign: "center", minWidth: "90px"},
            }),
            customBodyRender: customDataBodyRender,
            sortCompare: docSortCompare
        },
    },
    {
        name: "Territory of Guam",
        label: "Territory of Guam",
        options: {
            filter: true,
            sort: true,
            print: false,
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "CT Info",
        label: "CT Info",
        options: {
            filter: true,
            sort: true,
            print: false,
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'PTR Report Status',
        label: 'PTR Report Status',
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Doc Record Id',
        label: 'Doc Record Id',
        options: {
            filter: true,
            sort: true,
            display:false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    }
];

const useStyles = makeStyles({
    customLabel: {
        "& label": {
            fontSize: "12px"
        },
    },
    dark1Background: {
        backgroundColor: "rgba(200,200,200,0.5)",
    },
    dark2Background: {
        "&:hover": {
            backgroundColor: "rgba(200,200,200,1)",
        },
    },
    printTitle: {
        background: "#000000",
        padding: "4px 15px",
        "& > h2": {
            fontSize: "20px",
            color: "#FFFFFF",
            fontWeight: "bold",
            marginBottom: "0",
        },
    }
});

const DocumentsEdit = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [printDataModal, setPrintDataModal] = useState(false);
    const [ptrStatus, setPtrStatus] = useState('');
    const [docRecordId, setDocRecordId] = useState([])

    const ptrDetails = useSelector(({ptr}) => ptr.ptrDetails.details);
    const ptrAlphaRecords = useSelector(({ptr}) => ptr.ptrDetails.alpha);

    const classes = useStyles();
    const dispatch = useDispatch();

    const options = useMemo(() => ({
        filter: true,
        filterType: "multiselect",
        rowsPerPage: 100,
        selectableRows: "multiple",
        download:false,
        print:false,
        draggableColumns: {
            enabled: true,
            transitionTime: 300,
        },
        tableBodyMaxHeight: 'calc(100vh - 280px)',
        onRowSelectionChange: (currentSelect, allSelected) => {
            const result = allSelected.map(item => data.at(item.index));
            const selectedIds = result.map(item => item[5]);
            setDocRecordId(selectedIds)
        },
        setRowProps: (row, dataIndex, rowIndex) => {
            const properties = {class: classes.dark2Background};
            if (rowIndex % 2 === 0)
                properties["class"] = clsx(properties["class"], classes.dark1Background);
            return properties;
        },
        customSearch: customDataSearch
    }), [classes, data]);

    useEffect(async () => {
        dispatch(setToolbarHeader("Document Edit"));
        if (!_.isEmpty(ptrDetails)) {
            if (props.match.params.id !== ptrDetails[0].id) {
                await fetchData(props.match.params.id);
            }
        } else if (props?.match?.params?.id) {
            await fetchData(props.match.params.id);
        }
    }, [props.match?.params?.id]);

    useEffect(() => {
        if (!_.isEmpty(ptrDetails) || !_.isEmpty(ptrAlphaRecords)) {
            setDocRecordId([])
            const docData = getFilteredDocumentsFromPTR(ptrDetails, [], true)
            const data = docData.map((row) => [
                row.docno,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.urban_suburban,
                row.ct_info,
                row.ptr_report_status.replace('_', ' '),
                row.doc_record_id
            ]);
            const alphaData = ptrAlphaRecords.map(row => [
                row.docno,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.urban_suburban,
                row.ct_info,
                row.ptr_report_status.replace('_', ' '),
                row.doc_record_id
            ]);
            setData([...data, ...alphaData]);
        }
    }, [ptrDetails, ptrAlphaRecords]);

    const fetchData = async (id) => {
        setIsLoading(true);
        await getPtrDetailsById(id);
        setIsLoading(false);
    };

    return (
        <Box sx={{margin: "30px"}}>

            <RequestedPropertyPTRDetails
                ptrDetails={ptrDetails}
                isLoading={isLoading}
                setPtrStatus={setPtrStatus}
            />

            <AdminNote
                refreshData={() => fetchData(props.match.params.id)}
                ptrDetails={ptrDetails}
                ptrId={props.match.params.id}
            />

            <div className="my-10 flex justify-between">
                <div className="flex w-full items-center">
                    <CTInfoForm
                        ptrId={props?.match?.params?.id}
                        docRecordId={docRecordId}
                        fetchData={fetchData}
                        ptrStatus={ptrStatus}
                    />
                   <UrbanForm
                        ptrId={props?.match?.params?.id}
                        docRecordId={docRecordId}
                        fetchData={fetchData}
                        ptrStatus={ptrStatus}
                   />
                    {ptrStatus && (
                        <PTRStatusForm
                            ptrId={props?.match?.params?.id}
                            ptrStatus={ptrStatus}
                            fetchData={fetchData}
                        />
                    )}
                </div>
            </div>

            <div className="w-full flex flex-col mt-16">
                <MUIDataTable
                    title={
                        <Typography variant="h6">
                            Document Edit
                            {isLoading && (
                                <CircularProgress
                                    size={24}
                                    style={{marginLeft: 15, position: "relative", top: 4}}
                                />
                            )}
                        </Typography>
                    }
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>

            <Legend/>

            {data && <PrintModal
                openModal={printDataModal}
                setOpenModal={setPrintDataModal}
                title="DOCUMENT EDIT REPORT"
                subTitle="PinPointGuam: Documents List"
                columns={columns.slice(1)}
                rows={data?.map((i) => i.slice(1))}
                isLoading={isLoading}
            />}
        </Box>
    );
};

export default DocumentsEdit;