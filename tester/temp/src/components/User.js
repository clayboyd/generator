import React, {Component} from 'react'
import PropTypes from 'prop-types'

function User(props) {
    const obj = props.user
    
    function change (name) {
        return function(e) {
            obj[name] = e.target.value
        }
    }

    function submit(e) {
        e.preventDefault()
        console.log('calling submit')
        props.submit(obj)
    }

    return (
        <div>
        <div>User</div>
            <form onSubmit={submit}>
                <div className="formElement">
                <label htmlFor="firstName_id">First Name</label>
                <input type="text" 
                    id="firstName_id"
                    value={ obj.firstName } 
                    onChange={change('firstName')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="lastName_id">Last Name</label>
                <input type="text" 
                    id="lastName_id"
                    value={ obj.lastName } 
                    onChange={change('lastName')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="username_id">Username</label>
                <input type="text" 
                    id="username_id"
                    value={ obj.username } 
                    onChange={change('username')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="password_id">Password</label>
                <input type="text" 
                    id="password_id"
                    value={ obj.password } 
                    onChange={change('password')}
                    />
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

User.prototype.PropTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default User
