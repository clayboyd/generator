
import constants from './UserConstants'
import services from './UserServices'

const initialState = {
	// CUSTOM_STATE_START 
	// CUSTOM_STATE_END 

	list: services.findAll(),
	busy: false,
	error: '',
	current: {}
}

export default function userReducer( state = initialState, action) {

	switch (action.type) {

		case constants.USER_CREATE:
		case constants.USER_FIND_ALL:
		case constants.USER_UPDATE:
		case constants.USER_DELETE:
		case constants.USER_SELECT:
			return {
				...state,
				...action.payload
			};

		// CUSTOM_CASE_START 
		// CUSTOM_CASE_END 
		
		default:
			return state
	}
}
