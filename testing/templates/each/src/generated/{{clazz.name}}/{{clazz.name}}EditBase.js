import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button } from 'react-bootstrap'

import HorizontalGroup from '../utils/HorizontalGroup'

function {{clazz.name}}EditBase(props) {
    const obj = props.current || {}
    let refs = {}
    
    function submit(e) {
        e.preventDefault()
        {{#each clazz.properties}}
            {{#if (equal ui.type "checkbox")}}
            obj.{{name}} = refs.{{name}}.checked
            {{else}}
            obj.{{name}} = refs.{{name}}.value
            {{/if}}
        {{/each}}
        props.submit(obj)
    }

    function ref(name) {
        return function(input) {
            refs[name] = input
        }
    }

    return (
        <div>
        <h2>Edit {{startCase clazz.name}}</h2>
            <Form horizontal onSubmit={submit}>
                {{#each clazz.properties}}
                {{#if ui.hidden}}
                    <input type="hidden" name={name} defaultValue={obj.{{name}} } ref={ref('{{name}}')} />
                {{else}}
                    <HorizontalGroup
                        name="{{name}}"
                        id="{{name}}_id"
                        type="{{ui.type}}"
                        label="{{ui.label}}"
                        inputRef={ref('{{name}}')}
                        defaultValue={obj.{{name}} }
                        ui={ {{{stringify ui}}} }
                        />
                {{/if}}
                {{/each}}

                <Button bsStyle="primary" type="submit">{obj.id ? 'Save' : 'Create'}</Button>

            </Form>
        </div>
    )
}

{{clazz.name}}EditBase.prototype.PropTypes = {
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
//    list: PropTypes.array.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

export default {{clazz.name}}EditBase
