
import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'

const PinsListSubset = props => {
  const [pins, setPins] = useState([]);

  const getPin = (by, query) => {
    PinDataService.find(by, query)
      .then(response => {
        setPins(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  useEffect(() => {
    getPin(props.match.params.by, props.match.params.query);
  }, [props.match.params.by, props.match.params.query]);

  const pageTitle = props.match.params.query;

  return(
    <div class="mw-content-ltr">
      <h3>{pageTitle}</h3>
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
      </div>
);
}
export default PinsListSubset;