import React from 'react'
import { Row, Input } from 'react-materialize'

const SurveyField = (props) => {
  return (
    <Row>
      <Input {...props.input} s={props.size} label={props.label} />
    </Row>
  )
}

export default SurveyField
