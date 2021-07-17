import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'
import movie from './assets/movie.png'

class Login extends Component {
  state = {
    username: 'sai_sundar',
    password: 'Kudipudi@123',
    errorMessage: false,
  }

  onSubmitSuccess = token => {
    Cookies.set('jwt_token', token)
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({errorMessage: true})
  }

  onSubmitBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'

    const getTokenUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`

    const getTokenOptions = {
      method: 'GET',
    }

    let response = await fetch(getTokenUrl, getTokenOptions)
    const getTokenData = await response.json()

    const userDetails = {
      username,
      password,
      request_token: getTokenData.request_token,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails, getTokenData.request_token),
      headers: {
        'Content-type': 'application/json',
      },
    }

    const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`

    response = await fetch(url, options)
    let data = await response.json()

    const sessionUrl = `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`

    const requestToken = {
      request_token: getTokenData.request_token,
    }

    const postSessionOptions = {
      method: 'POST',
      body: JSON.stringify(requestToken),
      headers: {
        'Content-type': 'application/json',
      },
    }

    response = await fetch(sessionUrl, postSessionOptions)
    data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.session_id)
    } else {
      this.onSubmitFailure()
    }
  }

  enterUserName = event => {
    this.setState({username: event.target.value, errorMessage: false})
  }

  enterPassword = event => {
    this.setState({password: event.target.value, errorMessage: false})
  }

  render() {
    const {errorMessage} = this.state

    return (
      <div className="background-container">
        <img src={movie} alt="movie" className="movie" />
        <div className="login-container">
          <form onSubmit={this.onSubmitBtn} className="login-form">
            <h1 className="sign-in-heading">Sign in</h1>
            <label className="login-label" htmlFor="username">
              USERNAME
            </label>
            <input
              onChange={this.enterUserName}
              className="login-inputs"
              id="username"
              type="text"
            />
            <label className="login-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              onChange={this.enterPassword}
              className="login-inputs"
              id="password"
              type="password"
            />
            {errorMessage && (
              <p className="error-message">
                Please enter a valid Email and Password
              </p>
            )}
            <button className="sign-in-button" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
