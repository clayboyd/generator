
import Constants from './AddressConstants'
import services from './AddressServices'

class AddressActions {

  // CUSTOM_SELECT_START
  select( object ) { return this._select(object)}
  // CUSTOM_SELECT_END

  _select( object ) {
    return function( dispatch ) {
      dispatch( {
        type: Constants.ADDRESS_SELECT,
        payload: {
          current: object
        }
      });
    }
  }

// CUSTOM_CREATE_START 
  create(object) { return this._create(object) } 
// CUSTOM_CREATE_END 

  _create( object ) {
    let list = services.create( object )
    return function( dispatch ) {
      dispatch( {
        type: Constants.ADDRESS_CREATE,
        payload: {
          list,
          current: {}
        }
      });
    }
  }

// CUSTOM_FINDALL_START 
  findAll(object) { return this._findAll(object) } 
// CUSTOM_FINDALL_END 
  
  _findAll( ) {
    let list = services.findAll()
    return function( dispatch ) {
      dispatch( {
        type: Constants.ADDRESS_FIND_ALL,
        payload: {
          list
        }
      })
    }
  }

// CUSTOM_REMOVE_START 
  remove(object) { return this._remove(object) } 
// CUSTOM_REMOVE_END 
  
  _remove( object ) {
    let list = services.remove(object)
    return function( dispatch ) {
      dispatch( {
        type: Constants.ADDRESS_DELETE,
        payload: {
          list
        }
      })
    }
  }

// CUSTOM_UPDATE_START 
  update(object) { return this._update(object) } 
// CUSTOM_UPDATE_END 

  _update( object ) {
    let list = services.update(object)
    return function( dispatch ) {
      dispatch( {
        type: Constants.ADDRESS_UPDATE,
        payload: {
          list,
          current: {}
        }
      })
    }
  }
}

export default new AddressActions()
