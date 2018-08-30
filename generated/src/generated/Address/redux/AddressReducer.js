
import constants from './AddressConstants'
import services from './AddressServices'

const initialState = {
	// CUSTOM_STATE_START 
	// CUSTOM_STATE_END 

	list: services.findAll(),
	busy: false,
	error: '',
	current: {}
}

export default function addressReducer( state = initialState, action) {

	switch (action.type) {

		case constants.ADDRESS_CREATE:
		case constants.ADDRESS_FIND_ALL:
		case constants.ADDRESS_UPDATE:
		case constants.ADDRESS_DELETE:
		case constants.ADDRESS_SELECT:
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
