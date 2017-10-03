import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'

const FIELDS = [
  { name: 'title', label: 'Survey Title', icon: 'title' },
  { name: 'subject', label: 'Subject Line', icon: 'subject' },
  { name: 'body', label: 'Email Body', icon: 'message' },
  { name: 'Recipient List', label: 'emails', icon: 'email' },
]

class SurveyForm extends Component {
  constructor() {
    super()
    this.SIZE = 12
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          {_.map(FIELDS, field => {
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
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const validate = (values) => {
  let errors = {}

  _.each(FIELDS, ({ name }) => {
    if (!values[name] || values[name].length < 5) {
      errors[name] = capitalizeFirstLetter(`${name} must contain at least 5 characters`)
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm)
