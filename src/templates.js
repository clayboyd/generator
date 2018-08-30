import Handlebars from 'handlebars'
import fs from 'fs'
import _ from 'lodash'
import helpers from './helpers'
import utils from './utils'

// This caches the compiled templates, saves them by filename

var templates = {}

function transform( template, context ) {
    if (_.isString(template)) {
        template = Handlebars.compile(template)
    }
    return template(context)
}

function getTemplate( fname ) {
    return new Promise( (resolve, reject) => {
        if (fname in templates) {
            // console.log(`cache hit with ${fname}`)
            resolve( templates[fname] )
        }
        else {
            // console.log(`called readfile with ${fname}`)
            utils.readFileP( fname )
                .then( data => {
                    const template = Handlebars.compile( data.toString() );
                    if (!templates[fname]) {
                        templates[fname] = template
                    }
                    resolve( template )
                })
        }
    })
}

function all() {
    return templates
}

export default {
    getTemplate,
    transform,
    all
}

module.exports = {
    getTemplate,
    transform,
    all
}