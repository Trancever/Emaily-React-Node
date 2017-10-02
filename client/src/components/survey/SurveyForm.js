import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import SurveyField from './SurveyField'

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          <Field
            name="surveyTitle"
            component={SurveyField}
            label="Title"
            size={12}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm)
