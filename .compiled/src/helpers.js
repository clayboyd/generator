'use strict';

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars2.default.registerHelper('capitalize', function (stg) {
  return _lodash2.default.upperFirst(stg);
});

_handlebars2.default.registerHelper('lowerFirst', function (stg) {
  return _lodash2.default.lowerFirst(stg);
});

_handlebars2.default.registerHelper('upperCase', function (stg) {
  return _lodash2.default.toUpper(stg);
});

_handlebars2.default.registerHelper('startCase', function (stg) {
  return _lodash2.default.startCase(_lodash2.default.upperFirst(stg));
});

_handlebars2.default.registerHelper('pluralize', function (stg) {
  return _pluralize2.default.plural(stg);
});

_handlebars2.default.registerHelper('singularize', function (stg) {
  return _pluralize2.default.singular(stg);
});

_handlebars2.default.registerHelper('lowerPlural', function (stg) {
  return _pluralize2.default.plural(_lodash2.default.lowerFirst(stg));
});

_handlebars2.default.registerHelper('lowerSingular', function (stg) {
  return _pluralize2.default.singular(_lodash2.default.lowerFirst(stg));
});

_handlebars2.default.registerHelper('stringify', function (p) {
  return JSON.stringify(p, 2);
});

_handlebars2.default.registerHelper('equal', function (first, second) {
  return first === second;
});

_handlebars2.default.registerHelper('notEqual', function (first, second) {
  return first !== second;
});
//# sourceMappingURL=helpers.js.map