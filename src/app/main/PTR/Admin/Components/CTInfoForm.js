import * as React from "react";
import {useState} from "react";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Update} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {showError, showSuccess} from "app/utils/helpers";
import clsx from "clsx";

const useStyles = makeStyles({
    customLabel: {
        "& label": {
            fontSize: "12px"
        },
    },
    customButton: {
        maxWidth: "255px",
        minWidth: "158px"
    },
});

const UrbanForm = (props) => {

    const [ctInfo, setCTInfo] = useState(null);

    const classes = useStyles(props);

    const handleUpdate = () => {
        axios.put('ptr/update_ct_info', {
            ptr_id: props.ptrId,
            doc_record_id: props.docRecordId,
            ct_info: ctInfo
        }).then(res => {
            showSuccess(res.data.message);
            props.fetchData(props.ptrId);
            setCTInfo(null)
        }).catch(error => {
            showError(error?.response?.data?.message);
            setCTInfo(null)
        });
    }

    return (
        <div className="flex flex-1 justify-start items-center mr-10">
            <TextField
                id="ctInfo"
                label="CT Info"
                classes={{root: classes.customLabel}}
                type="text"
                className="mr-12 ml-12 w-full"
                name="ctInfo"
                inputProps={{ maxLength: 50 }}
                disabled={!props.docRecordId.length || props.ptrStatus === 'Completed'}
                onChange={e => setCTInfo(e.target.value)}
                variant="outlined"
            />
            <Button
                className={clsx("whitespace-nowrap mx-8", classes.customButton)}
                variant="contained"
                color="secondary"
                size="large"
                disabled={!ctInfo || props.ptrStatus === 'Completed'}
                startIcon={<Update/>}
                onClick={handleUpdate}
            >
                Update
            </Button>
        </div>
    )
}

export default UrbanForm