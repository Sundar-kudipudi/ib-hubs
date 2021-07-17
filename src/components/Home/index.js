import Header from '../Header'
import Banner from '../Banner'
import TrendingMovies from '../TrendingMovies'
import PopularMovies from '../PopularMovies'
import NetflixOriginals from '../NetflixOriginal'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <Banner />
    <TrendingMovies />
    <PopularMovies />
    <NetflixOriginals />
    <Footer />
  </div>
)

export default Home
