import React from 'react'
import { connect, Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
//import {Row, Col} from 'react-bootstrap'

import store from './Store'
import Nav from './Nav'

{{#each model.classes}}
import {{name}}Grid from './{{name}}/{{name}}Grid'
import {{name}} from './{{name}}/{{name}}Edit'
{{/each}}

function Home(props) {
    return (
        <div>This is Home</div>
    )
}
function All(props) {
    const style = {
        padding: 15
    }
    return (
        <Provider store={store}>
        <div style={style}>
        <Router>
        <div>
            <Nav />
            <div>
            <Route exact path="/" component={Home}/>
            {{#each model.classes}}
            <Route path="/{{lowerPlural name}}" component={ {{name}}Grid}/>
            <Route path="/{{lowerSingular name}}" component={ {{name}} }/>
            {{/each}}
            </div>
        </div>
        </Router>
        </div>
        </Provider>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentKey: state.all.currentKey
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setKey:(currentKey)=> {
            dispatch( {  
                    type: 'ALL_SETKEY',
                    payload: {currentKey}
            });
        }
    }
};
let AllContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(All);

export default AllContainer;
