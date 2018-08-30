
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import userReducer from './User/redux/UserReducer'
import addressReducer from './Address/redux/AddressReducer'
import exampleReducer from './Example/redux/ExampleReducer'
import allReducer from './AllReducer'

const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
        all: allReducer,
        users: userReducer,
        addresses: addressReducer,
        examples: exampleReducer,
    }),
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

export default store;
