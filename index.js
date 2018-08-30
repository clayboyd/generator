
import gen from './src/generator'
//import model from './model'
import defaultModel from './src/defaultModel'
import utils from './src/utils'
import startup from './startup'

console.log("Starting")

let context = {
    src: 'source',
    title: 'howdy',
    WRITE_MODE: 'write'
}

console.log('Ending')

//console.log(JSON.stringify(model, null, 2))
//console.log(JSON.stringify(m, null, 2))

const project = process.argv[2]
if (! project) {
    console.error("ERROR: requires a command line parameter of the project.")
    console.error("usage:  npm start projectName")
    process.exit(1)
}

const params = {}

params. src = startup[project].src
params. dest = startup[project].dest
params. WRITE_MODE = startup[project].writeMode || 'merge'
params.model = startup[project].model

var model = require(startup[project].model)
let m = defaultModel.genModel(model);
context.model = m;

//console.log( JSON.stringify(m, null, 2))

console.log(params)

gen.createTemplates(params.src + '/once')
    .then(gen.createTemplates(params.src + '/each'))
    .then(() => gen.generate(params.src + '/once',params.dest, context))
    .then( () => {
        const promises =  m.classes.map( clz => {
            let ctx = Object.assign({}, context);
            ctx.clazz = clz;
            // console.log(JSON.stringify(ctx, null, 2))
            return gen.generate(params.src + '/each', params.dest, ctx);
        });
        return Promise.all( promises )
    })
