import Handlebars from 'handlebars'
import _ from 'lodash'

Handlebars.registerHelper('capitalize', (stg) => _.upperFirst(stg))

Handlebars.registerHelper('lowerFirst', (stg) => _.lowerFirst(stg))

Handlebars.registerHelper('upperCase', (stg) => _.toUpper(stg))

Handlebars.registerHelper('startCase', (stg) => _.startCase(_.upperFirst(stg)))

