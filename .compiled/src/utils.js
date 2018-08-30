'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Contains utility functions...
function mkdirP(fname) {
    return new Promise(function (resolve, reject) {
        (0, _mkdirp2.default)(_path2.default.dirname(fname), function (err) {
            return err ? reject(err) : resolve();
        });
    });
}

function writeFileP(fname, contents) {
    return mkdirP(fname).then(function () {
        return new Promise(function (resolve, reject) {
            _fs2.default.writeFile(fname, contents, function (err) {
                return err ? reject(err) : resolve(fname);
            });
        });
    });
}

function readFileP(fname) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readFile(fname, function (err, data) {
            err ? reject(err) : resolve(data);
        });
    });
}

function globP(path, options) {
    options = options || {};
    options.nodir = true;
    return new Promise(function (resolve, reject) {
        (0, _glob2.default)(path, options, function (err, files) {
            return err ? reject(err) : resolve(files);
        });
    });
}

function updateFileP(name, content) {
    return writeFileP(name, content);
}

function createFileP(name, content) {
    return writeFileP(name, content);
}

function addFileP(name, content, options) {
    options = options || 'write';
    switch (options) {
        case 'write':
            return writeFileP(name, content);
        case 'update':
            return updateFileP(name, content);
        case 'create':
            return createFileP(name, contents);
        default:
            return Promise.reject('Unknown file type, ' + options + ', in utils.addFileP');
    }
}

exports.default = {
    mkdirP: mkdirP,
    writeFileP: writeFileP,
    readFileP: readFileP,
    addFileP: addFileP,
    globP: globP
};
//# sourceMappingURL=utils.js.map