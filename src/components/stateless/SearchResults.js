import React from 'react';
import TrackList from './TrackList';
import styles from './styles/SearchResults.module.css';

// Stateless component, containing the search results

export default function SearchResults(props) {
    return (

            <div className={styles.searchResultsBox}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.cardHeaderText}>Results</h2>
                </div>
            </div>
            
    );
}