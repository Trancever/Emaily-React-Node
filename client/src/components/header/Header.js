import React, { Component } from 'react'
import './header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logOutUser } from '../../actions'

class Header extends Component {
  handleLogOut() {
    this.props.logOutUser()
  }

  renderAuthInformation() {
    if (this.props.auth === null) return null
    return this.props.auth
      ? <li onClick={this.handleLogOut.bind(this)}><a>Logout</a></li>
      : <li><a href="/auth/google">Login With Google</a></li>
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" >
          <div className="container">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">
              {this.renderAuthInformation()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, { logOutUser })(Header)
