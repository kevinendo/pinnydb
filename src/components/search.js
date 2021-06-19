import React from "react";

function Search() {
    
    const findByName = e => {
        e.preventDefault();
        window.location.replace("/pin_name/" + document.getElementById('myInput').value);
    };

    return (

<div className="sb-example-1">
            <div>
            <form className="search" id="myForm">
              <input id="myInput" className="searchTerm" type="text" placeholder="Search"/>
              <button id ="myBtn" className="searchButton" type="submit" onClick={findByName}><i className="fa fa-search"></i></button>
            </form>
            </div>
        </div>

);
}

export default Search;