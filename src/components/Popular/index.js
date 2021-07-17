import {Component} from 'react'

import SolidHeader from '../SolidHeader'
import Footer from '../Footer'

import leftArrow from './assets/leftArrow.png'
import rightArrow from './assets/rightArrow.png'

import './index.css'

export default class Popular extends Component {
  state = {
    netflixPopular: [],
    PAGE_NUMBER: 1,
  }

  decreaseCount = () => {
    const {PAGE_NUMBER} = this.state
    if (PAGE_NUMBER !== 1)
      this.setState(
        prevState => ({
          PAGE_NUMBER: prevState.PAGE_NUMBER - 1,
        }),
        this.renderPopularData,
      )
  }

  increaseCount = () => {
    const {PAGE_NUMBER} = this.state
    if (PAGE_NUMBER !== 20)
      this.setState(
        prevState => ({
          PAGE_NUMBER: prevState.PAGE_NUMBER + 1,
        }),
        this.renderPopularData,
      )
  }

  componentDidMount = () => {
    this.renderPopularData()
  }

  renderPopularData = async () => {
    const {PAGE_NUMBER} = this.state

    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixPopular: data.results})
  }

  render() {
    const {netflixPopular, PAGE_NUMBER} = this.state
    console.log(netflixPopular)
    // this.renderPopularData()

    return (
      <div className="popular-container">
        <SolidHeader />
        <ul className="popular-movies-list-container">
          {netflixPopular.slice(1, 13).map(movie => {
            const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            return (
              <li key={movie.id} className="popular-movie-list">
                <button className="popular-movie-btn" type="button">
                  <img
                    className="popular-image"
                    src={movieImage}
                    alt={movie.title}
                  />
                </button>
              </li>
            )
          })}
        </ul>
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
        <Footer />
      </div>
    )
  }
}
