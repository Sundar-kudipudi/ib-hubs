import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Popular from './components/Popular'
import Search from './components/Search'
import Account from './components/Account'
import MovieDetailsPage from './components/MovieDetailsPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/search" component={Search} />
      <Route path="/MovieDetails/:id" component={MovieDetailsPage} />
    </Switch>
  </BrowserRouter>
)

export default App
