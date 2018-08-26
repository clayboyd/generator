import React, {Component} from 'react'

function Address(props) {
    const obj = props.address
    return (
        <div>
        <div>Address</div>
            <form onSubmit={props.submit(obj)}>
                <div className="formElement">
                <label htmlFor="street1_id">Street 1</label>
                <input type="text" 
                    id="street1_id"
                    value={ obj.street1 } />
                </div>
                <div className="formElement">
                <label htmlFor="street2_id">Street 2</label>
                <input type="text" 
                    id="street2_id"
                    value={ obj.street2 } />
                </div>
                <div className="formElement">
                <label htmlFor="city_id">City</label>
                <input type="text" 
                    id="city_id"
                    value={ obj.city } />
                </div>
                <div className="formElement">
                <label htmlFor="state_id">State</label>
                <input type="text" 
                    id="state_id"
                    value={ obj.state } />
                </div>
                <div className="formElement">
                <label htmlFor="zip_id">Zip</label>
                <input type="text" 
                    id="zip_id"
                    value={ obj.zip } />
                </div>
                <div className="formElement">
                <label htmlFor="country_id">Country</label>
                <input type="text" 
                    id="country_id"
                    value={ obj.country } />
                </div>

            </form>
        </div>
    )
}

Address.prototype.PropTypes = {
    address: PropTypes.obj.isRequired,
    submit: PropTypes.func.isRequired
}

export default Address