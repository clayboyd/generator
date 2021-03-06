import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './redux/AddressActions';
import {withRouter} from 'react-router-dom'

import AddressEditBase from './AddressEditBase'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function Edit(props) {
    // CUSTOM_SUBMIT_START 
        function submit(item) { return _submit(item) }
    // CUSTOM_SUBMIT_END 
    
    function _submit(object) {
        props.submit(object);
        props.history.push('/addresses')
    }
    const results = (
        <div>
        <AddressEditBase 
            submit={submit}
            error={props.error}
            busy={props.busy}
            current={props.current}
        />
        </div>
    )

    // CUSTOM_RESULTS_START
    return (results)
    // CUSTOM_RESULTS_END
}

Edit.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

const _mapStateToProps = (state, ownProps) => {
    return {
        ...state.addresses
    }
};

const _mapDispatchToProps = (dispatch) => {
    return {
        submit: (object) => {
            if (object.id) {
                dispatch( actions.update( object ))
            }
            else {
                dispatch( actions.create( object ))
            }
        }
    }
};

// CUSTOM_PROPTYPES_START 
const mapStateToProps = _mapStateToProps 
const mapDispatchToProps = _mapDispatchToProps 
// CUSTOM_PROPTYPES_END 

let Container = connect(
   mapStateToProps,
   mapDispatchToProps
)(Edit);

export default withRouter(Container);
