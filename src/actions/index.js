import Store from '../../store'
//Action types
const GET_USERS = 'GET USERS'

const backendURI = 'http://localhost:3002/users'

//Get users action creator
const getUsers = async () => {
  //Store.subscribe(getUsers())
  const res = await fetch(backendURI)
  if (!res.ok)
    throw Error(res.statusText)
  await res.json()
  console.log(Store.getState())
  Store.dispatch({
    type: GET_USERS,
    data: res.body
  })
  console.log(Store.getState())
}

getUsers()
export {GET_USERS}