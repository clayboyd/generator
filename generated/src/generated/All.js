import React from 'react'
import { connect, Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
//import {Row, Col} from 'react-bootstrap'

import store from './Store'
import Nav from './Nav'

import UserGrid from './User/UserGrid'
import User from './User/UserEdit'
import AddressGrid from './Address/AddressGrid'
import Address from './Address/AddressEdit'
import ExampleGrid from './Example/ExampleGrid'
import Example from './Example/ExampleEdit'

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
            <Route path="/users" component={ UserGrid}/>
            <Route path="/user" component={ User }/>
            <Route path="/addresses" component={ AddressGrid}/>
            <Route path="/address" component={ Address }/>
            <Route path="/examples" component={ ExampleGrid}/>
            <Route path="/example" component={ Example }/>
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
