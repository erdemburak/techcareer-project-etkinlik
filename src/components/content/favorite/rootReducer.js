import { combineReducers } from 'redux';
import favoriteEventsReducer from './favoriteEventsSlice';

const rootReducer = combineReducers({
    favoriteEvents: favoriteEventsReducer,
    // other reducers...
});

export default rootReducer;