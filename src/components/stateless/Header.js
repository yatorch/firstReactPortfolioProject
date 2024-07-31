import React from 'react';
import styles from './styles/header.module.css';

// Presentational, stateless component

export default function Header(props) {
    return (
        <nav className={styles.navElement}>
            <div className={styles.navbarContainer}>

                <div className={styles.navbarLogoContainer}>
                    <h1 className={styles.navbarLogoContainerText}>Ja<span className={styles.mmm}>mmm</span>ing</h1>
                </div>

                <div className={styles.navbarLoginButtonContainer}>
                    <button type="button" className={styles.spotifyLoginButton}>Login to Spotify</button>
                </div>
            </div>
        </nav>
    );
}