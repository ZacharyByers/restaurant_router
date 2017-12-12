import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'

class App extends Component {
  render() {
    return (
      <Segment basic>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/menu' component={Menu} />
          <ProtectedRoute exact path='/menu_items/:id' component={MenuItem} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    )
  }
}

export default App
