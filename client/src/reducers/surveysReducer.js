import { FETCH_SURVEYS } from '../actions/types'

const surveysReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_SURVEYS:
      return payload
    default:
      return state
  }
}

export default surveysReducer
