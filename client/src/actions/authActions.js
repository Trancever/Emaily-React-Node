import axios from 'axios'
import { FETCH_USER, LOGGED_OUT } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const logOutUser = () => async dispatch => {
  const res = await axios.get('/api/logout')
  dispatch({ type: LOGGED_OUT, payload: !res.data.loggedOut })
}
