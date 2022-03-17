import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, CircularProgress, TableCell, TextField, Tooltip, Typography} from "@material-ui/core";
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import {MenuItem, TextField as TextFieldSelect} from "@mui/material";
import {LocalPrintshop, PrintOutlined, Save} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import clsx from "clsx";
import {getPtrDetailsById} from "app/main/PTR/Admin/API";
import {
    customDataBodyRender,
    customDataSearch,
    dateSortCompare,
    docSortCompare,
    getFilteredDocumentsFromPTR,
    showError,
    showSuccess
} from "app/utils/helpers";
import PrintModal from "app/shared-components/PrintModal";
import DocumentChip from "app/shared-components/DocumentChip";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PrintPTRModal from "app/shared-components/PrintPTRModal";
import PTRStatusForm from "app/main/PTR/Admin/Components/PTRStatusForm";
import AdminNote from "app/main/PTR/Admin/Components/AdminNote";
import moment from "moment/moment";
import TableRow from "@material-ui/core/TableRow";
import RequestedPropertyPTRDetails from "app/main/PTR/Admin/Components/RequestedPropertyPTRDetails";

const taxColumns = [
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
        name: "Source Type",
        label: "Source Type",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: "107px"}}),
            customBodyRender: customDataBodyRender,
        },
    },
    {
        name: "Type",
        label: "Type",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({style: {minWidth: "107px"}}),
            customBodyRender: customDataBodyRender,
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
            setCellProps: () => ({style: {textAlign: "left", minWidth: "50px"}}),
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
        name: 'Priority No',
        label: 'Priority No',
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
    subWidth: {
        width: '100%',
        margin: '16px 0'
    },
    subscribeWidth: {
        width: '100%',
        margin: '0',
        '& label': {
            fontSize: 12,
        }
    },
    dark1Background: {
        backgroundColor: "rgba(200,200,200,0.5)"
    },
    dark2Background: {
        '&:hover': {
            backgroundColor: "rgba(200,200,200,1)"
        }
    },
    reqWidth: {
        minWidth: 280,
    },
    printTitle: {
        background: '#000000',
        padding: '4px 15px',
        '& > h2': {
            fontSize: '20px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            marginBottom: '0',
        },
    },
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0px 16px",
        margin: "16px 0"
    },
    wrapperMethod: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0px 16px",
        margin: "16px 0",
        '& label': {
            fontSize: 12,
        }
    },
    wrapperClass: {
        display: "flex",
        gap: "0px 16px",
        margin: "16px 0",
        marginTop: '50px'
    },
    customizeWidth: {
        width: '100%',
        maxWidth: '432px',
        minWidth: 'unset'
    },
    customLabel: {
        "& label": {
            fontSize: "12px"
        },
    },
    customOption: {
        fontSize: "12px !important"
    }
});

const ResearchSummary = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isPrint, setIsPrint] = useState(false);
    const [data, setData] = useState([]);
    const [dataToPrint, setDataToPrint] = useState([]);
    const [taxData, setTaxData] = useState([]);
    const [taxDataToPrint, setTaxDataToPrint] = useState([]);
    const [printDataModal, setPrintDataModal] = useState(false);
    const [printTaxDataModal, setPrintTaxDataModal] = useState(false);

    const [lotOf, setLotOf] = useState('');
    const [municipalityOf, setMunicipalityOf] = useState('');
    const [formerlyOf, setFormerlyOf] = useState('');
    const [territory, setTerritory] = useState('');
    const [drawingNumber, setDrawingNumber] = useState('');
    const [lmCheck, setLmCheck] = useState('');
    const [descOnMap, setDescOnMap] = useState('');
    const [userDated, setUserDated] = useState('');
    const [areaUnit, setAreaUnit] = useState('Sq m');
    const [area, setArea] = useState('');
    const [owners, setOwners] = useState('');
    const [docNo, setDocNo] = useState('');
    const [estateNo, setEstateNo] = useState('');
    const [lastCt, setLastCT] = useState('');
    const [ownerCt, setOwnersCT] = useState('');
    const [type, setType] = useState('');
    const [propertyDesc, setPropertyDesc] = useState('');
    const [requestId, setRequestId] = useState('');
    const [requestDate, setRequestDate] = useState('');
    const [recordedDate, setRecordedDate] = useState('');
    const [researcher, setResearcher] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [customer, setCustomer] = useState('');
    const [reviewedBy, setReviewedBy] = useState('');
    const [basicLot, setBasicLot] = useState('');
    const [lot_std, setLotStd] = useState('');
    const [block_std, setBlockStd] = useState('');
    const [unit_std, setUnitStd] = useState('');
    const [tract_std, setTractStd] = useState('');
    const [phase, setPhaseStd] = useState('');
    const [ptrStatus, setPtrStatus] = useState('');

    const dispatch = useDispatch();
    const classes = useStyles();

    const ptrDetails = useSelector(({ptr}) => ptr.ptrDetails.details);
    const ptrAlphaRecords = useSelector(({ptr}) => ptr.ptrDetails.alpha);

    useEffect(async () => {
        dispatch(setToolbarHeader('Research Summary Report'));
        getPTRTaxInfo();
        if (!_.isEmpty(ptrDetails)) {
            if (props.match.params.id !== ptrDetails[0].id) {
                await fetchData(props.match.params.id);
            }
        } else if (props?.match?.params?.id) {
            await fetchData(props.match.params.id);
        }
    }, [props?.match?.params?.id]);

    useEffect(() => {
        if (!_.isEmpty(ptrDetails) || !_.isEmpty(ptrAlphaRecords)) {
            const requestedPTR = ptrDetails.find(property => property.properties[0].property_ptr_type === "Requested")
            if (requestedPTR) {
                setPropertyDesc(requestedPTR.property_descriptor)
                setRequestId(requestedPTR.id)
                setType(requestedPTR.request_type)
                setLotStd(requestedPTR.lot_std)
                setCustomerId(requestedPTR.customer_id)
                setCustomer(requestedPTR.customer_name)
                setResearcher(requestedPTR.staff_userid)
                setBlockStd(requestedPTR.block_std)
                setPhaseStd(requestedPTR.phase || null)
                setTractStd(requestedPTR.tract_std)
                setUnitStd(requestedPTR.unit_std)
                setAreaUnit(requestedPTR.summaryReport.unit_measure)
                setArea(requestedPTR.summaryReport.area)
                setLotOf(requestedPTR.summaryReport.lotof)
                setMunicipalityOf(requestedPTR.summaryReport.municipalityof)
                setFormerlyOf(requestedPTR.summaryReport.formerlyof)
                setDrawingNumber(requestedPTR.summaryReport.drawing_number)
                setLmCheck(requestedPTR.summaryReport.lmcheck)
                setRequestDate(requestedPTR.summaryReport.dated ? moment(requestedPTR.summaryReport.dated).format("YYYY-MM-DD") : "")
                setRecordedDate(requestedPTR.summaryReport.recorded ? moment(requestedPTR.summaryReport.recorded).format("YYYY-MM-DD") : "")
                setOwners(requestedPTR.summaryReport.owners)
                setLastCT(requestedPTR.summaryReport.lastCT)
                setOwnersCT(requestedPTR.summaryReport.ownersCT)
                setEstateNo(requestedPTR.summaryReport.estate_no)
                setBasicLot(requestedPTR.summaryReport.basic_lot)
                setReviewedBy(requestedPTR.summaryReport.reviewed_by)
                setDescOnMap(requestedPTR.summaryReport.desc_on_map)
                setDocNo(requestedPTR.summaryReport.doc_no)
            }

            const documents = getFilteredDocumentsFromPTR(ptrDetails, [], true)
            const data = documents.map(row => [
                row.docno,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.sourcetype,
                row.transaction_value,
                row.recorded_date ? moment(row.recorded_date).format('DD/MM/YYYY') : "",
                row.execution_date ? moment(row.execution_date).format('DD/MM/YYYY') : "",
                row.prop_desc,
                row.grantor,
                row.grantee,
                row.notes,
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
                row.priority_no,
                row.ct_info,
            ]);

            const alphaData = ptrAlphaRecords.map(row => [
                row.docno,
                <DocumentChip row={row} ptrId={ptrDetails[0].id} fetchData={fetchData}/>,
                row.sourcetype,
                row.transaction_value,
                row.recorded_date ? moment(row.recorded_date).format('DD/MM/YYYY') : "",
                row.execution_date ? moment(row.execution_date).format('DD/MM/YYYY') : "",
                row.prop_desc,
                row.grantor,
                row.grantee,
                row.notes,
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
                row.priority_no,
                row.ct_info,
            ]);
            setData(data.concat(alphaData));
            setDataToPrint(data.concat(alphaData));
        }
    }, [ptrDetails, ptrAlphaRecords]);

    const options = useMemo(() => ({
        filter: true,
        filterType: 'multiselect',
        rowsPerPage: 100,
        selectableRows: "none",
        downloadOptions: {
            filename: 'ResearchSummary.csv',
            separator: ','
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
        rowsExpanded: Array.from(Array(data.length).keys()).filter(val => data[val][9]),
        renderExpandableRow: (rowData) => {
            if (rowData[9])
                return (
                    <TableRow>
                        <TableCell colSpan={rowData.length}>
                            {rowData[9]}
                        </TableCell>
                    </TableRow>
                )
            return null
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
    }), [classes, data])

    const optionsTaxInfo = useMemo(() => ({
        filter: true,
        filterType: 'multiselect',
        rowsPerPage: 100,
        selectableRows: "none",
        downloadOptions: {
            filename: 'TaxInfo.csv',
            separator: ','
        },
        print: false,
        customToolbar: () => (
            <Tooltip title="Print">
                <LocalPrintshop
                    className="text-gray-600 cursor-pointer hover:text-black"
                    onClick={() => setPrintTaxDataModal(true)}
                />
            </Tooltip>
        ),
        draggableColumns: {
            enabled: true,
            transitionTime: 300,
        },
        tableBodyMaxHeight: 'calc(100vh - 280px)',
        setRowProps: (row, dataIndex, rowIndex) => {
            const properties = {class: classes.dark2Background}
            if (rowIndex % 2 === 0)
                properties["class"] = clsx(properties["class"], classes.dark1Background)
            return properties
        },
        customSearch: customDataSearch,
        onTableChange: (action, tableState) => {
            if (action === 'sort')
                setTaxDataToPrint(tableState.displayData.map(row => row.data))
        }
    }), [classes]);

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
                setTaxData(data);
                setTaxDataToPrint(data);
                setIsLoading(false);
            }
        }).catch(error => {
            setIsLoading(false);
            console.error(error?.response?.data?.message);
        })
    }

    const fetchData = async (id) => {
        setIsLoading(true);
        await getPtrDetailsById(id);
        setIsLoading(false);
    }

    const handleSubmit = () => {
        axios.post(`/requests/savePTRSummary`, {
            "request_id": requestId,
            "customer_id": customerId,
            "land_parcel": propertyDesc,
            "type": type,
            "municipalityof": municipalityOf || null,
            "formerlyof": formerlyOf || null,
            "lotof": lotOf || null,
            "territoryofguam": territory || null,
            "drawing_number": drawingNumber || null,
            "lmcheck": lmCheck || null,
            "dated": requestDate || null,
            "recorded": recordedDate || null,
            "owners": owners || null,
            "unit_measure": areaUnit || null,
            "area": area || null,
            "desc_on_map": descOnMap || null,
            "doc_no": docNo,
            "lastCT": lastCt || null,
            "ownersCT": ownerCt || null,
            "basic_lot": basicLot,
            "estate_no": estateNo || null,
            "researched_by": researcher || null,
            "reviewed_by": reviewedBy || null,
            "user_dated": userDated || null
        }).then(response => {
            if (response.data.success) {
                showSuccess(response.data.message);
            }
        }).catch(error => {
            showError(error?.response?.data?.message);
        });
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

            <div className={classes.wrapperClass}>
                <div>
                    <TextField
                        className="flex-1"
                        label="Requester"
                        id="Requester"
                        value={customer}
                        InputProps={{readOnly: true}}
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Lot"
                        id="Lot"
                        variant="outlined"
                        value={lot_std}
                        InputProps={{readOnly: true}}
                        InputLabelProps={{shrink: true}}
                    />
                </div>
                <div className="flex-1 flex items-center">
                    <label className="mr-10">Territory of Guam</label>
                    <div className={classes.customizeWidth}>
                        <TextFieldSelect
                            label="Subdivision/Consolidation of/Formerly"
                            onChange={e => setTerritory(e.target.value)}
                            value={territory}
                            select
                            className="w-full"
                            required
                            InputProps={{readOnly: ptrStatus === 'Completed'}}
                        >
                            <MenuItem value={"Subdivision"}>Urban</MenuItem>
                            <MenuItem value={"consolidation"}>Suburban</MenuItem>
                        </TextFieldSelect>
                    </div>
                    <label className="ml-10">as said lot is marked and designated on</label>
                </div>
            </div>

            <div className={classes.wrapper}>
                <TextField
                    label="Block"
                    id="Block"
                    variant="outlined"
                    value={block_std}
                    InputProps={{readOnly: true}}
                    InputLabelProps={{shrink: true}}
                />
                <TextField
                    label="Unit"
                    id="Unit"
                    variant="outlined"
                    value={unit_std}
                    InputProps={{readOnly: true}}
                    InputLabelProps={{shrink: true}}
                />
                <TextField
                    label="Phase"
                    id="Phase"
                    variant="outlined"
                    value={phase || '-'}
                    InputProps={{readOnly: true}}
                    InputLabelProps={{shrink: true}}
                />
                <TextField
                    label="Tract"
                    id="Tract"
                    variant="outlined"
                    value={tract_std}
                    InputProps={{readOnly: true}}
                    InputLabelProps={{shrink: true}}
                />
            </div>

            <div className={clsx(classes.wrapper, "my-10")}>
                <div className="flex-1">
                    <TextFieldSelect
                        label="Subdivision of"
                        select
                        className="w-full"
                        required
                    >
                        <MenuItem value={"Subdivision"}>Subdivision Of</MenuItem>
                        <MenuItem value={"consolidation"}>Consolidation of</MenuItem>
                    </TextFieldSelect>
                </div>
                <div>
                    <TextField
                        className="w-full"
                        label="Lot"
                        id="Lot"
                        variant="outlined"
                        value={lotOf}
                        onChange={e => setLotOf(e.target.value)}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    />
                </div>
                <div>
                    <TextField
                        label="Municipality of"
                        id="Municipal"
                        variant="outlined"
                        className="w-full"
                        value={municipalityOf}
                        onChange={e => setMunicipalityOf(e.target.value)}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    />
                </div>
                <div>
                    <TextField
                        label="Formerly known as"
                        id="Formerly known as"
                        className="w-full"
                        variant="outlined"
                        value={formerlyOf}
                        onChange={e => setFormerlyOf(e.target.value)}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    />
                </div>
            </div>

            <div className={classes.wrapper}>
                <TextField
                    label="Drawing Number"
                    id="Drawing Number"
                    variant="outlined"
                    value={drawingNumber}
                    onChange={e => setDrawingNumber(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    label="LM. Check #"
                    id="LM. Check #"
                    variant="outlined"
                    value={lmCheck}
                    onChange={e => setLmCheck(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    label="Dated Date"
                    id="Dated Date"
                    variant="outlined"
                    type="date"
                    value={requestDate}
                    onChange={e => setRequestDate(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                    InputLabelProps={{shrink: true}}
                />
                <TextField
                    label="Recorded Date"
                    id="Recorded Date"
                    variant="outlined"
                    type="date"
                    value={recordedDate}
                    onChange={e => setRecordedDate(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                    InputLabelProps={{shrink: true}}
                />
            </div>

            <div className={classes.wrapper}>
                <TextField
                    label="Owner(s) on Record"
                    id="Owner(s) on Record"
                    variant="outlined"
                    value={owners}
                    onChange={e => setOwners(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <div className="flex items-center">
                    <TextFieldSelect
                        label="Unit"
                        variant="outlined"
                        onChange={e => setAreaUnit(e.target.value)}
                        value={areaUnit}
                        select
                        className="w-1/3"
                        classes={{root: classes.customLabel}}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    >
                        <MenuItem classes={{root: classes.customOption}} value="SQ M">Sq meters</MenuItem>
                        <MenuItem classes={{root: classes.customOption}} value="SQ FT">Sq feet</MenuItem>
                    </TextFieldSelect>
                    <TextField
                        label="Area"
                        id="Area"
                        variant="outlined"
                        type="number"
                        className="flex-1 ml-10"
                        value={area}
                        onChange={e => setArea(e.target.value)}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    />
                </div>
                <TextField
                    label="Last CT #"
                    id="Last CT #"
                    variant="outlined"
                    value={lastCt}
                    onChange={e => setLastCT(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    label="Owner(s) on CT"
                    id="Owner(s) on CT"
                    variant="outlined"
                    value={ownerCt}
                    onChange={e => setOwnersCT(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
            </div>

            <div className={classes.wrapper}>
                <TextField
                    label="Estate Number"
                    id="Estate Number"
                    variant="outlined"
                    value={estateNo}
                    onChange={e => setEstateNo(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    label="Basic Lot"
                    id="Basic Lot"
                    variant="outlined"
                    value={basicLot}
                    onChange={e => setBasicLot(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    label="Reviewed By"
                    id="Reviewed By"
                    variant="outlined"
                    value={reviewedBy}
                    onChange={e => setReviewedBy(e.target.value)}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
                <TextField
                    id="Date"
                    label="Date"
                    variant="outlined"
                    type="date"
                    value={userDated}
                    onChange={e => setUserDated(e.target.value)}
                    InputLabelProps={{shrink: true}}
                    InputProps={{readOnly: ptrStatus === 'Completed'}}
                />
            </div>

            <div className={clsx(classes.wrapperMethod)}>
                <div className="flex w-full flex-col ml-1 items-start">
                    <label>As Subscribed in the</label>
                    <TextField
                        className={classes.subWidth}
                        label="Description on Map"
                        id="Description on Map"
                        variant="outlined"
                        value={descOnMap}
                        onChange={e => setDescOnMap(e.target.value)}
                        InputProps={{readOnly: ptrStatus === 'Completed'}}
                    />
                </div>
                <div className={classes.subscribeWidth}>
                    <div className="flex w-full flex-col items-start">
                        <label>At the Records Division,Department of Land Management,Government of Guam Under</label>
                        <TextField
                            className={classes.subWidth}
                            label="Doc No."
                            id="Doc No."
                            variant="outlined"
                            value={docNo}
                            onChange={e => setDocNo(e.target.value)}
                            InputProps={{readOnly: ptrStatus === 'Completed'}}
                        />
                    </div>
                </div>
            </div>

            <div className="my-20 flex justify-between">
                <div>
                    <Button
                        className="whitespace-nowrap mx-4"
                        variant="contained"
                        color="secondary"
                        size="large"
                        disabled={ptrStatus === 'Completed' || _.isEmpty(ptrDetails)}
                        startIcon={<Save/>}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                    <Button
                        className="whitespace-nowrap mx-4"
                        variant="contained"
                        color="secondary"
                        size="large"
                        disabled={_.isEmpty(ptrDetails)}
                        startIcon={<PrintOutlined/>}
                        onClick={() => setIsPrint(true)}
                    >
                        Print
                    </Button></div>
                <div className="flex items-center">
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
                            Research Summary
                            {isLoading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                        </Typography>
                    }
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>

            <div className="w-full flex flex-col mt-16">
                <MUIDataTable
                    title={
                        <Typography variant="h6">
                            Tax Info
                            {isLoading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                        </Typography>
                    }
                    data={taxData}
                    columns={taxColumns}
                    options={optionsTaxInfo}
                />
            </div>

            {dataToPrint && <PrintModal
                openModal={printDataModal}
                setOpenModal={setPrintDataModal}
                title="RESEARCH SUMMARY REPORT"
                subTitle="PinPointGuam: Research Summary List"
                columns={columns.slice(1)}
                rows={dataToPrint?.map(i => i.slice(1))}
                isLoading={isLoading}
            />}

            {taxDataToPrint && <PrintModal
                openModal={printTaxDataModal}
                setOpenModal={setPrintTaxDataModal}
                title="TAX REPORT"
                subTitle="PinPointGuam: Tax Report"
                columns={taxColumns}
                rows={taxDataToPrint?.map(i => i)}
                isLoading={isLoading}
            />}

            {isPrint && <PrintPTRModal
                openModal={isPrint}
                setOpenModal={setIsPrint}
                title="PTR Research Summary Report"
                subTitle="PinPointGuam: PTR Document List"
                ptrId={props?.match?.params?.id}
            />}
        </Box>
    );
}

export default ResearchSummary