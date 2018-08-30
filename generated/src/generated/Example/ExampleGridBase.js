import React from 'react'
import PropTypes from 'prop-types'
import {Table } from 'react-bootstrap'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function ExampleGridBase(props) {
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
        <h2>Examples</h2>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
                <th>Checkbox</th>
                <th>Radio</th>
                <th>Select</th>
                <th>Date</th>
                <th>Html</th>
                <th>Textarea</th>
        </tr>
        </thead>
        <tbody>
        {props.list.map( (object, idx) => {
            return (
                <tr key={idx} onClick={submit(object)}>
                        <td>
                           <input type="checkbox" readOnly defaultChecked={object.checkbox } />
                        </td>
                        <td>{object.radio }</td>
                                            <td>{object.select }</td>
                                            <td>{object.date }</td>
                                            <td>{object.html }</td>
                                            <td>{object.textarea }</td>
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

ExampleGridBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string
}

export default ExampleGridBase
