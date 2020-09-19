import React from 'react';
import './Search.css';

const Search =({value, onSearch}) => (

    <div>

        <label htmlFor="searchInput">Search: </label>
        <input 
            id="searchInput"
            onChange={onSearch} />
    </div>

)

export default Search; 