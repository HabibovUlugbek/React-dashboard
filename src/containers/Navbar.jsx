import React from 'react'
import NavbarLogo from '../components/NavbarLogo'
import '../styling/navbar.css'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <div style={{overflowX:"hidden"}}  className="navbar__wrap">
            <div className="">
                <NavbarLogo />
                <NavLinks />
            </div>
            
        </div>
    )
}

export default Navbar
