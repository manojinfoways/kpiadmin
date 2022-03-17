import moment from "moment/moment";
import store from "app/store";
import {showMessage} from "app/store/fuse/messageSlice";

export const getFilteredDocumentsFromPTR = (ptrDetails, documentTypes, showAllDoc) => {
    const documents = [].concat.apply([], ptrDetails.map(({properties}) => properties[0].docs));
    if (showAllDoc)
        return documents
    return filterDocuments(documents, documentTypes);
}

export const filterDocuments = (documents, documentTypes) => {
    return documents.filter(doc => documentTypes.includes(doc.ptr_report_status));
}

export const dateSortCompare = (order) => {
    return (obj1, obj2) => {
        let d1 = obj1.data ? moment(obj1.data, 'DD/MM/YYYY').valueOf() : Infinity*-1
        let d2 = obj2.data ? moment(obj2.data, 'DD/MM/YYYY').valueOf() : Infinity*-1
        return (d1 - d2) * (order === 'asc' ? 1 : -1);
    };
}

export const docSortCompare = (order) => {
    return (obj1, obj2) => {
        let d1 = parseInt(obj1.data.props.row.doc_no);
        let d2 = parseInt(obj2.data.props.row.doc_no);
        return (d1 - d2) * (order === 'asc' ? 1 : -1);
    }
}

export const customDataBodyRender = (value, tableMeta = undefined, updateValue = undefined) => {
    if (value === undefined || value === "undefined" || value === null || value === "null" || value === "nil" || value === "")
        return ''
    return value
}

export const customDataSearch = (searchTerm, currentRow, cols) => {
    return !!currentRow.filter((rowData, index) => {
        if (cols[index].name === "Doc No.")
            return rowData?.props?.row?.docno?.toLowerCase().includes(searchTerm.toLowerCase())
        else if (cols[index].name === "Status")
            return rowData.props.label.toLowerCase().includes(searchTerm.toLowerCase())
        return rowData?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    }).length
}

export const validURL = (str) => {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

export const downloadFileFromUrl = (url, fileName = "document") => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        fileName,
    );
    link.setAttribute(
        'target',
        '_blank',
    );
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
}

export const showSuccess = (message) => {
    store.dispatch(
        showMessage({
            message: message,
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            },
            variant: "success",
        })
    );
}

export const showError = (message) => {
    store.dispatch(
        showMessage({
            message: message || "Network Error",
            autoHideDuration: 3000,
            anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            },
            variant: "error",
        })
    );
}