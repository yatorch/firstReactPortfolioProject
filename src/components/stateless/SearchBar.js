import React from 'react';

// Search bar is connected to the page container, will obtain API results. On submit, requires default behavior.

export default function SearchBar(props) {
    return (
        <div>
            <form action="" method="POST">
                <input type="text" id="searchBar" placeholder="What are you jammming to today?" onChange={props.handleChange}
                value={props.searchBarText}/>
            </form>
        </div>
    );
}