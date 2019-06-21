
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBox extends Component {

    render() {
        return (
            <div className="searchBox">
                <SearchTitle /> 
                <div className="searchBox__conditions">
                    <SearchGenre />
                    <SearchSortTarget />
                </div>
            </div>
        )
    }
}

function SearchTitle() {
    return (
        <div className="searchBox__condition searchTitle">
            <input type="text" placeholder="Searching..."></input>
        </div>
    )
}

function SearchGenre() {
    return (
        <div className="searchBox__condition searchGenre">
            <span className="searchBox__condition-title">
                Genres :
            </span>
            <select className="searchBox__condition-list">
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
            </select>
        </div>
    );
}

function SearchSortTarget() {
    return (
        <div className="searchBox__condition searchSortTarget">
            <span className="searchBox__condition-title">
                Sort :
            </span>
            <select className="searchBox__condition-list">
                <option value="rating">Rating</option>
                <option value="likes">Likes</option>
            </select>
        </div>
    )
}

export default SearchBox;
