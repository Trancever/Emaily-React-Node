import React from 'react'
import { Row, Input, Icon } from 'react-materialize'

const SurveyField = ({ input, label, size, icon, type, meta: { error, touched } }) => {
  return (
    <Row>
      <Input
        {...input}
        type="text"
        s={size}
        label={label}
        error={touched && error}
      >
        <Icon>{icon}</Icon>
      </Input>
    </Row>
  )
}

export default SurveyField
