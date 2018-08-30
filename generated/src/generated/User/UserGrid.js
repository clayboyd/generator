import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './redux/UserActions';
import {withRouter} from 'react-router-dom'

import UserGridBase from './UserGridBase'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function Grid(props) {
    // CUSTOM_SUBMIT_START 
        function submit(object) { return _submit(object) } 
    // CUSTOM_SUBMIT_END 
    
    function _submit(object) {
        props.submit(object);
        props.history.push('/user')
    }
    const results = (
        <div>
        <UserGridBase 
            submit={submit}
            list={props.list}
            error={props.error}
            busy={props.busy}
        />
        </div>
    )

    // CUSTOM_RETURN_START 
        return (results)
    // CUSTOM_RETURN_END 
}

Grid.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

const _mapStateToProps = (state, ownProps) => {
    return {
        ...state.users
    }
};

const _mapDispatchToProps = (dispatch) => {
    return {
        submit: (object) => {
            dispatch( actions.select( object ))
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
)(Grid);

export default withRouter(Container);
