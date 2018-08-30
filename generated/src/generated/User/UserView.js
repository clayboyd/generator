import React from 'react'
import PropTypes from 'prop-types'

import UserViewBase from './UserViewBase'

function UserView(props) {
    return (
        <div>
        <UserViewBase 
            submit={props.submit} 
            user={props.user }
        />
        </div>
    )
}

UserView.prototype.PropTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default UserView
