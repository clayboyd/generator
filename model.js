
let model = {
    name: 'First Model',
    classes: [
        {
            name: 'User',
            properties: [
                {
                    email: {
                        type: 'string',
                        required: true
                    },
                    password: {
                        type: 'password',
                        required: true,
                        ui: {
                            private: true
                        }
                    }
                    // ,
                    // address: {
                    //     ref: Address,
                    //     multiplicity: 'one2one'
                    // }
                },
                'firstName',
                'lastName',
                {
                    comment: {
                        type: 'string',
                        ui: {
                            type: 'textarea'
                        }
                    }
                }
            ]
        },
        {
            name: 'Address',
            properties: [ "street1",'street2','city','state','zip','country' ]
        },
        {
            name: 'Example',
            properties: [
                {
                    password: {
                        private: true,
                        type: 'password'
                    },
                    checkbox: {
                        type: 'boolean',
                        ui: {
                            type: 'checkbox'
                        }
                    },
                    radio: {
                        ui: {
                            type: 'radio',
                            options: {
                                values: ['first','second','third'],
                                labels: ['First Radio','Second','Third one']    
                            }
                        }
                    },
                    select: {
                        ui: {
                            type: 'select',
                            options: {
                                values: ['first','second','third'],
                                labels: ['First Select','Second','Third one']    
                            }
                        }
                    },
                    date: {
                        type: 'date',
                    },
                    html: {
                        ui: {
                            type: 'html'
                        }
                    },
                    textarea: {
                        type: 'string',
                        ui: {
                            type: 'textarea'
                        }
                    }
                }
            ]
        }

    ]
}

module.exports = model

export default model
