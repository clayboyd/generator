

const initialState = {currentKey: 0}

export default function allReducer( state = initialState, action) {

	switch (action.type) {

		case 'ALL_SETKEY':
			return {
				...state,
				currentKey:  action.payload.currentKey
			};

		default:
			return state
	}
}
