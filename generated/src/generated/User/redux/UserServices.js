import uuid from 'uuid';

let list = [];

const actions = {
    // CUSTOM_CREATE_START 
        create: function(item) { return this._create(item) }, 
    // CUSTOM_CREATE_END 
    
    _create: function (item) {
        item.id = uuid();
        list = list.concat(item);
        return list;
    },

    // CUSTOM_FINDALL_START 
        findAll: function() { return this._findAll() }, 
    // CUSTOM_FINDALL_END 
    
    _findAll: function ( ) {
        return list;
    },

    // CUSTOM_UPDATE_START 
        update: function(item) { return this._update(item) }, 
    // CUSTOM_UPDATE_END 
    
    _update: function (item) {
        let tt = list.map(function (object) {
            if (item.id === object.id) {
                object = Object.assign({}, item);
            }
            return object;
        });
        list = tt;
        return list;
    },

    // CUSTOM_REMOVE_START 
        remove: function(item) { return this._remove(item) }, 
    // CUSTOM_REMOVE_END 
    
    _remove: function (item ) {
        let tt = list.filter(function (object) {
            return (object.id !== item.id);
        });
        list = tt;
        return list;
    }
};

export default actions
