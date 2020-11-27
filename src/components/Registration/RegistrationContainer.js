import React, { Component } from "react";
import { connect } from "react-redux";
import {
    setFieldValue,
    clearFieldError,
    validateField,
    submitForm,
} from "../../actions/registrationFormActions";

import Registration from "./Registration";

class RegistrationContainer extends Component {
    handleChange = (e) => {
        const field = e.target;
        this.props.setFieldValue(field);
    };

    handleValidateField = (e) => {
        const field = e.target;
        this.props.validateField(field);
    }

    handleClearError = (e) => {
        const field = e.target;
        this.props.clearFieldError(field);
    }

    handleSubmit = () => {
        this.props.submitForm();
    };

    render() {
        return (
            <Registration 
                user={this.props.user}
                errors={this.props.errors}
                handleChange={this.handleChange}
                handleValidateField={this.handleValidateField}
                handleClearError={this.handleClearError}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.registrationForm.user,
    errors: state.registrationForm.errors,
});

const mapDispatchToProps = dispatch => {
    return {
        setFieldValue: (field) => dispatch(setFieldValue(field)),
        clearFieldError: (field) => dispatch(clearFieldError(field)),
        validateField: (field) => dispatch(validateField(field)),
        submitForm: () => dispatch(submitForm()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);