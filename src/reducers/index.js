//This is where all dispatched actions are triaged
import {GET_USERS} from '../actions/index'

const usersReducer = (state ={ 'users': {}}, action) => {
  switch(action.type) {
    case GET_USERS: 
      return {
        ...state,
        users: data
     }
    default: 
      return state
  }
}

export default usersReducer