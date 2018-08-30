import React from 'react'
import PropTypes from 'prop-types'

function AddressViewBase(props) {
    const obj = props.address
    
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
        <div>Address</div>
            <form onSubmit={submit}>
                <div className="formElement">
                <label htmlFor="street1_id">Street 1</label>
                <input type="text" 
                    id="street1_id"
                    value={ obj.street1 } 
                    onChange={change('street1')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="street2_id">Street 2</label>
                <input type="text" 
                    id="street2_id"
                    value={ obj.street2 } 
                    onChange={change('street2')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="city_id">City</label>
                <input type="text" 
                    id="city_id"
                    value={ obj.city } 
                    onChange={change('city')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="state_id">State</label>
                <input type="text" 
                    id="state_id"
                    value={ obj.state } 
                    onChange={change('state')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="zip_id">Zip</label>
                <input type="text" 
                    id="zip_id"
                    value={ obj.zip } 
                    onChange={change('zip')}
                    />
                </div>
                <div className="formElement">
                <label htmlFor="country_id">Country</label>
                <input type="text" 
                    id="country_id"
                    value={ obj.country } 
                    onChange={change('country')}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

AddressViewBase.prototype.PropTypes = {
    address: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default AddressViewBase
