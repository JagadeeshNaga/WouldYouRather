import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div>
     <h1>404 - Not Found</h1>
      <h2>There is no poll found, please sign in</h2>
      <Link to='/'>Go Back</Link>
    </div>
  )
}
