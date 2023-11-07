import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='loader'>
      <h1>page 404</h1>
      <p>Page not Found</p>
      <Link to={"/"}> <button>Home</button> </Link>
    </div>
  )
}

export default PageNotFound