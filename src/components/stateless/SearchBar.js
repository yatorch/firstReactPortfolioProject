import React from 'react';
import styles from './styles/SearchBar.module.css';
// Search bar is connected to the page container, will obtain API results. On submit, requires default behavior.

export default function SearchBar(props) {
    return (
        <div className={styles.searchBarDiv}>
            <form action="" method="POST" >
                
                <input type="text" id="searchBar" placeholder={"Search by " + props.searchByType} onChange={props.handleChange}
                value={props.searchBarText} className={styles.searchBar}/>
            </form>
            
            {/*<button className={styles.inputSearchButton}>Search</button>*/}
            
            <button type="button" className={styles.searchByButton} id="bySongButton" value="track" 
            onClick={props.handleSearchByChange}>By track</button>
            <button type="button" className={styles.searchByButton} id="byArtistButton" value="artist"
            onClick={props.handleSearchByChange}>By artist</button>
            <button type="button" className={styles.searchByButton} id="byAlbumButton" value="album"
            onClick={props.handleSearchByChange}>By album</button>

        </div>
    );
}