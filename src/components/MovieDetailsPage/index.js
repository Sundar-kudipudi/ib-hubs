import {Component} from 'react'

import './index.css'

class MovieDetailsPage extends Component {
  state = {
    netflixMovieData: [],
    netflixSimilarMovies: [],
    PAGE_NUMBER: 1,
  }

  componentDidMount = () => {
    this.renderMovieData()
  }

  renderMovieData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {PAGE_NUMBER} = this.state

    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

    const options = {
      method: 'GET',
    }

    const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${PAGE_NUMBER}`

    const response = await fetch(url, options)
    const data = await response.json()

    const similarMoviesResponse = await fetch(similarMoviesUrl, options)
    const similarMovieData = await similarMoviesResponse.json()
    this.setState({
      netflixMovieData: data,
      netflixSimilarMovies: similarMovieData.results,
    })
  }

  render() {
    const {netflixSimilarMovies} = this.state
    console.log(netflixSimilarMovies)

    return <h1>hiiiiiiiiiiiiiiiii</h1>
  }
}

export default MovieDetailsPage
