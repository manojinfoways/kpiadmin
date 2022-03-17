import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {Box, CircularProgress, FormControlLabel, Switch, TableCell, Tooltip} from "@material-ui/core";
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import MUIDataTable from "mui-datatables";
import {makeStyles} from '@material-ui/core/styles';
import {LocalPrintshop} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Legend from "app/shared-components/Legend";
import {getPtrDetailsById} from "app/main/PTR/Admin/API";
import clsx from "clsx";
import PrintModal from "app/shared-components/PrintModal";
import {
    customDataBodyRender,
    customDataSearch,
    dateSortCompare,
    docSortCompare,
    filterDocuments,
    getFilteredDocumentsFromPTR
} from "app/utils/helpers";
import DocumentChip from "app/shared-components/DocumentChip";
import Priority from "app/shared-components/Priority";
import AdminNote from "app/main/PTR/Admin/Components/AdminNote";
import PTRStatusForm from "app/main/PTR/Admin/Components/PTRStatusForm";
import moment from "moment/moment";
import TableRow from "@material-ui/core/TableRow";
import RequestedPropertyPTRDetails from "app/main/PTR/Admin/Components/RequestedPropertyPTRDetails";
import UrbanForm from "app/main/PTR/Admin/Components/UrbanForm";

const columns = [
    {
        name: "Priority No",
        label: "Priority No",
        options: {
            filter: true,
            sort: true,
            display: 'excluded',
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Document No.",
        label: "Document No.",
        options: {
            filter: true,
            display: 'excluded',
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Priority",
        label: "Priority",
        options: {
            filter: false,
            sort: false,
            download: false,
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Doc No.',
        label: 'Doc No.',
        options: {
            filter: false,
            sort: true,
            download: false,
            setCellProps: () => ({
                style: {textAlign: "center", minWidth: "190px"},
            }),
            customBodyRender: customDataBodyRender,
            sortCompare: docSortCompare
        }
    },
    {
        name: 'Source Type',
        label: 'Source Type',
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: '107px'}}),
            customBodyRender: customDataBodyRender
        },
    },
    {
        name: 'Type',
        label: 'Type',
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: '107px'}}),
            customBodyRender: customDataBodyRender
        },
    },
    {
        name: "Recorded",
        label: "Recorded",
        options: {
            filter: true,
            sort: true,
            sortCompare: dateSortCompare,
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Execution Date",
        label: "Execution Date",
        options: {
            filter: true,
            sort: true,
            sortCompare: dateSortCompare,
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Property",
        label: "Property",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: "150px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Grantor/Mortgager/Assignor/Made by Other",
        label: "Grantor/Mortgager/Assignor/Made by Other",
        options: {
            filter: true,
            filterType: 'dropdown',
            sort: true,
            setCellProps: () => ({style: {textAlign: 'left', Width: "50px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Grantee/Mortgagee Assignee/ In Favor of Against/vs. Other",
        label: "Grantee/Mortgagee Assignee/ In Favor of Against/vs. Other",
        options: {
            filter: true,
            filterType: 'dropdown',
            sort: true,
            setCellProps: () => ({style: {textAlign: "left"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Notes",
        label: "Notes",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {textAlign: "center"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Territory of Guam",
        label: "Territory of Guam",
        options: {
            filter: true,
            sort: true,
            print: false,
            setCellProps: () => ({style: {textAlign: "center"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Associated CT",
        label: "Associated CT",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {textAlign: "center"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Ref Document',
        label: 'Ref Document',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Transaction Class",
        label: "Transaction Class",
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'PTR Report Status',
        label: 'PTR Report Status',
        options: {
            filter: true,
            sort: true,
            display: false,
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
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Estate No',
        label: 'Estate No',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Property Id',
        label: 'Property Id',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Recording Fee',
        label: 'Recording Fee',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'LM Check No',
        label: 'LM Check No',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Certificate',
        label: 'Certificate',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Mortgage Amount',
        label: 'Mortgage Amount',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Mortgage Lender',
        label: 'Mortgage Lender',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Mortgage',
        label: 'Mortgage',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Legal Descriptor Record',
        label: 'Legal Descriptor Record',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Area',
        label: 'Area',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Lien No',
        label: 'Lien No',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Court Case No',
        label: 'Court Case No',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Tax No',
        label: 'Tax No',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Cluster',
        label: 'Cluster',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Closing Party',
        label: 'Closing Party',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Maturity Date',
        label: 'Maturity Date',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Condo',
        label: 'Condo',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'UOM',
        label: 'UOM',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Lender Name',
        label: 'Lender Name',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'Verified',
        label: 'Verified',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: 'CT Info',
        label: 'CT Info',
        options: {
            filter: true,
            sort: true,
            display: false,
            setCellProps: () => ({style: {minWidth: "100px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
];

const useStyles = makeStyles({
        dark1Background: {
            backgroundColor: "rgba(200,200,200,0.5)"
        },
        dark2Background: {
            '&:hover': {
                backgroundColor: "rgba(200,200,200,1)"
            }
        },
        printTitle: {
            background: '#000000',
            padding: '4px 15px',
            position: 'sticky',
            top: 0,
            zIndex: '9',
            width: '100%',
            '& > h2': {
                fontSize: '20px',
                color: '#FFFFFF',
                fontWeight: 'bold',
                marginBottom: '0',
            },
        },
    }
)

const ChainOfTitle = (props) => {

    const [data, setData] = useState([]);
    const [dataToPrint, setDataToPrint] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showAllDoc, setShowAllDoc] = useState(false);
    const [printDataModal, setPrintDataModal] = useState(false);
    const [ptrStatus, setPtrStatus] = useState('');
    const [docRecordId, setDocRecordId] = useState([])

    const classes = useStyles();
    const dispatch = useDispatch();

    const ptrDetails = useSelector(({ptr}) => ptr.ptrDetails.details);
    const ptrAlphaRecords = useSelector(({ptr}) => ptr.ptrDetails.alpha);

    useEffect(async () => {
        dispatch(setToolbarHeader('Chain Of Title Report'));
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
            setDocRecordId([]);
            const requestedPTR = ptrDetails.find(property => property.properties[0].property_ptr_type === "Requested")
            const isCompleted = requestedPTR && requestedPTR.ptr_status === 'Completed'

            const docData = getFilteredDocumentsFromPTR(ptrDetails, ["CHAIN_TITLE"], showAllDoc);
            const data = docData.map(row => [
                row.priority_no,
                row.docno,
                <Priority row={row} isDisabled={isCompleted} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.sourcetype,
                row.transaction_value,
                row.recorded_date ? moment(row.recorded_date).format('DD/MM/YYYY') : "",
                row.execution_date ? moment(row.execution_date).format('DD/MM/YYYY') : "",
                row.prop_desc,
                row.grantor,
                row.grantee,
                row.notes,
                row.urban_suburban,
                row.associated_ct,
                row.ref_document,
                row.transaction_class,
                row.ptr_report_status.replace('_', ' '),
                row.doc_record_id,
                row.estate_no,
                row.property_id,
                row.recording_fee,
                row.lm_check_no,
                row.certificate,
                row.mortgage_amount,
                row.mortgage_lender,
                row.mortgage,
                row.legal_descriptor_record,
                row.area,
                row.lien_no,
                row.court_case_no,
                row.tax_no,
                row.cluster,
                row.closing_party,
                row.maturity_date,
                row.condo,
                row.uom,
                row.lender_name,
                String(row.verified),
                row.ct_info,
            ]);

            const alphaDocData = showAllDoc ? ptrAlphaRecords : filterDocuments(ptrAlphaRecords, ["CHAIN_TITLE"])
            const alphaData = alphaDocData.map(row => [
                row.priority_no,
                row.docno,
                <Priority row={row} isDisabled={isCompleted} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.sourcetype,
                row.transaction_value,
                row.recorded_date ? moment(row.recorded_date).format('DD/MM/YYYY') : "",
                row.execution_date ? moment(row.execution_date).format('DD/MM/YYYY') : "",
                row.prop_desc,
                row.grantor,
                row.grantee,
                row.notes,
                row.urban_suburban,
                row.associated_ct,
                row.ref_document,
                row.transaction_class,
                row.ptr_report_status.replace('_', ' '),
                row.doc_record_id,
                row.estate_no,
                row.property_id,
                row.recording_fee,
                row.lm_check_no,
                row.certificate,
                row.mortgage_amount,
                row.mortgage_lender,
                row.mortgage,
                row.legal_descriptor_record,
                row.area,
                row.lien_no,
                row.court_case_no,
                row.tax_no,
                row.cluster,
                row.closing_party,
                row.maturity_date,
                row.condo,
                row.uom,
                row.lender_name,
                String(row.verified),
                row.ct_info,
            ]);
            const sortedData = data.concat(alphaData).sort((a, b) => a[0] - b[0])
            setData(sortedData);
            setDataToPrint(sortedData);
        }
    }, [showAllDoc, ptrDetails, ptrAlphaRecords]);

    const options = useMemo(() => ({
        filter: true,
        filterType: "multiselect",
        rowsPerPage: 100,
        selectableRows: "multiple",
        downloadOptions: {
            filename: 'ChainOfTitle.csv',
            separator: ',',
        },
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
        tableBodyMaxHeight: 'calc(100vh - 280px)',
        expandableRows: true,
        expandableRowsHeader: false,
        expandableRowsOnClick: true,
        rowsExpanded: Array.from(Array(data.length).keys()).filter(val => data[val][11]),
        renderExpandableRow: (rowData) => {
            if (rowData[11])
                return (
                    <TableRow>
                        <TableCell colSpan={rowData.length}>
                            {rowData[11]}
                        </TableCell>
                    </TableRow>
                )
            return null
        },
        onRowSelectionChange: (currentSelect, allSelected) => {
            const result = allSelected.map(item => data.at(item.index));
            const selectedIds = result.map(item => item[17]);
            setDocRecordId(selectedIds)
        },
        setRowProps: (row, dataIndex, rowIndex) => {
            const properties = {class: classes.dark2Background}
            if (rowIndex % 2 === 0)
                properties["class"] = clsx(properties["class"], classes.dark1Background)
            return properties
        },
        customSearch: customDataSearch,
        onTableChange: (action, tableState) => {
            if (action === 'sort')
                setDataToPrint(tableState.displayData.map(row => row.data))
        }
    }), [classes, data]);

    const fetchData = async (id) => {
        setIsLoading(true);
        await getPtrDetailsById(id);
        setIsLoading(false);
    }

    return (
        <Box sx={{margin: '30px'}}>

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
                <div className="flex items-center flex-1">
                     
                    <FormControlLabel
                        control={
                            <Switch
                                checked={showAllDoc}
                                onChange={() => setShowAllDoc(prev => !prev)}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                        }
                        label="Show All Documents"
                        labelPlacement={"start"}
                    />
                </div>
                <div className="flex flex-1 items-center">
                    <UrbanForm
                        ptrId={props?.match?.params?.id}
                        docRecordId={docRecordId}
                        fetchData={fetchData}
                        ptrStatus={ptrStatus}
                    />
                </div>
                <div className="flex flex-1 items-center">
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
                            Chain Of Title
                            {isLoading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                        </Typography>
                    }
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>

            <Legend/>

            {dataToPrint && <PrintModal
                openModal={printDataModal}
                setOpenModal={setPrintDataModal}
                title="CHAIN OF TITLE DOCUMENT REPORT"
                subTitle="PinPointGuam: Chain Of Title Document List"
                columns={columns.slice(2)}
                rows={dataToPrint?.map(i => i.slice(2))}
                isLoading={isLoading}
            />}
        </Box>
    )
}

export default ChainOfTitle;