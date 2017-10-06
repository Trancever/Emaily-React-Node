import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import formFields from './surveyFormData.json'
import { submitSurvey } from '../../actions'

const SurveyFormReview = ({ formValues, onCancel, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {_.map(formFields, field => {
          return (
            <div key={field.label}>
              <label>{field.label}</label>
              <div>{formValues[field.name]}</div>
            </div>
          )
        })}
      </div>
      <button
        className="yellow darken-3 btn white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn white-text right"
        onClick={_.partial(submitSurvey, formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview))
