import React from 'react'

import { Link } from 'react-router-dom'

import { Navbar, NavbarBrand, NavItem } from 'reactstrap'

function Header() {
  return (
    <header>
      <Navbar>
        <NavbarBrand href="/">{process.env.REACT_APP_APPTITLE}</NavbarBrand>
        <NavItem>
          <Link to="/Login"> Login </Link>
          <Link to="/"> Home </Link>
        </NavItem>
      </Navbar>
    </header>
  )
}

export default Header
