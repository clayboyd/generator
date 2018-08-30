import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button } from 'react-bootstrap'

import HorizontalGroup from '../utils/HorizontalGroup'
// CUSTOM_IMPORT_START
// CUSTOM_IMPORT_END

function UserEditBase(props) {
    const obj = props.current || {}
    let refs = {}
    
    function _submit(e) {
        e.preventDefault()
            obj.email = refs.email.value
            obj.password = refs.password.value
            obj.firstName = refs.firstName.value
            obj.lastName = refs.lastName.value
            obj.comment = refs.comment.value
        props.submit(obj)
    }
    // CUSTOM_SUBMIT_START
    function submit(e) {
        _submit(e)
    }
    // CUSTOM_SUBMIT_END

    function ref(name) {
        return function(input) {
            refs[name] = input
        }
    }

    const results = (
        <div>
        <h2>Edit User</h2>
            <Form horizontal onSubmit={submit}>
                    <HorizontalGroup
                        name="email"
                        id="email_id"
                        type="text"
                        label="Email"
                        inputRef={ref('email')}
                        defaultValue={obj.email }
                        ui={ {"type":"text","label":"Email"} }
                        />
                    <HorizontalGroup
                        name="password"
                        id="password_id"
                        type="password"
                        label="Password"
                        inputRef={ref('password')}
                        defaultValue={obj.password }
                        ui={ {"private":true,"type":"password","label":"Password"} }
                        />
                    <HorizontalGroup
                        name="firstName"
                        id="firstName_id"
                        type="text"
                        label="First Name"
                        inputRef={ref('firstName')}
                        defaultValue={obj.firstName }
                        ui={ {"type":"text","label":"First Name"} }
                        />
                    <HorizontalGroup
                        name="lastName"
                        id="lastName_id"
                        type="text"
                        label="Last Name"
                        inputRef={ref('lastName')}
                        defaultValue={obj.lastName }
                        ui={ {"type":"text","label":"Last Name"} }
                        />
                    <HorizontalGroup
                        name="comment"
                        id="comment_id"
                        type="textarea"
                        label="Comment"
                        inputRef={ref('comment')}
                        defaultValue={obj.comment }
                        ui={ {"type":"textarea","label":"Comment"} }
                        />

                <Button bsStyle="primary" type="submit">{obj.id ? 'Save' : 'Create'}</Button>

            </Form>
        </div>
    )

    // CUSTOM_RESULTS_START
    return (results)
    // CUSTOM_RESULTS_END
}

UserEditBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START
    // CUSTOM_PROPTYPES_END
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

export default UserEditBase
