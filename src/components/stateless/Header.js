import React from 'react';

// Presentational, stateless component

export default function Header(props) {
    return (
        <nav>
            <div className="navbar-container">

                <div className="navbar-logo-container">
                    <h1>Jammming</h1>
                </div>

                <div className="navbar-login-button-container">
                    <button type="button">Login to Spotify</button>
                </div>
            </div>
        </nav>
    );
}