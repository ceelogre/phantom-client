//This is where all dispatched actions are triaged

const usersReducer = (state ={}, action) => {
  switch(action.type) {
    case GET_USERS: 
      return [
        ...state,
        action.users
      ]
    default: 
      return state
  }
}

export default usersReducer