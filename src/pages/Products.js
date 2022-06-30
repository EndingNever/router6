import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Products() {
  // useNavigate replaces useHistory
  // const navigate = useNavigate();
  // navigate('/welcome', { replace: true}); This is how we would replace the history 
  // navigate(-1) Goes back one page
  // navigate(-2) Goes back two pages
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/p1'>A Book</Link></li>
        <li><Link to='/products/p2'>A Carpet</Link></li>
        <li><Link to='/products/p3'>An Online Course</Link></li>
      </ul>
    </section>
  )
}
