import React from 'react'
import PropTypes from 'prop-types'
import {Table } from 'react-bootstrap'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function AddressGridBase(props) {
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
        <h2>Addresses</h2>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
                <th>Street 1</th>
                <th>Street 2</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Country</th>
        </tr>
        </thead>
        <tbody>
        {props.list.map( (object, idx) => {
            return (
                <tr key={idx} onClick={submit(object)}>
                        <td>{object.street1 }</td>
                                            <td>{object.street2 }</td>
                                            <td>{object.city }</td>
                                            <td>{object.state }</td>
                                            <td>{object.zip }</td>
                                            <td>{object.country }</td>
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

AddressGridBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string
}

export default AddressGridBase
