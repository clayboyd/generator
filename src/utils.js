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
                if (err) {
                    console.log(`File, ${fname} does not exist`)
                }
                return err ? reject(err) : resolve( data )
            })
        })
}

function globP( path, options ) {
    options = options || {}
    options.nodir = true;
    return new Promise((resolve, reject) => {
        glob(path, options, (err, files) => {
            return err ? reject(err) : resolve(files)
        })
    })
}

/**
 * Merge the generated file with the previous one (if it changed)
 * Sections are named:
 *      CUSTOM_key_START .... CUSTOM_key_END
 * @param {string} name 
 * @param {string} content 
 */
function updateFileP( name, content ) {
    let sections = []

    return readFileP( name )
        .catch( err => writeFileP( name, content ))
        .then( dest => {
            
            // File does not exist
            if (!dest) {
                return writeFileP(name, content)
            }

            dest = dest.toString()

            // first, find all the sections that exist in the dest file.
            dest.replace(/CUSTOM_(.*?)_START/g, function(match, $1, $2, offset, original) {
                sections.push($1)
            });
            
            // next, copy all the section data from the dest file back into the generated file
            let data = {}
            let newDest = content
            sections.forEach( key => {
                let stg = `(CUSTOM_${key}_START)([\\s\\S]*)(CUSTOM_${key}_END)`
                // console.log( stg )
                let regexp = new RegExp(stg, 'm')
                dest.replace(regexp, function( match, $1, $2, $3, offset, original) {
                    data[key] = $2
                })
                newDest = newDest.replace(regexp, function(match, $1, $2, $3) {
                    return $1 + data[key] + $3
                })
            })

            // write the new contents if it has changed

            if (newDest !== dest ) {
                return (writeFileP( name, newDest ))
            }
            return 'File not changed.';
        })
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