import React from 'react'
import { Link } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'

import TeamLogo from './TeamLogo'

export default function Home() {
  const { response, loading } = useTeamNames()
  console.log(response, loading)

  if (loading) {
    return <h1>Loading...</h1>
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
          <Link to={`/${id}`}>
            <TeamLogo key={id} id={id} width={'125px'}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
