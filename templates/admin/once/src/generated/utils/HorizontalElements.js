import React from 'react'
import {Radio, Checkbox, FormControl } from 'react-bootstrap'

const elements = {
    textarea: TextareaElement,
    html: TextareaElement,
    select: SelectElement,
    radio: RadioElement,
    checkbox: CheckboxElement
}

function DefaultElement(props) {
    return (
        <FormControl
            {...props}
        />
    )
}

function TextareaElement(props) {
    return (
        <FormControl componentClass="textarea" {...props} />
    )
}

function CheckboxElement(props) {
    return (
            <div className="text-left">
            <Checkbox 
                {...props}
                defaultChecked={props.defaultValue}
                />
            </div>
    )
}

function SelectElement(props) {
    return (
        <FormControl componentClass="select" {...props}>
            {
                props.ui.options.values.map( (value, idx) => {
                    return (
                        <option value={value} key={idx}>
                            {props.ui.options.labels[idx]}
                        </option>
                    )
                })
            }
      </FormControl>
    )
}

function RadioElement({defaultValue, ...props}) {
    function onClick(e) {
        props.inputRef(e.target)
    }
    return (
        <div className="text-left">
            {
                props.ui.options.values.map( (value, idx) => {
                    return (
                        <Radio
                            {...props}
                            id={props.id + idx}
                            key={idx}
                            value={value}
                            onClick={onClick}
                            defaultChecked={defaultValue === value}
                            inline>
                        {props.ui.options.labels[idx]}
                        </Radio>
                    )
                })
            }
        </div>
    )
}

function getElement( name, props ) {
    const Element = elements[name] || DefaultElement
    return (
        <Element type={props.ui.type} {...props} />
    )
}

export default getElement
