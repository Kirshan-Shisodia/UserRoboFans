import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input type="search" placeholder="Search Robots" onChange={searchChange}
            className= "pa2 ma1 ba b-green bg-light-blue"/>
        </div>
    );
}

export default SearchBox;


