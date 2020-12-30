//This is where all dispatched actions are triaged
import {GET_USERS, GETTING_USERS} from '../actions/index'

const usersReducer = (state ={ 'users': {}, loading: false}, action) => {
  switch(action.type) {
    case GET_USERS: 
      return {
        ...state,
        users: data
     }
     case GETTING_USERS:
       return {
         ...state,
         loading: true
       }
    default: 
      return state
  }
}

export default usersReducer