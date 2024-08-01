import React from 'react';
import styles from './styles/SearchBar.module.css';
// Search bar is connected to the page container, will obtain API results. On submit, requires default behavior.

export default function SearchBar(props) {
    return (
        <div className={styles.searchBarDiv}>
            <form action="" method="POST">
                
                <input type="text" id="searchBar" placeholder="Search for your favorite songs and artists" onChange={props.handleChange}
                value={props.searchBarText} className={styles.searchBar}/>
            </form>
        </div>
    );
}