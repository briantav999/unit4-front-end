import { useState } from 'react';
import './SearchCard.css';

const SearchCard = ({ onSearch }) => {
    const [searchBar, setSearchBar] = useState('');

    // Func changes searchBar value as user types
    const handleSearchBar = (event) => {
        const value = event.target.value;
        setSearchBar(value);
        onSearch(value); // Pass search value to parent component
    };

    return (
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
