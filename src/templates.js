import Handlebars from 'handlebars'
import fs from 'fs'
import _ from 'underscore'
import helpers from './helpers'

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
            console.log(`cache hit with ${fname}`)
            return resolve( templates[fname] )
        }
        fs.readFile( fname, (err, data) => {
            console.log(`called readfile with ${fname}`)
            if (err) return reject(err)
            templates[fname] = Handlebars.compile( data.toString() );
            return resolve(templates[fname])
        })
    })
}

export default {
    getTemplate,
    transform
}

module.exports = {
    getTemplate,
    transform
}