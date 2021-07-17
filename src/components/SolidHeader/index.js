import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {AiOutlineSearch, AiFillCloseCircle} from 'react-icons/ai'
import movie from './assets/movie.png'
import menu from './assets/hamburger_menu.png'

import './index.css'

class SolidHeader extends Component {
  state = {
    showOptions: false,
    showSearchInput: false,
  }

  renderHeaderOptions = () => {
    this.setState(prevState => ({showOptions: !prevState.showOptions}))
  }

  onClickCloseBtn = () => {
    this.setState({showOptions: false})
  }

  showSearchBar = () => {
    this.setState(prevState => ({showSearchInput: !prevState.showSearchInput}))
    // const {history} = this.props
    // history.push('./search')
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {showOptions, showSearchInput} = this.state

    return (
      <nav className="mobile-solid-header-navbar">
        <div className="mobile-header-container">
          <button className="logo-btn" type="button" onClick={this.onClickLogo}>
            <img src={movie} alt="logo" />
          </button>
          <div>
            {showSearchInput ? (
              <input
                onChange={this.renderSearchData}
                onBlur={this.showSearchBar}
                type="search"
              />
            ) : (
              <button
                onClick={this.showSearchBar}
                className="search-btn"
                type="button"
              >
                <AiOutlineSearch className="search-icon" />
              </button>
            )}

            <button
              className="hamburger-btn"
              type="button"
              onClick={this.renderHeaderOptions}
            >
              <img src={menu} alt="hamburger menu" />
            </button>
          </div>
        </div>
        {showOptions && (
          <div className="mobile-header-options-container">
            <Link className="mobile-option" to="/">
              Home
            </Link>
            <Link className="mobile-option" to="/popular">
              Popular
            </Link>
            <Link className="mobile-option" to="/account">
              Account
            </Link>
            <button
              onClick={this.onClickCloseBtn}
              className="close-btn"
              type="button"
            >
              <AiFillCloseCircle className="close-icon" />
            </button>
          </div>
        )}
        {/* <Link to="/">Home</Link>
    <Link to="/popular">Popular</Link>
    <Link to="/account">Account</Link> */}
      </nav>
    )
  }
}

export default withRouter(SolidHeader)
