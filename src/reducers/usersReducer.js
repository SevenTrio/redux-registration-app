import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

let currentDate = new Date();

const mockUsers = [
    {
        userName: "Raiden Morgan",
        userGender: "Male",
        userCreditCard: "4111111111111111",
        withLoyaltyProgram: false,
        userCoupon: "",
        timeStamp: new Date(currentDate.getTime() - Math.floor(Math.random() * Math.floor(5*24*60*60*1000))),
        id: "b02ea187-bd92-48fa-8fca-d3b588690df1",
    },
    {
        userName: "Nicole Wright",
        userGender: "Female",
        userCreditCard: "4111111111111111",
        withLoyaltyProgram: true,
        userCoupon: "123456789",
        timeStamp: new Date(currentDate.getTime() - Math.floor(Math.random() * Math.floor(5*24*60*60*1000))),
        id: "c7273f1e-d774-4ba6-a9ab-5a3dd391830e",
    },
    {
        userName: "Peter Brooks",
        userGender: "Male",
        userCreditCard: "4111111111111111",
        withLoyaltyProgram: true,
        userCoupon: "123456789",
        timeStamp: new Date(currentDate.getTime() - Math.floor(Math.random() * Math.floor(5*24*60*60*1000))),
        id: "41d268ad-7b0f-4388-b34d-3bd43b8e33a3",
    },
];

initialState.users = [
    ...initialState.users,
    ...mockUsers,
];

const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case types.users.LOAD_FROM_STORAGE:
            return [
                ...state, ...action.payload
            ];

        case types.users.ADD:
            return [
                ...state, action.payload
            ];

        default:
            return state;
    }
};

export default usersReducer;