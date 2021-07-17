import {Link} from 'react-router-dom'

const MoviesList = props => {
  const {eachMovie} = props
  const {id, title} = eachMovie
  const movieImage = `https://image.tmdb.org/t/p/original/${eachMovie.backdrop_path}`

  return (
    <Link className="react-slick-item" to={`MovieDetails/${id}`}>
      <img
        className="poster"
        src={movieImage}
        alt={title}
        width="100%"
        height="100%"
      />
    </Link>
  )
}

export default MoviesList
