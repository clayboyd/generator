import React from 'react'
import PropTypes from 'prop-types'

import AddressViewBase from './AddressViewBase'

function AddressView(props) {
    return (
        <div>
        <AddressViewBase 
            submit={props.submit} 
            address={props.address }
        />
        </div>
    )
}

AddressView.prototype.PropTypes = {
    address: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
}

export default AddressView
