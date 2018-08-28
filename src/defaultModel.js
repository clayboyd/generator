import _ from 'lodash'
/**
 * Default model looks like:
 let model = {
     name: 'string name',
     classes: [
         {
             name: 'Capitalized name',
             properties: [
                 {
                     name: 'un-capitalized name',
                     type: 'all lower case type',
                     required: boolean,
                     ui: {
                         type: "hidden|text|checkbox|radio|select"
                         value: "string of result"
                         label: "String of resuls"
                         values: [ 'stg1','stg2'],
                         labels: ['stg1','stg2']
                     }
                 }
             ]
         }
     ]
 }
 
 *
 * This tool will generate the model like this from the input.
 * 
 * NOTE: for a property, the default type is 'string', the default 
 * required is empty.
 * 
 * The input may define an array of properties as either strings or objects.
 * 
*/

const uiTypes = {
    string: 'text',
    html: 'textarea',
    textarea: 'textarea',
    boolean: 'checkbox',
    date: 'date',
    password: 'password'
}

function updateUi( prop ) {
    prop.ui = prop.ui || {}
    prop.ui.type = prop.ui.type || uiTypes[prop.type]
    prop.ui.label = prop.ui.label || _.startCase(prop.name)
    prop.ui.hidden = prop.hidden || prop.ui.hidden
    prop.ui.private = prop.private || prop.ui.private
    return prop;
}
/**
 * Create a default property model from a string
 * @param {String} name 
 */
function defaultPropFromName( name ) {
    let prop = {name: name, type: 'string'}
    return updateUi( prop )
}

function defaultPropFromObject( name, obj ) {
    let dest = Object.assign({}, obj);
    dest.type = _.toLower(dest.type || 'string')
    dest.name = _.lowerFirst(name)
    return updateUi(dest)
}

function updateProperties( props ) {
    let dest = []
    props.forEach(element => {
        if (_.isString(element)) {
            dest.push(defaultPropFromName(element))
        }
        else if (_.isObject(element)) {
            for(var prop in element) {
                dest.push(defaultPropFromObject(prop, element[prop]))
            }
        }
    });
    return dest;
}

function updateClass( clz ) {
    let dest = Object.assign({}, clz);
    dest.name = _.capitalize(dest.name)
    dest.properties = updateProperties( dest.properties)
    return dest
}

// input is the model js object
// output is model with fully defined properties

function genModel( model ) {
    let dest = Object.assign({}, model);
    for (var clz in dest.classes) {
        dest.classes[clz] = updateClass( dest.classes[clz])
    }
    return dest;
}

export default {
    genModel
}