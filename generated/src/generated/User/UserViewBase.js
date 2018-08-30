import React from 'react'
import PropTypes from 'prop-types'

function UserViewBase(props) {
    const obj = props.user
    
    function change (name) {
        return function(e) {
            obj[name] = e.target.value
        }
    }

    function submit(e) {
        e.preventDefault()
        props.submit(obj)
    }

    return (
        <div>
        <div>User</div>
            <form onSubmit={submit}>
                <div className="formElement">
                <label htmlFor="email_id">Email</label>
                <input type="text" 
                    id="email_id"
                    value={ obj.email } 
                    onChange={change('email')}
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
                <label htmlFor="comment_id">Comment</label>
                <input type="text" 
                    id="comment_id"
                    value={ obj.comment } 
                    onChange={change('comment')}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

UserViewBase.prototype.PropTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default UserViewBase
