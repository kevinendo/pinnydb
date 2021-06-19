
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
    <div className="mw-content-ltr">
      <h3>{pageTitle}</h3>
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
      </div>
);
}
export default PinsListSubset;