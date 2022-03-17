import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {showError, showSuccess} from "app/utils/helpers";
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";

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
    }
}));

const ChangePassword = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const user = useSelector(({auth}) => auth.user);
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({})

    useEffect(() => {
       dispatch(setToolbarHeader('Change Password'))
    },[])

    const formClear = () => {
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
    }

    const formSubmit = () => {
        setError({})
        if(oldPassword && newPassword && confirmPassword){
            if (newPassword === confirmPassword) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`;
                axios.put('https://auth.pinpointguam.com/updatepassword', {
                        "EmailId": user.data.email,
                        "OldPassword": oldPassword,
                        "Password": newPassword
                }).then(res => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${user.id_token}`;
                    if(res.data.success)
                        showSuccess(res.data.message)
                    else
                        showError(res.data.message)
                }).catch(err => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${user.id_token}`;
                    showError('Something went wrong')
                })
                formClear();
            } else {
                showError('New Password & Confirm Password should be same')
            }
        }else {
            if(!oldPassword)
                setError(prev => ({ ...prev, oldPassword: true}))
            if(!newPassword)
                setError(prev => ({ ...prev, newPassword: true}))
            if(!confirmPassword)
                setError(prev => ({...prev, confirmPassword: true}))
        }
    }

    return (
        <Box
            sx={{
                margin: '30px',
                width: '50%'
            }}
        >
            <div className='mb-20'>
                <TextField
                    id="Old Password"
                    label="Old Password"
                    classes={{root: classes.customLabel}}
                    type="password"
                    name={"OldPassword"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                    error={error.oldPassword}
                />
            </div>
            <div className='mb-20'>
                <TextField
                    id="New Password"
                    label="New Password"
                    classes={{root: classes.customLabel}}
                    type="password"
                    name={"Password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                    error={error.newPassword}
                />
            </div>
            <div className='mb-20'>
                <TextField
                    id="Confirm Password"
                    label="Confirm Password"
                    classes={{root: classes.customLabel}}
                    type="password"
                    name={"confirm password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                    error={error.confirmPassword}
                />
            </div>
            <SubmitButton variant="contained" onClick={formSubmit}>Change Password</SubmitButton>
        </Box>
    )
}

export default ChangePassword