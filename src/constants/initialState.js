const initialState = {
    menu: {
        active: false
    },
    users: [],
    registrationForm: {
        user: {
            userName: "",
            userGender: "",
            userCreditCard: "",
            withLoyaltyProgram: false,
            userCoupon: "",
            timeStamp: ""
        },
        errors: {
            userName: "",
            userGender: "",
            userCreditCard: "",
        },
        validated: {
            userName: false,
            userGender: false,
            userCreditCard: false,
        },
    },
    successMessage: {
        show: false
    },
    joke: {
        value: "",
        isLoading: false,
        isError: false,
    }
};

export default initialState;