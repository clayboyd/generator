import React from 'react'
import PropTypes from 'prop-types'

import ExampleViewBase from './ExampleViewBase'

function ExampleView(props) {
    return (
        <div>
        <ExampleViewBase 
            submit={props.submit} 
            example={props.example }
        />
        </div>
    )
}

ExampleView.prototype.PropTypes = {
    example: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default ExampleView
