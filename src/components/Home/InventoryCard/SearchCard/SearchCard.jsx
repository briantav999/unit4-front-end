import { useState } from 'react'
import './SearchCard.css'

const SearchCard = () => {
    const [searchBar, setSearchBar] = useState('')
    
    // Func changes searchBar value as user types
    const handleSearchBar = (event) => {
        setSearchBar(event.target.value)
    }

    // Func pulls req from api and displays filtered data
    const handleSearchButton = () => {
        // TODO: Add in API fetching with search term
    }
    
    return <>
        <div id="search-card">
            <input type="text" id='search-bar' 
                placeholder='Search instruments'
                value={searchBar}
                onChange={handleSearchBar} />
            <input type="button" id='search-button'
                value="Search" onClick={handleSearchButton} />
        </div>
    </>
}

export default SearchCard
