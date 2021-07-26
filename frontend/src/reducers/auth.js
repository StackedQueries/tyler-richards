import * as actionType from '../constants/actionTypes'

const authReducer = (user = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))

      return { ...user, authData: action.data, loading: false, errors: null }
    case actionType.LOGOUT:
      localStorage.clear()

      return { ...user, authData: null, loading: false, errors: null }
    default:
      return user
  }
}

export default authReducer
