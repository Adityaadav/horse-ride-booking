const initialState = {
    booking: {
        horse: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: ''
    }
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_BOOKING':
            return {
                ...state,
                booking: action.payload
            };
        default:
            return state;
    }
};

export default bookingReducer;
