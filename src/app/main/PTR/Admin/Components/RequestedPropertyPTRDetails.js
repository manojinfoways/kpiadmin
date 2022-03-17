import {useEffect, useState} from "react";
import SimpleTable from "app/shared-components/SimpleTable";
import * as React from "react";
import moment from "moment";

const propertyTableColumns = [
    {
        id: "Properties Associated With This PTR",
        name: "Properties Associated With This PTR",
        cellStyle: {
            minWidth: "150px"
        }
    },
    {
        id: "Request NO",
        name: "Request NO"
    },
    {
        id: "Researcher",
        name: "Researcher"
    },
    {
        id: "ResWare File No.",
        name: "ResWare File No."
    },
    {
        id: "Date Completed",
        name: "Date Completed"
    },
    {
        id: "Date Requested",
        name: "Date Requested"
    },
    {
        id: "Status",
        name: "Status"
    },
]

const RequestedPropertyPTRDetails = (props) => {

    const [propertyTableData, setPropertyTableData] = useState([]);

    useEffect(() => {
        if (!_.isEmpty(props.ptrDetails)) {
            const requestedPTR = props.ptrDetails.find(property => property.properties[0].property_ptr_type === "Requested")
            if (requestedPTR) {
                setPropertyTableData([
                    [
                        requestedPTR.property_descriptor,
                        requestedPTR.id,
                        requestedPTR.staff_username,
                        requestedPTR.resware_file_number,
                        requestedPTR.date_completed ? moment(requestedPTR.date_completed).format('DD/MM/YYYY') : '',
                        requestedPTR.request_date ? moment(requestedPTR.request_date).format('DD/MM/YYYY') : '',
                        requestedPTR.ptr_status,
                    ]
                ]);
            }
            props.setPtrStatus(requestedPTR.ptr_status)
        } else {
            setPropertyTableData([])
        }
    }, [props.ptrDetails]);

    return (
        <div className="mb-8">
            <SimpleTable
                columns={propertyTableColumns}
                rows={propertyTableData}
                isLoading={props.isLoading}
            />
        </div>
    )

}

export default RequestedPropertyPTRDetails;