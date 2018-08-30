
/**
 * These are the startup parameters for the generator
 */

const params = {
    "basic": {
        "src": "./templates/basic",
        "dest": "../uut",
        "model": "./model.js",
        "writeMode": "update"
    },
    
    "api": {
        "src": "./templates/admin",
        "dest": "./generated",
        "model": "./model.js",
        "writeMode": "write"
    },
    "uut": {
        "src": "./templates/admin",
        "dest": "../uut",
        "model": "./model.js",
        "writeMode": "update"
    }
}

export default params
