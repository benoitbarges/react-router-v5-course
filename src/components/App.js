import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from './Loading'
import Navbar from './Navbar'

const Home = React.lazy(() => import('./Home'))
const Teams = React.lazy(() => import('./Teams'))
const Players = React.lazy(() => import('./Players'))
const TeamPage = React.lazy(() => import('./TeamPage'))
const Articles = React.lazy(() => import('./Articles'))


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

      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/teams' component={Teams} />
          <Route path='/players' component={Players} />
          <Route exact path='/:teamId' component={TeamPage} />
          <Route path='/:teamId/articles' component={Articles} />
          <Route component={FourOFour} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}
