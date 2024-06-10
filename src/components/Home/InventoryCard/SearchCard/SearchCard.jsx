import { useState } from 'react';
import './SearchCard.css';

const SearchCard = () => {
    const [searchBar, setSearchBar] = useState('')
    const [searchInstrument, setSearchInstrument] = useState([])
    
    // Func changes searchBar value as user types
    const handleSearchBar = (event) => {
        setSearchBar(event.target.value)
    }

    // Func pulls req from api and displays filtered data
    const handleSearchButton = async () => {
        const URL = `http://localhost:5173/instruments/?search=${searchBar}`
        const res = await fetch(URL);
        console.log(URL);
        const returnData = await res.json();
        console.log(returnData);
        setSearchInstrument(returnData);
    }
    
    return <>
        <div id="search-card">
            <input 
                type="text" 
                id="search-bar" 
                placeholder="Search instruments"
                value={searchBar}
                onChange={handleSearchBar} />
            <input type="button" id='search-button'
                value="Search" onClick={handleSearchButton} />
        </div>
    );
}

export default SearchCard;
