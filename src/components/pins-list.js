import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const PinsList = props => {
  const [pins, setPins] = useState([]);
  const [searchName, setSearchName ] = useState("");
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

if (parseInt(page) == 1)  {
  prevPage = "/?page=13";
  nextPage = "/?page=" + (parseInt(page)+1);
} else if (parseInt(page) == 13) {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=1";
} else {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=" + (parseInt(page)+1);
}




  useEffect(() => {
    retrievePins();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const handleKeypress = e => {
  if (e.keyCode === 13) {
    findByName();
  }
};

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

  const refreshList = () => {
    retrievePins();
  };

  const find = (query, by) => {
    PinDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setPins(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = e => {
    e.preventDefault();
    find("pin_name", searchName)
  };



  return(
    <div class="mw-content-ltr">
            <form class="search-box">
              <input id="myInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeHolder="Search by Name" value={searchName} onChange={onChangeSearchName} onKeyPress={handleKeypress}/>
              <button id ="myBtn" class="btn btn-outline-success" type="submit" onClick={findByName}>Search</button>
          </form>
      <ul class="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link to={"/pinDetail/"+pin.pin_id.$numberInt}>
                    <div class="thumb"><img width="100" src={"https://pinnydb.netlify.app/images/" + pin.category.replace(/ /g, '') + "/" + pin.main_img}/></div>
                  
                    <div class="pinname">{pin.pin_name}</div>
                    <div class="pinset">{pin.set}</div></Link>
                </div>
           </li>
          ))
      }
      </ul>
      <div class="center">
      <div class="pagination">
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