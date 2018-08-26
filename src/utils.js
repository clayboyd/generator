// Contains utility functions...
import glob from 'glob'
import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'

function mkdirP( fname ) {
    return new Promise( (resolve, reject ) => {
        mkdirp( path.dirname( fname ), (err) => {
            return err ? reject(err) : resolve();
        })
    })
}

function writeFileP( fname, contents ) {
    return mkdirP( fname ).then( () => {
        return new Promise( (resolve, reject ) => {
            fs.writeFile( fname, contents, (err) => {
                return err ? reject(err) : resolve( fname )
            })
        })
    })
}

function readFileP( fname ) {
        return new Promise( (resolve, reject ) => {
            fs.readFile( fname, (err,data) => {
                return err ? reject(err) : resolve( data )
            })
        })
}

function globP( path ) {
    return new Promise((resolve, reject) => {
        glob(path, (err, files) => {
            return err ? reject(err) : resolve(files)
        })
    })
}

function updateFileP( name, content ) {
    return writeFileP( name, content )
}

function createFileP( name, content ) {
    return writeFileP( name, content )
}

function addFileP( name, content, options ) {
    options = options || 'write';
    switch( options ) {
        case 'write': return writeFileP( name, content );
        case 'update': return updateFileP( name, content );
        case 'create': return createFileP( name, contents );
        default:
            return Promise.reject(`Unknown file type, ${options}, in utils.addFileP`)
    }
}

export default {
    mkdirP,
    writeFileP,
    readFileP,
    addFileP,
    globP
}