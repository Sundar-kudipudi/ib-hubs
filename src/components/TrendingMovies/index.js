import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'
import MoviesList from '../MovieList'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //   ],
}

export default class TrendingMovies extends Component {
  state = {netflixTrending: []}

  componentDidMount() {
    this.fetchNetflixTrendingData()
  }

  fetchNetflixTrendingData = async () => {
    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixTrending: data.results})
  }

  getMovieId = id => {
    console.log(id)
  }

  renderSlider = () => {
    const {netflixTrending} = this.state

    return (
      <Slider {...settings}>
        {netflixTrending.map(eachMovie => (
          <MoviesList
            key={eachMovie.id}
            eachMovie={eachMovie}
            getMovieId={this.getMovieId}
          />
        ))}
      </Slider>
    )
  }

  render() {
    const {netflixTrending} = this.state

    return (
      <div className="slick-app-container-trending">
        <h1 className="home-heading">Trending Now</h1>
        <div style={{width: '80%'}}>
          {netflixTrending.length ? (
            this.renderSlider()
          ) : (
            <p style={{textAlign: 'center'}}>Loading...................</p>
          )}
        </div>
      </div>
    )
  }
}
