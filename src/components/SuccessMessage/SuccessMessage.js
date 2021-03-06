import React from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const SuccessMessage = ({ show }) => {
    return (
        <Snackbar
            open={show}
            message="User created successfully!"
        >
            <Alert
                severity="success"
                elevation={6}
                variant="filled"
            >
                User created successfully!
            </Alert>
        </Snackbar>
    )
}

export default SuccessMessage