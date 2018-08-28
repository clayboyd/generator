import React from 'react'
import PropTypes from 'prop-types'
import {Table } from 'react-bootstrap'

function {{clazz.name}}GridBase(props) {

    function submit(obj) {
        return function(e) {
            e.preventDefault()
            props.submit(obj)    
        }
    }

    return (
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
}

{{clazz.name}}GridBase.prototype.PropTypes = {
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    error: PropTypes.string
}

export default {{clazz.name}}GridBase
