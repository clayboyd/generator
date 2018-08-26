
import templates from './templates'
import utils from './utils'

function generateOne( destname, template, context) {
    return new Promise((resolve, reject ) => {
        console.log(`destname = ${destname}`)
        template = templates.transform( template, context )
        resolve(utils.writeFileP( destname, template, 'write' ))
    })
}

export default function generate(src, dest, context ) {
    console.log(`src = ${src}, dest = ${dest}`)
    return utils.globP(src + '/**/*.*')
        .then ((files) => {

            let createTemplates = files.map( item => {
                return templates.getTemplate( item )
            });
            let promises = files.map( (item) => {
                let ctx = Object.assign({}, context)
                let destname = item.replace(src, dest);
                destname = templates.transform( destname, ctx );
                ctx.FILE_NAME = destname
                ctx.TEMPLATE_NAME = item
                return templates.getTemplate( item ).then( (template) => {
                    return generateOne( destname, template, ctx )
                })
            })
            return Promise.all(createTemplates)
            .then(Promise.all(promises))
    });  
}