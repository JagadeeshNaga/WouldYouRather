import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage () {
  if(performance.navigation.type === 1) {
    <Link to='/' />
  }
  return (
    <div>
      <h1>Please Sig In </h1>
      <Link to='/'>Sign In here</Link>
    </div>
  )
}
