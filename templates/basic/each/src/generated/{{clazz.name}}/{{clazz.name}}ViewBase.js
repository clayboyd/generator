import React from 'react'
import PropTypes from 'prop-types'

function {{clazz.name}}ViewBase(props) {
    const obj = props.{{lowerFirst clazz.name}}
    
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
        <div>{{startCase clazz.name}}</div>
            <form onSubmit={submit}>
                {{#each clazz.properties}}
                <div className="formElement">
                <label htmlFor="{{name}}_id">{{startCase name}}</label>
                <input type="text" 
                    id="{{name}}_id"
                    value={ obj.{{name}} } 
                    onChange={change('{{name}}')}
                    />
                </div>
                {{/each}}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

{{clazz.name}}ViewBase.prototype.PropTypes = {
    {{lowerFirst clazz.name}}: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default {{clazz.name}}ViewBase
