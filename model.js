
let model = {
    name: 'First Model',
    classes: [
        {
            name: 'User',
            properties: [ 'firstName','lastName',
                {
                    username: {
                        type: 'string',
                        required: true
                    },
                    password: {
                        type: 'password',
                        required: true
                    }
                    // ,
                    // address: {
                    //     ref: Address,
                    //     multiplicity: 'one2one'
                    // }
                }
            ]
        },
        {
            name: 'Address',
            properties: [ "street1",'street2','city','state','zip','country' ]
        }

    ]
}

export default model
