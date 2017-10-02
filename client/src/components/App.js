import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

import Header from './header/Header'
import Landing from './landing/Landing'
import Dashboard from './dashboard/Dashboard'
import SurveyNew from './survey/SurveyNew'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, { fetchUser })(App)
