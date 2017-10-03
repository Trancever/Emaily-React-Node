import React, { Component } from 'react'
import _ from 'lodash'
import './survey.css'
import { reduxForm } from 'redux-form'

import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  constructor() {
    super()
    this.state = {
      showReview: false,
    }

    this.handleViewChange = this.handleViewChange.bind(this)
  }

  handleViewChange(showReview) {
    this.setState({ showReview })
  }

  render() {
    return (
      <div className="container survey-new">
        {
          this.state.showReview
            ? <SurveyFormReview
              onCancel={_.partial(this.handleViewChange, false)}
            />
            : <SurveyForm
              onSubmit={_.partial(this.handleViewChange, true)}
            />
        }
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew)
