
import constants from './ExampleConstants'
import services from './ExampleServices'

const initialState = {
	// CUSTOM_STATE_START 
	// CUSTOM_STATE_END 

	list: services.findAll(),
	busy: false,
	error: '',
	current: {}
}

export default function exampleReducer( state = initialState, action) {

	switch (action.type) {

		case constants.EXAMPLE_CREATE:
		case constants.EXAMPLE_FIND_ALL:
		case constants.EXAMPLE_UPDATE:
		case constants.EXAMPLE_DELETE:
		case constants.EXAMPLE_SELECT:
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
