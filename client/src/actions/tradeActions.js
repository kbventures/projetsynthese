import axios from 'axios';
import {GET_TRADES, ADD_TRADE, DELETE_TRADE,TRADES_LOADING} from './types';

export const getTrades = () => dispatch => {
    dispatch(setTradesLoading());
    axios
        .get('/api/trades') //see proxy in package.json inside client folder
                            // ie: "proxy": "http://localhost:5000",
        .then(res => 
            dispatch({
            type: GET_TRADES,
            payload: res.data
        })
        )
    };

export const deleteTrade = id => dispatch => {
    /*use ` when variable added to url, ie: ${id} in this case*/
    axios.delete(`/api/trades/${id}`).then(res =>
        dispatch({
            type: DELETE_TRADE,
            payload: id
        })
    );
};

export const addTrade = trade => dispatch => {
  axios
  .post('/api/trades',trade)
  .then(res => dispatch({
        type: ADD_TRADE,
        payload: res.data
    })
  )
};

export const setTradesLoading = () => {
    return { 
        type: TRADES_LOADING
    };
};