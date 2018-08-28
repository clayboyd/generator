
import constants from './{{clazz.name}}Constants'
import services from './{{clazz.name}}Services'

const initialState = {
	list: services.findAll(),
	busy: false,
	error: '',
	current: {}
}

export default function {{lowerFirst clazz.name}}Reducer( state = initialState, action) {

	switch (action.type) {

		case constants.{{upperCase clazz.name}}_CREATE:
		case constants.{{upperCase clazz.name}}_FIND_ALL:
		case constants.{{upperCase clazz.name}}_UPDATE:
		case constants.{{upperCase clazz.name}}_DELETE:
		case constants.{{upperCase clazz.name}}_SELECT:
			return {
				...state,
				...action.payload
			};

		default:
			return state
	}
}
