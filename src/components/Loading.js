import React, { useState, useEffect } from 'react'

export default function Loading({ text = 'Loading' }) {
  const [content, setContent] = useState('Loading')


  useEffect(() => {
    const interval = setInterval(() => {
      setContent((content) => {
        return content === `${text}...`
          ? text
          : `${content}.`
      })
    }, 300)

    return () => {
      window.clearInterval(interval)
    }

  }, [text])

  return (
    <div className='container'>
      <p className='text-center'>{content}</p>
    </div>
  )
}
