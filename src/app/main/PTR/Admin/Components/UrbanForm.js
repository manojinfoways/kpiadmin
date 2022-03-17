import * as React from "react";
import {useState} from "react";
import {MenuItem} from "@mui/material";
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
    customOption: {
        fontSize: "12px !important"
    },
    customButton: {
        maxWidth: "255px",
        minWidth: "158px"
    },
});

const UrbanForm = (props) => {

    const [status, setStatus] = useState('');

    const classes = useStyles(props);

    const handleUpdate = () => {
        axios.put('ptr/set_urban_unurban', {
            ptr_id: props.ptrId,
            doc_record_id: props.docRecordId,
            status: status
        }).then(res => {
            showSuccess(res.data.message);
            props.fetchData(props.ptrId);
            setStatus(null)
        }).catch(error => {
            showError(error?.response?.data?.message);
            setStatus(null)
        });
    }

    return (
        <div className="flex flex-1 items-center mr-20">
            <TextField
                classes={{root: classes.customLabel}}
                label="Territory of Guam"
                variant="outlined"
                className="mr-12 ml-12"
                required
                select
                fullWidth
                value={status}
                disabled={!props.docRecordId.length || props.ptrStatus === 'Completed'}
                onChange={e => setStatus(e.target.value)}
            >
                <MenuItem key="urban" classes={{root: classes.customOption}} value="Urban">Urban</MenuItem>
                <MenuItem key="sub-urban" classes={{root: classes.customOption}} value="Suburban">Suburban</MenuItem>
            </TextField>
            <Button
                className={clsx("whitespace-nowrap mx-4", classes.customButton)}
                variant="contained"
                color="secondary"
                size="large"
                disabled={!status || props.ptrStatus === 'Completed'}
                startIcon={<Update/>}
                onClick={handleUpdate}
            >
                Update
            </Button>
        </div>
    )
}

export default UrbanForm