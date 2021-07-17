import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'

import leftArrow from './assets/leftArrow.png'
import rightArrow from './assets/rightArrow.png'

import movie from './assets/movie.png'
import menu from './assets/hamburger_menu.png'

import './index.css'

export default class Search extends Component {
  state = {
    PAGE_NUMBER: 1,
    showSearch: '',
    netflixSearchData: [],
    showOptions: false,
  }

  decreaseCount = () => {
    const {PAGE_NUMBER} = this.state
    if (PAGE_NUMBER !== 1)
      this.setState(
        prevState => ({
          PAGE_NUMBER: prevState.PAGE_NUMBER - 1,
        }),
        this.renderSearchData,
      )
  }

  increaseCount = () => {
    const {PAGE_NUMBER} = this.state
    if (PAGE_NUMBER !== 20)
      this.setState(
        prevState => ({
          PAGE_NUMBER: prevState.PAGE_NUMBER + 1,
        }),
        this.renderSearchData,
      )
  }

  renderSearchData = async () => {
    const {PAGE_NUMBER} = this.state

    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Fast&page=${PAGE_NUMBER}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixSearchData: data.results})
  }

  getSearch = event => {
    this.setState({showSearch: event.target.value}, this.renderSearchData)
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderSearchHeader = () => {
    const {showOptions} = this.state

    return (
      <nav className="mobile-search-header-navbar">
        <div className="mobile-header-container">
          <button className="logo-btn" type="button" onClick={this.onClickLogo}>
            <img src={movie} alt="logo" />
          </button>
          <div>
            <input type="text" onChange={this.getSearch} />

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

  renderSearchBody = () => {
    const {netflixSearchData, showSearch} = this.state

    const filteredData = netflixSearchData.filter(eachMovie =>
      eachMovie.title.toLowerCase().includes(showSearch),
    )

    return (
      <ul className="search-movies-list-container">
        {filteredData.map(eachMovie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`
          return (
            <li key={eachMovie.id} className="popular-movie-list">
              <button className="popular-movie-btn" type="button">
                <img
                  className="popular-image"
                  src={movieImage}
                  alt={eachMovie.title}
                />
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  renderPages = () => {
    const {PAGE_NUMBER} = this.state

    return (
      <div className="page-count-container">
        <button
          onClick={this.decreaseCount}
          className="arrow-btn"
          type="button"
        >
          <img src={leftArrow} alt="left arrow" />
        </button>
        <p className="page-count">{PAGE_NUMBER} of 20</p>
        <button
          onClick={this.increaseCount}
          className="arrow-btn"
          type="button"
        >
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    )
  }

  render() {
    const {showSearch} = this.state

    return (
      <div className="search-container">
        {this.renderSearchHeader()}
        {showSearch !== '' && this.renderSearchBody()}
        {showSearch !== '' && this.renderPages()}
      </div>
    )
  }
}
