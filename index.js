
import gen from './src/generator'
import model from './model'
import defaultModel from './src/defaultModel'
import utils from './src/utils'

console.log("Starting")

let context = {
    src: 'source',
    title: 'howdy',
    _capitalize: utils.capitalize
}
// gen('./testing/templates','./testing/destination', context)
// .then( () => console.log('it is over'))
// .then( () => gen('./testing/templates','./testing/destination2', context))
// .then( () => console.log('it is over'))
// .then( () => gen('./testing/templates','./testing/destination3', context))
// .then( () => console.log('it is over'))
// .catch(err => console.log(err))

console.log('Ending')

console.log(JSON.stringify(model, null, 2))
let m = defaultModel.genModel(model);
console.log(JSON.stringify(m, null, 2))

context.model = m;

let promises =  m.classes.map( clz => {
    let ctx = Object.assign({}, context);
    ctx.clazz = clz;
    console.log(JSON.stringify(ctx, null, 2))
    return gen('./testing/templates/each', './testing/destination', ctx);
});

gen('./testing/templates/once','./testing/destination', context)
.then( Promise.all( promises ));
