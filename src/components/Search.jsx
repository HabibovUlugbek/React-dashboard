import React from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = () => {
    return (
        <div className="col-10 d-flex justify-content-around">
            <form className="search__form">
               <FaSearch /> <input className="search__input" type="text" placeholder="Search"/>
            </form>
        </div>
    )
}

export default Search
