import React  from 'react'
import "../styling/navbar.css"

const MenuBtn = ({setActiveMenu ,active}) => {

    return (
        <div className="d-md-none" >
            <div onClick={() => setActiveMenu(!active)} className={`menu-btn menu-btn-${active}`}>
                <span></span>
            </div>
        </div>
    )
}

export default MenuBtn
