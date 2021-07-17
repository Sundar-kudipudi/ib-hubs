import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
}

export default class PopularMovies extends Component {
  state = {netflixTopRated: []}

  componentDidMount() {
    this.fetchNetflixTrendingData()
  }

  fetchNetflixTrendingData = async () => {
    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixTopRated: data.results})
  }

  renderSlider = () => {
    const {netflixTopRated} = this.state

    return (
      <Slider {...settings}>
        {netflixTopRated.map(movie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
          return (
            <div className="react-slick-item" key={movie.id}>
              <img
                className="poster"
                src={movieImage}
                alt={movie.title}
                width="100%"
                height="100%"
              />
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    const {netflixTopRated} = this.state

    return (
      <div className="slick-app-container-popular">
        <h1 className="home-heading">Top Rated</h1>
        <div style={{width: '80%'}}>
          {netflixTopRated.length ? (
            this.renderSlider()
          ) : (
            <p style={{textAlign: 'center'}}>Loading...................</p>
          )}
        </div>
      </div>
    )
  }
}
