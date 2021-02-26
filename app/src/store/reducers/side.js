import * as actionTypes from '../actions/actionTypes';

const initialState = {
	isSide: false,
	balances: { 'bnb' : 0, 'dai' : 0 },
	allowance: { 'bnb' : 0, 'dai' : 0 },
	network: 'test',
	address: '',
	did: '',
	isConnected: false
};

const active = (state, action) => {
	return {
		...state, 
		isSide: action.isSide 
	}
}

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
	case actionTypes.IS_SIDE: 
		return active(state, action);
	default: 
		return state;
	}
};

export default reducer;