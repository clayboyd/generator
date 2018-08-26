import React, {Component} from 'react'

function {{clazz.name}}(props) {
    const obj = props.{{lowerFirst clazz.name}}
    return (
        <div>
        <div>{{startCase clazz.name}}</div>
            <form onSubmit={props.submit(obj)}>
                {{#each clazz.properties}}
                <div className="formElement">
                <label htmlFor="{{name}}_id">{{startCase name}}</label>
                <input type="text" 
                    id="{{name}}_id"
                    value={ obj.{{name}} } />
                </div>
                {{/each}}

            </form>
        </div>
    )
}

{{clazz.name}}.prototype.PropTypes = {
    {{lowerFirst clazz.name}}: PropTypes.obj.isRequired,
    submit: PropTypes.func.isRequired
}

export default {{clazz.name}}
