import React from 'react';
import styles from './styles/TrackList.module.css';
import Track from './Track';
// Stateless component, containing the tracklist to be added to user's Spotify

export default function TrackList(props) {
    return (
        <div className={styles.trackListBox}>
            <div className={styles.cardHeader}>
                <form action="" method="POST">
                    <input type="text" id="userPlaylistName" placeholder='Playlist name' className={styles.inputBox}
                    value={props.playlistName} onChange={props.handlePlaylistNameChange}/>
                </form>
            </div>

            <div className={styles.cardFooter}>
                <button form="userPlayListName" type="button" className={styles.addToSpotifyButton}>Add to Spotify</button>
            </div>
        </div>
    );
}