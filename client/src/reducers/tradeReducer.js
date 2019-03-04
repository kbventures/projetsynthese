//trade reducer: reducers are where the actual state will go



import uuid from 'uuid';
import { GET_TRADES, ADD_TRADE, DELETE_TRADE} from '../actions/types';

//static data that will eventually come from back end
const initialState = {
    trades: [
        { id: uuid(), name:'BTC/USD' },
        { id: uuid(), name:'BTC/ETH' },
        { id: uuid(), name:'BTC/LTC' },
        { id: uuid(), name:'BTC/EOS' },
        { id: uuid(), name:'ETH/USD' }
    ]
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_TRADES:
            return {
                ...state
            }
            default:
                return state;
    }
}