//trade reducer: reducers are where the actual state will go




import { GET_TRADES, ADD_TRADE, DELETE_TRADE, TRADES_LOADING} from '../actions/types';

//static data that will eventually come from back end
const initialState = {
    trades: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_TRADES:
            return {
                ...state,
                trades: action.payload,
                loading: false
            };
        case DELETE_TRADE:
            return {
                ...state,
                trades: state.trades.filter(trade => trade._id !== action.payload) //mongo as _id
            };
        case ADD_TRADE:
            return {
                ...state,
                trades: [action.payload, ...state.trades]
            };
        case TRADES_LOADING: 
            return {
                ...state,
                loading: true
            };
            default:
                return state;
    }
}

