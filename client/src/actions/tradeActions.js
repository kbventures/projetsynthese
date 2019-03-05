import {GET_TRADES, ADD_TRADE, DELETE_TRADE} from './types';

export const getTrades = () => {
    return {
        type: GET_TRADES
    };
};

export const deleteTrade = (id) => {
    return {
        type: DELETE_TRADE,
        payload: id
    };
};

export const addTrade = trade => {
    return {
        type: ADD_TRADE,
        payload: trade
    };
};