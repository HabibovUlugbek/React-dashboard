import React from 'react'
import MainContent from './MainContent'
import SearchBox from './SearchBox'

const Main = () => {
    return (
        <div className="w-100" style={{
            background:"rgb(240, 240, 240)"
        }}>
            <SearchBox />
            <MainContent />
        </div>
    )
}

export default Main
