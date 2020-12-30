import Store from '../../store'
//Action types
const GETTING_USERS = 'GETTING USERS'
const GET_USERS = 'GET USERS'

const gettingUsers = () => {
  return {
    type: GETTING_USERS
  }
}
const getUsers = (payload) => {
  return {
    type: GET_USERS,
    users: payload.body
  }
}

const backendURI = 'http://localhost:3002/users'

//Get users action creator
const getUsersAsync = () => async (dispatch) => {
  //Store.subscribe(getUsers())
  dispatch({
    type: GETTING_USERS
  })
  try {
   const res = await fetch(backendURI)
    if (!res.ok)
      throw Error(res.statusText)
    jsontData = await res.json()
    console.log(Store.getState())
    return dispatch({
        type: GET_USERS,
        users: payload.body
    })
  } catch(e ) {
    console.error(e)
  }
}

export {GET_USERS, GETTING_USERS, getUsersAsync}