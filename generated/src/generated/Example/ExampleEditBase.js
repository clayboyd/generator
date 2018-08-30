import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button } from 'react-bootstrap'

import HorizontalGroup from '../utils/HorizontalGroup'
// CUSTOM_IMPORT_START
// CUSTOM_IMPORT_END

function ExampleEditBase(props) {
    const obj = props.current || {}
    let refs = {}
    
    function _submit(e) {
        e.preventDefault()
            obj.password = refs.password.value
            obj.checkbox = refs.checkbox.checked
            obj.radio = refs.radio.value
            obj.select = refs.select.value
            obj.date = refs.date.value
            obj.html = refs.html.value
            obj.textarea = refs.textarea.value
        props.submit(obj)
    }
    // CUSTOM_SUBMIT_START
    function submit(e) {
        _submit(e)
    }
    // CUSTOM_SUBMIT_END

    function ref(name) {
        return function(input) {
            refs[name] = input
        }
    }

    const results = (
        <div>
        <h2>Edit Example</h2>
            <Form horizontal onSubmit={submit}>
                    <HorizontalGroup
                        name="password"
                        id="password_id"
                        type="password"
                        label="Password"
                        inputRef={ref('password')}
                        defaultValue={obj.password }
                        ui={ {"type":"password","label":"Password","private":true} }
                        />
                    <HorizontalGroup
                        name="checkbox"
                        id="checkbox_id"
                        type="checkbox"
                        label="Checkbox"
                        inputRef={ref('checkbox')}
                        defaultValue={obj.checkbox }
                        ui={ {"type":"checkbox","label":"Checkbox"} }
                        />
                    <HorizontalGroup
                        name="radio"
                        id="radio_id"
                        type="radio"
                        label="Radio"
                        inputRef={ref('radio')}
                        defaultValue={obj.radio }
                        ui={ {"type":"radio","options":{"values":["first","second","third"],"labels":["First Radio","Second","Third one"]},"label":"Radio"} }
                        />
                    <HorizontalGroup
                        name="select"
                        id="select_id"
                        type="select"
                        label="Select"
                        inputRef={ref('select')}
                        defaultValue={obj.select }
                        ui={ {"type":"select","options":{"values":["first","second","third"],"labels":["First Select","Second","Third one"]},"label":"Select"} }
                        />
                    <HorizontalGroup
                        name="date"
                        id="date_id"
                        type="date"
                        label="Date"
                        inputRef={ref('date')}
                        defaultValue={obj.date }
                        ui={ {"type":"date","label":"Date"} }
                        />
                    <HorizontalGroup
                        name="html"
                        id="html_id"
                        type="html"
                        label="Html"
                        inputRef={ref('html')}
                        defaultValue={obj.html }
                        ui={ {"type":"html","label":"Html"} }
                        />
                    <HorizontalGroup
                        name="textarea"
                        id="textarea_id"
                        type="textarea"
                        label="Textarea"
                        inputRef={ref('textarea')}
                        defaultValue={obj.textarea }
                        ui={ {"type":"textarea","label":"Textarea"} }
                        />

                <Button bsStyle="primary" type="submit">{obj.id ? 'Save' : 'Create'}</Button>

            </Form>
        </div>
    )

    // CUSTOM_RESULTS_START
    return (results)
    // CUSTOM_RESULTS_END
}

ExampleEditBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START
    // CUSTOM_PROPTYPES_END
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

export default ExampleEditBase
