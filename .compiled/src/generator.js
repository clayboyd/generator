'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generate;

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateOne(destname, template, context) {
    return new Promise(function (resolve, reject) {
        console.log('destname = ' + destname);
        template = _templates2.default.transform(template, context);
        resolve(_utils2.default.writeFileP(destname, template, 'write'));
    });
}

function generate(src, dest, context) {
    console.log('src = ' + src + ', dest = ' + dest);
    return _utils2.default.globP(src + '/**/*.*').then(function (files) {

        var createTemplates = files.map(function (item) {
            return _templates2.default.getTemplate(item);
        });
        // let promises = files.map( (item) => {
        //     let ctx = Object.assign({}, context)
        //     let destname = item.replace(src, dest);
        //     destname = templates.transform( destname, ctx );
        //     ctx.FILE_NAME = destname
        //     ctx.TEMPLATE_NAME = item
        //     return templates.getTemplate( item ).then( (template) => {
        //         return generateOne( destname, template, ctx )
        //     })
        // })
        return Promise.all(createTemplates).then(function () {
            return console.log(Object.keys(_templates2.default.all()));
        });
        // .then(Promise.all(createTemplates))
        // .then(() => console.log(Object.keys(templates.all())))
    });
}
//# sourceMappingURL=generator.js.map