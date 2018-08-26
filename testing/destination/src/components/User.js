import React, {Component} from 'react'

function User(props) {
    const obj = props.user
    return (
        <div>
        <div>User</div>
            <form onSubmit={props.submit(obj)}>
                <div className="formElement">
                <label htmlFor="firstName_id">First Name</label>
                <input type="text" 
                    id="firstName_id"
                    value={ obj.firstName } />
                </div>
                <div className="formElement">
                <label htmlFor="lastName_id">Last Name</label>
                <input type="text" 
                    id="lastName_id"
                    value={ obj.lastName } />
                </div>
                <div className="formElement">
                <label htmlFor="username_id">Username</label>
                <input type="text" 
                    id="username_id"
                    value={ obj.username } />
                </div>
                <div className="formElement">
                <label htmlFor="password_id">Password</label>
                <input type="text" 
                    id="password_id"
                    value={ obj.password } />
                </div>

            </form>
        </div>
    )
}

User.prototype.PropTypes = {
    user: PropTypes.obj.isRequired,
    submit: PropTypes.func.isRequired
}

export default User