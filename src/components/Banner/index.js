import {Component} from 'react'

import './index.css'

export default class Banner extends Component {
  state = {
    netflixTopRated: [],
  }

  componentDidMount = () => {
    this.fetchTopRatedMoviesData()
  }

  fetchTopRatedMoviesData = async () => {
    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixTopRated: data.results})
  }

  render() {
    const {netflixTopRated} = this.state
    console.log(netflixTopRated)

    return (
      <>
        <div className="home-poster-container">
          <div className="home-poster-sub-container">
            <h1 className="banner-heading">Super Man</h1>
            <p className="banner-description">
              Superman is a fictional superhero who first appeared in American
              comic books published by DC Comics.
            </p>
            <button className="play-btn" type="button">
              Play
            </button>
          </div>
        </div>
      </>
    )
  }
}
