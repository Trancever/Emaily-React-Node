import React from 'react'
import { Row, Input } from 'react-materialize'

const SurveyField = (props) => {
  console.log(props)
  return (
    <Row>
      <Input s={12} label="Title" />
    </Row>
  )
}

export default SurveyField
