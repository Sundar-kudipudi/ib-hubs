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

export default class NetflixOriginals extends Component {
  state = {netflixOriginals: []}

  //   componentDidMount() {
  //     this.fetchNetOriginalData()
  //   }

  fetchNetOriginalData = async () => {
    const API_KEY = '7f3e4cd7963456eea63c53d4f8a9698c'
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({netflixOriginals: data.results})
  }

  renderSlider = () => {
    const {netflixOriginals} = this.state

    return (
      <Slider {...settings}>
        {netflixOriginals.map(movie => {
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
    const {netflixOriginals} = this.state

    return (
      <div className="slick-app-container-original">
        <h1 className="home-heading">Originals</h1>
        <div style={{width: '80%'}}>
          {netflixOriginals.length ? (
            this.renderSlider()
          ) : (
            <p style={{textAlign: 'center'}}>Loading...................</p>
          )}
        </div>
      </div>
    )
  }
}
