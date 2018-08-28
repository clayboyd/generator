
import Constants from './{{clazz.name}}Constants'
import services from './{{clazz.name}}Services'

class {{clazz.name}}Actions {

  select( object ) {
    return function( dispatch ) {
      dispatch( {
        type: Constants.{{upperCase clazz.name}}_SELECT,
        payload: {
          current: object
        }
      });
    }

  }

  create( object ) {
    let list = services.create( object )
    return function( dispatch ) {
      dispatch( {
        type: Constants.{{upperCase clazz.name}}_CREATE,
        payload: {
          list,
          current: {}
        }
      });
    }
  }

  findAll( ) {
    let list = services.findAll()
    return function( dispatch ) {
      dispatch( {
        type: Constants.{{upperCase clazz.name}}_FIND_ALL,
        payload: {
          list
        }
      })
    }
  }

  remove( object ) {
    let list = services.remove(object)
    return function( dispatch ) {
      dispatch( {
        type: Constants.{{upperCase clazz.name}}_DELETE,
        payload: {
          list
        }
      })
    }
  }

  update( object ) {
    let list = services.update(object)
    return function( dispatch ) {
      dispatch( {
        type: Constants.{{upperCase clazz.name}}_UPDATE,
        payload: {
          list,
          current: {}
        }
      })
    }
  }
}

export default new {{clazz.name}}Actions()
