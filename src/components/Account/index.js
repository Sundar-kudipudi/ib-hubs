import Cookies from 'js-cookie'

import SolidHeader from '../SolidHeader'

import './index.css'

const Account = props => {
  const {history} = props

  const logOutBtn = async () => {
    const sessionId = {
      session_id: Cookies.get('jwt_token'),
    }

    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const getTokenUrl = `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`

    const logoutOptions = {
      method: 'DELETE',
      body: JSON.stringify(sessionId),
      headers: {
        'Content-type': 'application/json',
      },
    }

    const response = await fetch(getTokenUrl, logoutOptions)

    if (response.ok === true) {
      history.replace('./login')
    }
  }

  return (
    <div className="account-container">
      <SolidHeader />
      <div className="account-sub-container">
        <h1 className="account-main-heading">Account</h1>
        <hr />
        <div className="account-details-container">
          <h1 className="account-heading">Member ship</h1>
          <div>
            <p className="account-details">saisundarkudipudi@gmail.com</p>
            <div className="account-details-sub-container">
              <p className="password">Password :</p>
              <p className="password">********</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="account-details-container">
          <h1 className="account-heading">Plan details</h1>
          <div className="account-details-sub-container">
            <p className="account-details premium">Premium</p>
            <p className="account-details ultra-hd">Ultra HD</p>
          </div>
        </div>
        <hr />
        <button className="logout-btn" onClick={logOutBtn} type="button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Account
