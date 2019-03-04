//root reducer; bring together all reducers

import {combineReducers} from 'redux';
import tradeReducer from './tradeReducer';

export default combineReducers({
    trade: tradeReducer
});