import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './redux/{{clazz.name}}Actions';
import {withRouter} from 'react-router-dom'

import {{clazz.name}}GridBase from './{{clazz.name}}GridBase'

function Grid(props) {
    function submit(object) {
        props.submit(object);
        props.history.push('/{{lowerFirst clazz.name}}')
    }
    return (
        <div>
        <{{clazz.name}}GridBase 
            submit={submit}
            list={props.list}
            error={props.error}
            busy={props.busy}
        />
        </div>
    )
}

Grid.prototype.PropTypes = {
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.{{lowerPlural clazz.name}}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (object) => {
            dispatch( actions.select( object ))
        }
    }
};
let Container = connect(
   mapStateToProps,
   mapDispatchToProps
)(Grid);

export default withRouter(Container);
