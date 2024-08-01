import React, { useState } from 'react';
import SearchBar from '../stateless/SearchBar';
import SearchResults from '../stateless/SearchResults';
import TrackList from '../stateless/TrackList';
import styles from "./pageContainer.module.css";

// Main stateful component, controlling everything outside of header and footer

export default function PageContainer(props) {

// defining state functions

const [searchBarText, setSearchBarText] = useState('');
const [playlistName, setPlaylistName] = useState('');

// defining handler functions for text input fields

const handleSearchBarChange = ({target}) => {
    setSearchBarText(target.value);
}

const handlePlaylistNameChange = ({target}) => {
    setPlaylistName(target.value);
}

// defining handler functions for 



return (
    <div className={styles.pageMainContainer}>
        <SearchBar handleChange={handleSearchBarChange} searchBarText={searchBarText} className={styles.searchBar} id="searchbar"/>
        <div className={styles.pageSubContainer}>
            <SearchResults className={styles.searchResults} />
            <TrackList className={styles.trackList} playlistName={playlistName} handlePlaylistNameChange={handlePlaylistNameChange}/>
        </div>

    </div>
);

}