import React from 'react'
import Search from '../components/Search'
import ToolBar from '../components/ToolBar'
import "../styling/searchbox.css"

const SearchBox = () => {
    return (
        <div className="p-1 search__box row m-0">
            <Search />
            <ToolBar />
        </div>
    )
}

export default SearchBox
