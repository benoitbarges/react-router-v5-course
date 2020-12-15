import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Teams from './Teams'
import Players from './Players'
import Navbar from './Navbar'
import TeamPage from './TeamPage'

function FourOFour() {
  return (
    <div className='container'>
      <h1 className='text-center'>Page not found</h1>
    </div>
  )
}

export default function App () {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/teams' component={Teams} />
        <Route path='/players' component={Players} />
        <Route path='/:teamId' component={TeamPage} />
        <Route component={FourOFour} />
      </Switch>
    </Router>
  )
}
