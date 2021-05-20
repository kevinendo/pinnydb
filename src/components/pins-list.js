
import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'

const PinsList = props => {
  const [pins, setPins] = useState([]);
  const [searchName, setSearchName ] = useState("");

  useEffect(() => {
    retrievePins();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrievePins = () => {
    PinDataService.getAll()
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
        setPins(response.data.pins);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  return(
    <div class="mw-content-ltr">
      <ul class="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link to={"/pinDetail/"+pin.pin_id.$numberInt}>
                    <div class="thumb"><img width="120" src={"https://pinnydb.netlify.app/images/" + pin.category.replace(/ /g, '') + "/" + pin.main_img}/></div>
                  
                    <div class="pinname">{pin.pin_name}</div>
                    <div class="pinset">{pin.set}</div></Link>
                </div>
           </li>
          ))
      }
      </ul>
      </div>
);
}
export default PinsList;