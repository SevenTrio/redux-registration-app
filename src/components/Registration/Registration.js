import React from "react";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import CardInput from '../CardInput/CardInput'
import {Transition} from "react-transition-group";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './Registration.scss';

const Registration = ({ user, errors, showMessage, handleChange, handleValidateField, handleClearError, handleSubmit, handleMessageClose }) => {
    const inputTransitionDuration = 300;

    const inputDefaultStyle = {
        transition: `all ${inputTransitionDuration}ms ease-in-out`
    }

    const inputTransitionStyles = {
        entering: { opacity: 0, height: 0, marginBottom: 0 },
        entered:  { opacity: 1, height: 56, marginBottom: 32 },
        exiting:  { opacity: 0, height: 0, marginBottom: 0 },
        exited:   { opacity: 1, height: 56, marginBottom: 32 }
    };
    
    return (
        <div className="Registration">
            <h1 className="Registration-Heading">Registration</h1>
            <form className="Registration-Form">
                <TextField
                    className="Registration-TextField"
                    name="userName"
                    value={user.userName}
                    onFocus={handleClearError}
                    onChange={handleChange}
                    onBlur={handleValidateField}
                    label="User name"
                    variant="outlined"
                    error={!!errors.userName.length}
                    helperText={errors.userName}
                />

                <FormControl
                    className="Registration-TextField"
                    variant="outlined"
                    error={!!errors.userGender.length}
                >
                    <InputLabel id="userGenderLabel">Gender</InputLabel>
                    <Select
                        labelId="userGenderLabel"
                        id="userGender"
                        name="userGender"
                        value={user.userGender}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        label="Gender"
                    >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Non-binary"}>Non-binary</MenuItem>
                    </Select>
                    <FormHelperText>{errors.userGender}</FormHelperText>
                </FormControl>

                <TextField
                    className="Registration-TextField"
                    name="userCreditCard"
                    value={user.userCreditCard}
                    onFocus={handleClearError}
                    onChange={handleChange}
                    onBlur={handleValidateField}
                    label="Credit Card"
                    variant="outlined"
                    InputProps={{
                        inputComponent: CardInput
                    }}
                    helperText={errors.userCreditCard}
                    error={!!errors.userCreditCard.length}
                />

                <FormControlLabel
                    className="Registration-Switch"
                    control={
                        <Switch
                            checked={user.withLoyaltyProgram}
                            onChange={handleChange}
                            name="withLoyaltyProgram"
                        />}
                    label="Loyalty Program"
                    labelPlacement="end"
                />

                <Transition
                    in={user.withLoyaltyProgram}
                    timeout={inputTransitionDuration}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    {state => (
                        <TextField
                            className="Registration-TextField"
                            name="userCoupon"
                            value={user.userCoupon}
                            onChange={handleChange}
                            label="Coupon"
                            variant="outlined"
                            style={{
                                ...inputDefaultStyle,
                                ...inputTransitionStyles[state]
                            }}
                        />
                    )}
                </Transition>

                <Button
                    className="Registration-Button"
                    onClick={handleSubmit}
                    variant="contained"
                >
                    Create user
                </Button>
            </form>

            <Snackbar
                open={showMessage}
                onClose={handleMessageClose}
                message="I love snacks"
            >
                <Alert
                    onClose={handleMessageClose}
                    severity="success"
                    elevation={6}
                    variant="filled"
                >
                    User created successfully!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Registration;