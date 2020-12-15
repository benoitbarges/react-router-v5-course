import React from 'react'
import { Link } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'

import TeamLogo from './TeamLogo'
import Loading from './Loading'

export default function Home() {
  const { response, loading } = useTeamNames()

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <h1 className='large-header'>
        Hash History Basketball League
      </h1>
      <h3 className='header text-center'>
        Select a team
      </h3>
      <div className='home-grid'>
        {response.map((id) => (
          <Link to={`/${id}`} key={id}>
            <TeamLogo id={id} width={'125px'}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
