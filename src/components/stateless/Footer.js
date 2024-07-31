import React from 'react';
import styles from './styles/Footer.module.css';
// Presentational, stateless component

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <h4 className={styles.h4}><span className={styles.jammming}>Jammming</span> is a Codecademy portfolio project</h4>
            </div>
        </footer>
    );
}