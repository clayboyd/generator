'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// This caches the compiled templates, saves them by filename

var templates = {};

function transform(template, context) {
    if (_lodash2.default.isString(template)) {
        template = _handlebars2.default.compile(template);
    }
    return template(context);
}

function getTemplate(fname) {
    return new Promise(function (resolve, reject) {
        if (fname in templates) {
            console.log('cache hit with ' + fname);
            resolve(templates[fname]);
        } else {
            console.log('called readfile with ' + fname);
            _utils2.default.readFileP(fname).then(function (data) {
                var template = _handlebars2.default.compile(data.toString());
                if (!templates[fname]) {
                    templates[fname] = template;
                }
                resolve(template);
            });
        }
    });
}

function all() {
    return templates;
}

exports.default = {
    getTemplate: getTemplate,
    transform: transform,
    all: all
};

module.exports = {
    getTemplate: getTemplate,
    transform: transform,
    all: all
};
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map
//# sourceMappingURL=templates.js.map