
let model = {
    name: 'First Model',
    classes: [
        {
            name: 'User',
            properties: [
                {
                    id: {
                        ui: {
                            hidden: true
                        }
                    }
                },
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
            properties: [ "id", "street1",'street2','city','state','zip','country' ]
        },
        {
            name: 'Example',
            properties: [
                {
                    id: {
                        hidden: true
                    },
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
                            values: ['first','second','third'],
                            labels: ['First Radio','Second','Third one']
                        }
                    },
                    select: {
                        ui: {
                            type: 'select',
                            values: ['first','second','third'],
                            labels: ['First Select','Second','Third one']
                        }
                    },
                    date: {
                        type: 'date',
                        ui: {
                            type: 'date'
                        }
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

export default model
