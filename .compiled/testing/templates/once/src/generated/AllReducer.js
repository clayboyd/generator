'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = allReducer;


var initialState = { currentKey: 0 };

function allReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];


	switch (action.type) {

		case 'ALL_SETKEY':
			return _extends({}, state, {
				currentKey: action.payload.currentKey
			});

		default:
			return state;
	}
}
//# sourceMappingURL=AllReducer.js.map