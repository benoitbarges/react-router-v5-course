import React from 'react'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import useTeam from '../hooks/useTeam'
import useTeamsArticles from '../hooks/useTeamsArticles'
import useTeamNames from '../hooks/useTeamNames'


import Loading from './Loading'
import TeamLogo from './TeamLogo'

function useTeamPageDate(teamId) {
  const {
    response: team,
    loading: teamLoading
  } = useTeam(teamId)

  const {
    response: articles,
    loading: articlesLoading
  } = useTeamsArticles(teamId)

  const {
    response: teamNames,
    loading: teamNamesLoading
  } = useTeamNames()

  return {
    team,
    articles,
    teamNames,
    loading: teamLoading || articlesLoading || teamNamesLoading
  }
}

export default function TeamPage() {
  const { teamId } = useParams()
  const match = useRouteMatch()
  const {
    teamNames,
    articles,
    team,
    loading
  } = useTeamPageDate(teamId)

  if (loading) {
    return <Loading />
  }

  if (!loading && !teamNames.includes(teamId)) {
    return <h1 className='text-center'>{teamId} is not a team</h1>
  }

  return (
    <div className='panel'>
      <TeamLogo id={team.id} />
      <h1 className='medium-header'>{team.name}</h1>
      <h4 style={{margin: '5px'}}>
        <Link
          to={{
            pathname:'/players',
            search: `teamId=${team.id}`
          }}
        >
          View Roster
        </Link>
      </h4>
      <h4>Championships</h4>
      <ul className='championships'>
        {team.championships.map(c => <li key={c}>{c}</li>)}
      </ul>
      <ul className='info-list row' style={{width: '100%'}}>
        <li>Established<div>{team.established}</div></li>
        <li>Manager<div>{team.manager}</div></li>
        <li>Coach<div>{team.coach}</div></li>
        <li>Record<div>{team.wins} - {team.losses}</div></li>
      </ul>
      <h2 className='header'>Articles</h2>
      <ul className='articles'>
        {articles.map(({ title, id, date }) => (
          <li key={id}>
            <Link to={`${match.url}/articles/${id}`}>
              <h4 className='article-title'>{title}</h4>
              <div className='article-date'>{new Date(date).toLocaleDateString()}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
