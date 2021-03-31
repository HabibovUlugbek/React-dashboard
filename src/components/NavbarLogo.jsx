import React from 'react';
import logo from './bonomi_logo.png'

const NavbarLogo = () => {
    return (
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 d-flex justify-content-center">
                <img className="img-fluid" style={{width:"200px"}} src={logo} alt="Bonomi logo"/>
            </div>
        </div>
        
    )
}

export default NavbarLogo
