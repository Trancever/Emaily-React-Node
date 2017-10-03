import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './surveyFormData.json'

class SurveyForm extends Component {
  constructor() {
    super()
    this.SIZE = 12
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          {_.map(formFields, field => {
            return <Field
              name={field.name}
              label={field.label}
              icon={field.icon}
              size={this.SIZE}
              component={SurveyField}
              type="text"
              key={field.label}
            />
          })}
          <Link to="/surveys" className="red btn white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div >
    )
  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const validate = (values) => {
  let errors = {}

  _.each(formFields, ({ name }) => {
    if (!values[name] || values[name].length < 5) {
      errors[name] = capitalizeFirstLetter(`${name} must contain at least 5 characters`)
    }
  })

  const invalidEmails = validateEmails(values.recipients).join(', ')

  if (invalidEmails.length > 0) {
    errors.recipients = `Invalid addresses: ${invalidEmails}`
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm)
