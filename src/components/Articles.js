import React from 'react'
import { useParams, Switch, useRouteMatch, Route } from 'react-router-dom'
import useTeamsArticles from '../hooks/useTeamsArticles'
import useArticle from '../hooks/useArticle'

import Sidebar from './Sidebar'
import Loading from './Loading'

function Article({ articles })  {
  const { teamId, articleId } = useParams()
  const { response: article, loading} = useArticle({ teamId, articleId })

  if (loading) {
    return <Loading />
  }

  return (
    <div className='panel'>
      <article className='article'>
        <h1 className='header'>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  )
}

export default function Articles() {
  const { teamId } = useParams()
  const match = useRouteMatch()
  const { response: articles, loading } = useTeamsArticles(teamId)

  if (loading) {
    return <Loading />
  }

  return(
    <div className='container two-column'>
      <Sidebar
        title='Articles'
        list={articles.map(article => article.title)}
      />

      <Switch>
        <Route path={`${match.path}/:articleId`}>
          <Article articles={articles}/>
        </Route>
        <Route path='*'>
          <div className='sidebar-instruction'>Select an article</div>
        </Route>
      </Switch>
    </div>
  )
}
