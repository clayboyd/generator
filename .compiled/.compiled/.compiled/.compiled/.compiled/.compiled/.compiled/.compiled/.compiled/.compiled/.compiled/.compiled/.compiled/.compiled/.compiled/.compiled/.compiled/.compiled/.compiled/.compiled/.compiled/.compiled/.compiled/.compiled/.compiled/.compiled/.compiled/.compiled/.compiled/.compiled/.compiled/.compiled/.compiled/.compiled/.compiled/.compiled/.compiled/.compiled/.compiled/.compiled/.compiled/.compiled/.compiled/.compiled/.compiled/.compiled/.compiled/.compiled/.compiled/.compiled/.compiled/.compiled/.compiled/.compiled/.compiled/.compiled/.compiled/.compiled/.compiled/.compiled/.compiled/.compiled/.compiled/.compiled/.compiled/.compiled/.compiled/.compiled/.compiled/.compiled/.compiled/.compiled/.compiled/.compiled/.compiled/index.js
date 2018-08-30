'use strict';

var _generator = require('./src/generator');

var _generator2 = _interopRequireDefault(_generator);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _defaultModel = require('./src/defaultModel');

var _defaultModel2 = _interopRequireDefault(_defaultModel);

var _utils = require('./src/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

console.log("Starting");

var context = {
    src: 'source',
    title: 'howdy',
    _capitalize: _utils2.default.capitalize
    // gen('./testing/templates','./testing/destination', context)
    // .then( () => console.log('it is over'))
    // .then( () => gen('./testing/templates','./testing/destination2', context))
    // .then( () => console.log('it is over'))
    // .then( () => gen('./testing/templates','./testing/destination3', context))
    // .then( () => console.log('it is over'))
    // .catch(err => console.log(err))

};console.log('Ending');

console.log(JSON.stringify(_model2.default, null, 2));
var m = _defaultModel2.default.genModel(_model2.default);
console.log(JSON.stringify(m, null, 2));

context.model = m;

var promises = m.classes.map(function (clz) {
    var ctx = Object.assign({}, context);
    ctx.clazz = clz;
    console.log(JSON.stringify(ctx, null, 2));
    return (0, _generator2.default)('./testing/templates/each', '../uut', ctx);
});

(0, _generator2.default)('./testing/templates/once', '../uut', context).then(function () {
    return Promise.all(promises);
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map