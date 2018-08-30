'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = [];

var actions = {
    create: function create(item) {
        item.id = (0, _uuid2.default)();
        list = list.concat(item);
        return list;
    },

    findAll: function findAll() {
        return list;
    },

    update: function update(item) {
        var tt = list.map(function (object) {
            if (item.id === object.id) {
                object = Object.assign({}, item);
            }
            return object;
        });
        list = tt;
        return list;
    },

    remove: function remove(item) {
        var tt = list.filter(function (object) {
            return object.id !== item.id;
        });
        list = tt;
        return list;
    }
};

exports.default = actions;
//# sourceMappingURL={{clazz.name}}Services.js.map