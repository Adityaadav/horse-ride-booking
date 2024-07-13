export const bookRide = (bookingDetails) => {
    return {
        type: 'BOOK_RIDE',
        payload: bookingDetails
    };
};
