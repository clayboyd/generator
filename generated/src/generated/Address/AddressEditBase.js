import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button } from 'react-bootstrap'

import HorizontalGroup from '../utils/HorizontalGroup'
// CUSTOM_IMPORT_START
// CUSTOM_IMPORT_END

function AddressEditBase(props) {
    const obj = props.current || {}
    let refs = {}
    
    function _submit(e) {
        e.preventDefault()
            obj.street1 = refs.street1.value
            obj.street2 = refs.street2.value
            obj.city = refs.city.value
            obj.state = refs.state.value
            obj.zip = refs.zip.value
            obj.country = refs.country.value
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
        <h2>Edit Address</h2>
            <Form horizontal onSubmit={submit}>
                    <HorizontalGroup
                        name="street1"
                        id="street1_id"
                        type="text"
                        label="Street 1"
                        inputRef={ref('street1')}
                        defaultValue={obj.street1 }
                        ui={ {"type":"text","label":"Street 1"} }
                        />
                    <HorizontalGroup
                        name="street2"
                        id="street2_id"
                        type="text"
                        label="Street 2"
                        inputRef={ref('street2')}
                        defaultValue={obj.street2 }
                        ui={ {"type":"text","label":"Street 2"} }
                        />
                    <HorizontalGroup
                        name="city"
                        id="city_id"
                        type="text"
                        label="City"
                        inputRef={ref('city')}
                        defaultValue={obj.city }
                        ui={ {"type":"text","label":"City"} }
                        />
                    <HorizontalGroup
                        name="state"
                        id="state_id"
                        type="text"
                        label="State"
                        inputRef={ref('state')}
                        defaultValue={obj.state }
                        ui={ {"type":"text","label":"State"} }
                        />
                    <HorizontalGroup
                        name="zip"
                        id="zip_id"
                        type="text"
                        label="Zip"
                        inputRef={ref('zip')}
                        defaultValue={obj.zip }
                        ui={ {"type":"text","label":"Zip"} }
                        />
                    <HorizontalGroup
                        name="country"
                        id="country_id"
                        type="text"
                        label="Country"
                        inputRef={ref('country')}
                        defaultValue={obj.country }
                        ui={ {"type":"text","label":"Country"} }
                        />

                <Button bsStyle="primary" type="submit">{obj.id ? 'Save' : 'Create'}</Button>

            </Form>
        </div>
    )

    // CUSTOM_RESULTS_START
    return (results)
    // CUSTOM_RESULTS_END
}

AddressEditBase.prototype.PropTypes = {
    // CUSTOM_PROPTYPES_START
    // CUSTOM_PROPTYPES_END
    submit: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    current: PropTypes.object.isRequired,
    error: PropTypes.string
}

export default AddressEditBase
