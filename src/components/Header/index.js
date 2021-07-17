import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {AiOutlineSearch, AiFillCloseCircle} from 'react-icons/ai'
import movie from './assets/movie.png'
import menu from './assets/hamburger_menu.png'

import './index.css'

class Header extends Component {
  state = {
    showOptions: false,
  }

  renderHeaderOptions = () => {
    this.setState(prevState => ({showOptions: !prevState.showOptions}))
  }

  onClickCloseBtn = () => {
    this.setState({showOptions: false})
  }

  showSearchBar = () => {
    const {history} = this.props
    history.push('./search')
  }

  render() {
    const {showOptions} = this.state

    return (
      <nav className="mobile-header-navbar">
        <div className="mobile-header-container">
          <img src={movie} alt="logo" />
          <div>
            <button
              onClick={this.showSearchBar}
              className="search-btn"
              type="button"
            >
              <AiOutlineSearch className="search-icon" />
            </button>

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

export default withRouter(Header)
