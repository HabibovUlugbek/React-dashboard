import React from 'react'
import Link from '../components/Link'

const NavLinks = () => {
    const links = [
        {text:"Home"},
        {text:"Users"},
        {text:"Product"},
        {text:"Settings"}
    ]
    return (
        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 text-center">
                {links.map(link => (
                    <Link data={link.text} />
                ))}
            </div>
        </div>
        
    )
}

export default NavLinks
