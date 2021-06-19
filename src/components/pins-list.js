import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const PinsList = props => {
  const [pins, setPins] = useState([]);
let page = 0;
const { search } = useLocation();
const values = queryString.parse(search);
if (values.page != null) {
  page = values.page;
} else {
  page = 1;
}

let prevPage = "";
let nextPage = "";

if (parseInt(page) === 1)  {
  prevPage = "/?page=13";
  nextPage = "/?page=" + (parseInt(page)+1);
} else if (parseInt(page) === 13) {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=1";
} else {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=" + (parseInt(page)+1);
}

  useEffect(() => {
    retrievePins();
  }, []);

  const retrievePins = () => {
    PinDataService.getAll(page)
      .then(response => {
        console.log(response.data);
        setPins(response.data);        
      })
      .catch(e => {
        console.log(e);
      });
  };

  return(
    <div className="mw-content-ltr">
      {/*
            <form className="search-box">
              <input id="myInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeHolder="Search by Name" value={searchName} onChange={onChangeSearchName} onKeyPress={handleKeypress}/>
              <button id ="myBtn" className="btn btn-outline-success" type="submit" onClick={findByName}>Search</button>
          </form>
      */}
      <ul className="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li key={pin.pin_name} className="gallerybox">
                <div className="pinbox">
                  <Link to={"/pinDetail/"+pin.pin_id}>
                    
                    <div className="thumb"><img alt={pin.pin_name} width="100" src={"/images/" + pin.category.replace(/ /g, '') + "/" + pin.main_img}/></div>
          
                    <div className="pinname">{pin.pin_name}</div>
                    <div className="pinset">{pin.set}</div></Link>
                </div>
           </li>
          ))
      }
      </ul>
      <div className="center">
      <div className="pagination">
        <a href={prevPage}>&lt;</a>
        <a href="/?page=1">1</a>
        <a href="/?page=2">2</a>
        <a href="/?page=3">3</a>
        <a href="/?page=4">4</a>
        <a href="/?page=5">5</a>
        <a href="/?page=6">6</a>
        <a href="/?page=7">7</a>
        <a href="/?page=8">8</a>
        <a href="/?page=9">9</a>
        <a href="/?page=10">10</a>
        <a href="/?page=11">11</a>
        <a href="/?page=12">12</a>
        <a href="/?page=13">13</a>
        <a href={nextPage}>&gt;</a>
        </div>
        </div>
      </div>
);
}
export default PinsList;