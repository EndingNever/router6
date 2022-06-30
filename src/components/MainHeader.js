import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData)=> navData.isActive ? classes.active : ''} to='/hello'>Hello</NavLink>
          </li>
          <li>
            <NavLink className={(navData)=> navData.isActive ? classes.active : ''} to='/NewMusic'>New Music</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
