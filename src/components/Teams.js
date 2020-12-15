import React from 'react'
import useTeamNames from '../hooks/useTeamNames'
import { Route, Switch, useRouteMatch, useParams, Link } from 'react-router-dom'
import useTeam from '../hooks/useTeam'

import Loading from './Loading'
import Sidebar from './Sidebar'
import TeamLogo from './TeamLogo'

function Team({ teams }) {
  const { teamId } = useParams()
  const {response: team, loading} = useTeam(teamId)

  if (loading) {
    return <Loading />
  }

  return (
    <div style={{width: '100%'}}>
      <TeamLogo id={team.id} className='center' />
      <h1 className='medium-header'>{team.name}</h1>
      <ul className='info-list row'>
        <li>Established<div>{team.established}</div></li>
        <li>Manager<div>{team.manager}</div></li>
        <li>Coach<div>{team.coach}</div></li>
      </ul>
      <Link to={`/${team.id}`} className='center btn-main'>
        {team.name} Team Page
      </Link>
    </div>
  )
}

export default function Teams() {
  const { response: names, loading } = useTeamNames()
  const match = useRouteMatch()

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Teams'
        list={names}
      />
      <Switch>
        <Route path={`${match.url}/:teamId`} >
          <Team teams={names} />
        </Route>
        <Route path='*'>
          <div className='sidebar-instruction'>Select a team</div>
        </Route>
      </Switch>
    </div>
  )
}
