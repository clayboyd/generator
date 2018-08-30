import React from 'react'
import PropTypes from 'prop-types'
import {Table } from 'react-bootstrap'

// CUSTOM_IMPORT_START 
// CUSTOM_IMPORT_END 

function {{clazz.name}}GridBase(props) {
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
        <h2>{{pluralize clazz.name}}</h2>
        <Table striped bordered condensed hover>
        <thead>
        <tr>
        {{#each clazz.properties}}
            {{#if ui.private}}
            {{else}}
            {{#if ui.hidden}}
            {{else}}
                <th>{{ui.label}}</th>
            {{/if}}
            {{/if}}
        {{/each}}
        </tr>
        </thead>
        <tbody>
        {props.list.map( (object, idx) => {
            return (
                <tr key={idx} onClick={submit(object)}>
                {{#each clazz.properties}}
                    {{#if ui.private}}
                    {{else if ui.hidden}}
                    {{else if (equal ui.type "checkbox")}}
                        <td>
                           <input type="checkbox" readOnly defaultChecked={object.{{name}} } />
                        </td>
                    {{else}}
                        <td>{object.{{name}} }</td>
                    {{/if}}
                {{/each}}        
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

{{clazz.name}}GridBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START 
    // CUSTOM_PROPTYPES_END 
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string
}

export default {{clazz.name}}GridBase
