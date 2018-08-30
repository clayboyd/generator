import Handlebars from 'handlebars'
import _ from 'lodash'
import pluralize from 'pluralize'

Handlebars.registerHelper('capitalize', (stg) => _.upperFirst(stg))

Handlebars.registerHelper('lowerFirst', (stg) => _.lowerFirst(stg))

Handlebars.registerHelper('upperCase', (stg) => _.toUpper(stg))

Handlebars.registerHelper('startCase', (stg) => _.startCase(_.upperFirst(stg)))

Handlebars.registerHelper('pluralize', (stg) => pluralize.plural(stg))

Handlebars.registerHelper('singularize', (stg) => pluralize.singular(stg))

Handlebars.registerHelper('lowerPlural', (stg) => pluralize.plural(_.lowerFirst(stg)))

Handlebars.registerHelper('lowerSingular', (stg) => pluralize.singular(_.lowerFirst(stg)))

Handlebars.registerHelper('stringify', (p) => JSON.stringify(p,2))

Handlebars.registerHelper('stringifyMultiline', (p) => JSON.stringify(p,null, 2))

Handlebars.registerHelper('equal', (first, second) => first === second)

Handlebars.registerHelper('notEqual', (first, second) => first !== second)

