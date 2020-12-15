import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import slug from 'slug'

function CustomLink({ children, to}) {
   const match = useRouteMatch({ path: to })

  return (
    <li style={{fontWeight: match ? 'bold' : 'normal'}}>
      <Link to={to} >
        {children}
      </Link>
    </li>
  )
}

export default function Sidebar({ title, list }) {
  const match = useRouteMatch()

  return (
    <div>
      <h3>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((item) => (
          <CustomLink to={`${match.url}/${slug(item)}`} li key={item}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}
