import {MenuItem} from "@mui/material";
import {Checkbox, TextField, Typography} from "@material-ui/core";
import * as React from "react";
import {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {showError, showSuccess} from "app/utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {fetchExceptionTypes} from "app/main/Configuration/store/configurationSlice";
import SimpleTable from "app/shared-components/SimpleTable";

const useStyles = makeStyles({
    customLabel: {
        "& label": {
            fontSize: "12px"
        },
    },
    customOption: {
        fontSize: "12px !important"
    }
});

const exceptionTableColumns = [
    {
        id: "Action",
        name: "Action"
    },
    {
        id: "Exception Title",
        name: "Exception Title"
    },
    {
        id: "Description",
        name: "Description"
    },
];

const PTRExceptionForm = (props) => {

    const [exception, setException] = useState('');
    const [description, setDescription] = useState('');
    const [exceptionTableData, setExceptionTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const exceptionTypes = useSelector(({configuration}) => configuration.exceptionType);

    const dispatch = useDispatch();
    const classes = useStyles(props);

    useEffect(() => {
        dispatch(fetchExceptionTypes());
    }, []);

    useEffect(() => {
        if (props.ptrId) {
            handleTableData();
            setException('');
        }
    }, [props.ptrId]);

    const handleTableData = () => {
        setIsLoading(true);
        axios.post('/ptr/selectedException', {
            ptr_id: props.ptrId,
        }).then(response => {
            if (response.data?.result?.length > 0) {
                setExceptionTableData(response.data.result.map((result, index) => ([
                        <ExceptionCheckBox
                            key={index}
                            ptrId={props.ptrId}
                            exceptionDetails={result}
                            ptrStatus={props.ptrStatus}
                        />,
                        result.title,
                        result.description,
                    ])
                ));
            } else {
                setExceptionTableData([]);
            }
            setIsLoading(false);
        }).catch(error => {
            setExceptionTableData([]);
        });
    }

    const handleUpdate = () => {
        axios.post('/ptr/updateException', {
            exception_id: exception,
            ptr_id: props.ptrId,
            description: description,
            status: true
        }).then(res => {
            handleTableData();
            showSuccess(res.data.message);
        }).catch(error => {
            showError(error?.response?.data?.message);
        });
    }

    return (
        <>
            <Typography variant="h6" className="ml-10 mb-16">PTR Exception</Typography>
            <div className="flex justify-between gap-x-16 items-center">
                <div className="w-full">
                    <TextField
                        classes={{root: classes.customLabel}}
                        label="PTR Exception"
                        variant="outlined"
                        className="mr-12 w-full"
                        required
                        select
                        value={exception}
                        disabled={!props.ptrId || props.ptrStatus === 'Completed'}
                        onChange={e => setException(e.target.value)}
                    >
                        {exceptionTypes.map((exception) => {
                            if (!exception.trash) {
                                return (
                                    <MenuItem
                                        key={exception.exception_id}
                                        classes={{root: classes.customOption}}
                                        value={exception.exception_id}
                                    >
                                        {exception.title}
                                    </MenuItem>
                                )
                            }
                        })}
                    </TextField>
                </div>
                <div className="w-full">
                    <TextField
                        className="flex-1 w-full"
                        label="Description"
                        id="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        variant="outlined"
                        disabled={!props.ptrId || props.ptrStatus === 'Completed'}
                    />
                </div>
                <div>
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        onClick={handleUpdate}
                        disabled={!props.ptrId || props.ptrStatus === 'Completed'}
                    >
                        Add Exception
                    </Button>
                </div>
            </div>
            <div className="my-40">
                <div className="mb-8">
                    {!_.isEmpty(exceptionTableData) && (
                        <SimpleTable
                            columns={exceptionTableColumns}
                            rows={exceptionTableData}
                            isLoading={isLoading}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

const ExceptionCheckBox = (props) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(props.exceptionDetails.exception_status);
    }, []);

    const handleCheckChange = (event) => {
        const isChecked = event.target.checked;
        axios.post('/ptr/updateException', {
            exception_id: props.exceptionDetails.exception_id,
            ptr_id: props.ptrId,
            description: props.exceptionDetails.description,
            status: isChecked
        }).then(res => {
            setChecked(isChecked);
            showSuccess(res.data.message);
        }).catch(error => {
            showError(error?.response?.data?.message);
        });
    }

    return (
        <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            disabled={props.ptrStatus === 'Completed'}
        />
    )
}

export default PTRExceptionForm;