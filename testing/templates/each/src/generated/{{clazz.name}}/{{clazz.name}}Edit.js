import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import actions from './redux/{{clazz.name}}Actions';
import {withRouter} from 'react-router-dom'

import {{clazz.name}}EditBase from './{{clazz.name}}EditBase'

function Edit(props) {
    function submit(object) {
        props.submit(object);
        props.history.push('/{{lowerPlural clazz.name}}')
    }
    return (
        <div>
        <{{clazz.name}}EditBase 
            submit={submit}
            error={props.error}
            busy={props.busy}
            current={props.current}
        />
        </div>
    )
}

Edit.prototype.PropTypes = {
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
//    list: PropTypes.array.isRequired,
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
            if (object.id) {
                dispatch( actions.update( object ))
            }
            else {
                dispatch( actions.create( object ))
            }
        }
    }
};
let Container = connect(
   mapStateToProps,
   mapDispatchToProps
)(Edit);

export default withRouter(Container);
