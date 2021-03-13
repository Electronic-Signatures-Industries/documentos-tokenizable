import * as actionTypes from './actionTypes';

export const active = ( payload ) => {
	return {
		type: actionTypes.IS_SIDE,
		isSide: payload
	};
};