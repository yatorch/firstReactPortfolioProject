import React, { useState } from 'react';
import SearchBar from '../stateless/SearchBar';
import SearchResults from '../stateless/SearchResults';
import TrackList from '../stateless/TrackList';
import styles from "./pageContainer.module.css";

// Main stateful component, controlling everything outside of header and footer

export default function PageContainer(props) {

// defining state functions

const [searchBarText, setSearchBarText] = useState('');

const handleSearchBarChange = ({target}) => {
    setSearchBarText(target.value);
}

return (
    <div className={styles.pageMainContainer}>
        <SearchBar handleChange={handleSearchBarChange} searchBarText={searchBarText} className={styles.searchBar} id="searchbar"/>
        <div className={styles.pageSubContainer}>
            <SearchResults className={styles.searchResults} />
            <TrackList className={styles.trackList}/>
        </div>

    </div>
);

}