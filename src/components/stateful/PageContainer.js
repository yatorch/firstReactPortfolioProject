import React, { useState } from 'react';
import SearchBar from '../stateless/SearchBar';
import ResultsContainer from './ResultsContainer';

// Main stateful component, controlling everything outside of header and footer

export default function PageContainer(props) {

// defining state functions

const [searchBarText, setSearchBarText] = useState('');

const handleSearchBarChange = ({target}) => {
    setSearchBarText(target.value);
}

return (
    <div>
        <SearchBar handleChange={handleSearchBarChange} searchBarText={searchBarText}/>
    </div>
);

}