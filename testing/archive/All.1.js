import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import { connect, Provider } from 'react-redux';

import store from './Store'

{{#each model.classes}}
import {{name}} from './{{name}}/{{name}}Edit'
{{/each}}

function All(props) {
    function submit(obj) {
        console.log(obj)
    }

    return (
        <Provider store={store}>
        <Tabs
            activeKey={props.currentKey}
            onSelect={props.setKey}
            id="all_id"
        >
        {{#each model.classes}}
            <Tab eventKey={ {{@index}} } title="{{name}}">
                <{{name}} {{lowerFirst name}}={ {} } submit={submit} />
            </Tab>
        {{/each}}
        </Tabs>
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
