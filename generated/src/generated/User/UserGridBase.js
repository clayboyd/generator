import React from 'react'
import PropTypes from 'prop-types'
import {Table } from 'react-bootstrap'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function UserGridBase(props) {
    // CUSTOM_SUBMIT_START 
        function submit(object) { return _submit(object) } 
    // CUSTOM_SUBMIT_END 
    
    function _submit(obj) {
        return function(e) {
            e.preventDefault()
            props.submit(obj)    
        }
    }

    const results = (
        <div>
        <h2>Users</h2>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Comment</th>
        </tr>
        </thead>
        <tbody>
        {props.list.map( (object, idx) => {
            return (
                <tr key={idx} onClick={submit(object)}>
                        <td>{object.email }</td>
                                            <td>{object.firstName }</td>
                                            <td>{object.lastName }</td>
                                            <td>{object.comment }</td>
                                    </tr>
            )
        })}
        </tbody>
        </Table>
        </div>
    )
    // CUSTOM_RETURN_START 
    return results;
    // CUSTOM_RETURN_END 
}

UserGridBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string
}

export default UserGridBase
