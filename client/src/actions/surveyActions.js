import { FETCH_USER } from './types'
import axios from 'axios'

export const submitSurvey = values => async dispatch => {
  const res = await axios.post('/api/survey', values)

  dispatch({ type: FETCH_USER, payload: res.data })
}
