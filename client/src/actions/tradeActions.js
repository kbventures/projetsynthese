import {GET_TRADES, ADD_TRADE, DELETE_TRADE} from './types';

export const getTrades = ()  => {
    return {
        type: GET_TRADES
    };
};