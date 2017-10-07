import { FETCH_USER, FETCH_SURVEYS } from './types'
import axios from 'axios'

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/survey', values)

  history.push('/surveys')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys')

  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}
