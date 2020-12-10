//Action types
const GET_USERS = 'GET USERS'


const getUsersAction = (users) => {
  return {
    type: GET_USERS,
    users: users
  }
}