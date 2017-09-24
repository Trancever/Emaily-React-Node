import { FETCH_USER, LOGGED_OUT } from '../actions/types'

const authReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGGED_OUT:
      return payload
    case FETCH_USER:
      return !!payload.data
    default:
      return state
  }
}

export default authReducer
