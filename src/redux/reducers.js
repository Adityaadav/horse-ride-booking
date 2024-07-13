const initialState = {
  bookings: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'BOOK_RIDE':
          return {
              ...state,
              bookings: [...state.bookings, action.payload]
          };
      default:
          return state;
  }
};

export default rootReducer;
