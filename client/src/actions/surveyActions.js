import { FETCH_USER } from './types'
import axios from 'axios'

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/survey', values)

  history.push('/surveys')

  dispatch({ type: FETCH_USER, payload: res.data })
}
