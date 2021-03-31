import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FcSettings } from 'react-icons/fc'
import {BsChatFill} from 'react-icons/bs'

const ToolBar = () => {
    return (
        <div className="d-flex col-2 align-items-center justify-content-center">
            <div className="d-flex">
                <div className="p-1 px-2"><BsChatFill /></div>
                <div className="p-1 px-2"><FaBell /></div>
                <div className="p-1 px-2"><FcSettings /></div>
            </div>
            
        </div>
    )
}

export default ToolBar
