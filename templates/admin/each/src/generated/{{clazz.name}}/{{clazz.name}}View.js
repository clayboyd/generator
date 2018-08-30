import React from 'react'
import PropTypes from 'prop-types'

import {{clazz.name}}ViewBase from './{{clazz.name}}ViewBase'

function {{clazz.name}}View(props) {
    return (
        <div>
        <{{clazz.name}}ViewBase 
            submit={props.submit} 
            {{lowerFirst clazz.name}}={props.{{lowerFirst clazz.name}} }
        />
        </div>
    )
}

{{clazz.name}}View.prototype.PropTypes = {
    {{lowerFirst clazz.name}}: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default {{clazz.name}}View
