
import templates from './templates'
import utils from './utils'

function generateOne( destname, template, context) {
    return new Promise((resolve, reject ) => {
        console.log(`destname = ${destname}`)
        template = templates.transform( template, context )
        const writeMode = context.WRITE_MODE || 'update'
        resolve(utils.addFileP( destname, template, writeMode ))
    })
}

function createTemplates( src ) {
    return utils.globP(src + '/**/*.*')
    .then ((files) => {

        let createTemplates = files.map( item => {
            return templates.getTemplate( item )
        });
        return Promise.all(createTemplates)
    });  
}

function generate(src, dest, context ) {
    console.log(`src = ${src}, dest = ${dest}`)
    return utils.globP(src + '/**/*.*')
        .then ((files) => {

            let promises = files.map( (item) => {
                let ctx = Object.assign({}, context)
                let destname = item.replace(src, dest);
                destname = templates.transform( destname, ctx );
                ctx.FILE_NAME = destname
                ctx.TEMPLATE_NAME = item
                return new Promise( (resolve, reject) => {
                    templates.getTemplate( item ).then( (template) => {
                        resolve( generateOne( destname, template, ctx ) )
                    });
                })
            })
            return Promise.all(promises)
    });  
}

export default {
   createTemplates,
   generate 
}
module.exports = {
    createTemplates,
    generate  
}