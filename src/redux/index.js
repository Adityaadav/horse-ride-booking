import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';

const rootReducer = combineReducers({
    booking: bookingReducer
});

const store = createStore(rootReducer);

export default store;
