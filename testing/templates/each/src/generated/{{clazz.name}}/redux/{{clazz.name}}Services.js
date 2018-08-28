import uuid from 'uuid';

let list = [];

const actions = {
    create: function (item) {
        item.id = uuid();
        list = list.concat(item);
        return list;
    },

    findAll: function ( ) {
        return list;
    },

    update: function (item) {
        let tt = list.map(function (object) {
            if (item.id === object.id) {
                object = Object.assign({}, item);
            }
            return object;
        });
        list = tt;
        return list;
    },

    remove: function (item ) {
        let tt = list.filter(function (object) {
            return (object.id !== item.id);
        });
        list = tt;
        return list;
    }
};

export default actions
