
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'

{{#each model.classes}}
import {{lowerFirst name}}Reducer from './{{name}}/redux/{{name}}Reducer'
{{/each}}
import allReducer from './AllReducer'

const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
        all: allReducer,
        {{#each model.classes}}
        {{lowerPlural name}}: {{lowerFirst name}}Reducer,
        {{/each}}
    }),
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

export default store;
