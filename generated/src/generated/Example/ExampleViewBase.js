import React from 'react'
import PropTypes from 'prop-types'

function ExampleViewBase(props) {
    const obj = props.example
    
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
        <div>Example</div>
            <form onSubmit={submit}>
                <div className="formElement">
                <label htmlFor="password_id">Password</label>
                <input type="text" 
                    id="password_id"
                    value={ obj.password } 
                    onChange={change('password')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="checkbox_id">Checkbox</label>
                <input type="text" 
                    id="checkbox_id"
                    value={ obj.checkbox } 
                    onChange={change('checkbox')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="radio_id">Radio</label>
                <input type="text" 
                    id="radio_id"
                    value={ obj.radio } 
                    onChange={change('radio')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="select_id">Select</label>
                <input type="text" 
                    id="select_id"
                    value={ obj.select } 
                    onChange={change('select')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="date_id">Date</label>
                <input type="text" 
                    id="date_id"
                    value={ obj.date } 
                    onChange={change('date')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="html_id">Html</label>
                <input type="text" 
                    id="html_id"
                    value={ obj.html } 
                    onChange={change('html')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="textarea_id">Textarea</label>
                <input type="text" 
                    id="textarea_id"
                    value={ obj.textarea } 
                    onChange={change('textarea')}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

ExampleViewBase.prototype.PropTypes = {
    example: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default ExampleViewBase
