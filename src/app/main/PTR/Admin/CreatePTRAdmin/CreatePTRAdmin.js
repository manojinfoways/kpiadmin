import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Box, CircularProgress} from '@material-ui/core';
import {Autocomplete, Button, MenuItem, TextField} from "@mui/material";
import {styled} from '@mui/material/styles';
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {showError, showSuccess} from "app/utils/helpers";
import history from "@history";

const SubmitButton = styled(Button)({
    width: "100%",
    marginTop: "15px",
    padding: "10px 0px",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "12px"
});

const useStyles = makeStyles((theme) => ({
    customLabel: {
        "& label": {
            fontSize: "12px"
        },
    },
    customOption: {
        fontSize: "12px !important"
    }
}));

const CreatePTRAdmin = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [notes, setNotes] = useState('');
    const [customer, setCustomer] = useState('');
    const [requestType, setRequestType] = useState('');
    const [error, setError] = useState({});
    const [options, setOptions] = useState([]);
    const [inputData, setInputData] = useState('');
    const [resWareFileNumber, setResWareFileNumber] = useState('');

    const classes = useStyles(props);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToolbarHeader('Create a New PTR Request'));
    }, []);

    useEffect(() => {
        if (inputData && inputData.length > 2) {
            axios.post(`/properties/search`, {
                searchText: inputData
            }).then(res => setOptions(res.data.rows));
        }
    }, [inputData]);

    const formClear = () => {
        setNotes('');
        setCustomer('');
        setRequestType('');
        setInputData('');
        setOptions([]);
        setError({});
    }

    const formSubmit = () => {
        if (isFormValid()) {
            setIsLoading(true);
            axios.post(`/requests/createPtrFormAdmin`, {
                customer_id: customer,
                property_id: options[0]?.property_id,
                land_parcel: inputData,
                notes: notes,
                request_type: requestType,
                resware_file_number: resWareFileNumber
            }).then(res => {
                showSuccess(res.data.message);
                formClear();
                setIsLoading(false);
                history.push('/ptr/admin/dashboard');
            }).catch(error => {
                setIsLoading(false);
                showError(error?.response?.data?.message);
            })
        }
    }

    const isFormValid = () => {
        setError({});
        let isValid = true;
        if (inputData)
            setError(prev => ({...prev, option: false}))
        else {
            setError(prev => ({...prev, options: true}))
            isValid = false
        }
        if (requestType)
            setError(prev => ({...prev, requestType: false}))
        else {
            setError(prev => ({...prev, requestType: true}))
            isValid = false;
        }
        if (customer)
            setError(prev => ({...prev, customer: false}))
        else {
            setError(prev => ({...prev, customer: true}))
            isValid = false;
        }

        return isValid;
    }

    return (
        <Box
            sx={{
                margin: '30px',
                width: '50%'
            }}
        >
            <Autocomplete
                className="mt-10 mb-16"
                inputValue={inputData}
                onInputChange={(event, newInputValue) => setInputData(newInputValue.toUpperCase())}
                getOptionLabel={option => option.property_descriptor_std}
                options={options}
                renderInput={params =>
                    <TextField
                        classes={{root: classes.customLabel}}
                        error={error.options}
                        {...params}
                        label="Land parcel"
                        variant="outlined"
                        required
                    />
                }
            />
            <div className="mt-10 mb-16">
                <TextField
                    id="Customer Name"
                    label="Customer Name"
                    required
                    select
                    classes={{root: classes.customLabel}}
                    type="text"
                    name="Customer Name"
                    value={customer}
                    onChange={e => setCustomer(e.target.value)}
                    variant="outlined"
                    fullWidth
                    error={error.customer}
                >
                    <MenuItem classes={{root: classes.customOption}} value={87}>TG PTR</MenuItem>
                </TextField>
            </div>
            <div className="mt-10 mb-16">
                <TextField
                    classes={{root: classes.customLabel}}
                    label="Request Type"
                    variant="outlined"
                    className="mt-10 mb-16"
                    required
                    select
                    fullWidth
                    error={error.requestType}
                    value={requestType}
                    onChange={e => {
                        setError(prev => [prev[0], false])
                        setRequestType(e.target.value)
                    }}
                >
                    <MenuItem classes={{root: classes.customOption}} value={"Standard"}>Standard</MenuItem>
                    <MenuItem classes={{root: classes.customOption}} value={"Rush"}>Rush</MenuItem>
                </TextField>
            </div>
            <div className="mt-10 mb-16">
                <TextField
                    id="ResWareFileNumber"
                    label="ResWare File Number"
                    classes={{root: classes.customLabel}}
                    type="text"
                    value={resWareFileNumber}
                    onChange={e => setResWareFileNumber(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="mt-10 mb-16">
                <TextField
                    id="Description"
                    label="Description"
                    classes={{root: classes.customLabel}}
                    type="text"
                    name="notes"
                    inputProps={{maxLength: 50}}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                />
            </div>
            {isLoading ? (
                <div className="flex justify-center mt-20">
                    <CircularProgress size={30}/>
                </div>
            ) : (
                <SubmitButton
                    variant="contained"
                    onClick={formSubmit}
                >
                    Submit
                </SubmitButton>
            )}
        </Box>
    )
}

export default CreatePTRAdmin

