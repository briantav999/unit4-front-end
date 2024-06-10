import { useState } from 'react'
import './SearchCard.css'

const SearchCard = () => {
    const [searchBar, setSearchBar] = useState('')
    
    // Func changes searchBar value as user types
    const handleSearchBar = (event) => {
        setSearchBar(event.target.value)
    }

    return <>
        <div id="search-card">
            <input type="text" id='search-bar' 
                placeholder='Search instruments'
                value={searchBar}
                onChange={handleSearchBar} />
        </div>
    </>
}

export default SearchCard