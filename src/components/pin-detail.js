import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom"

const PinDetail = props => {
  const initialPinState = {
    _id: null,
    pin_id: 0,
    Img: "",
    pin_name: "",
    main_img: "",
    alt_name: "",
    category: "",
    date: "",
    year: "",
    company: "",
    property: false,
    tags: false,
    type: "",
    set: "",
    price: "",
    tier: 0,
    notes: "",
    url: false,
    artist: false
  };

const [pinInfo, setPin] = useState(initialPinState);

const getPin = pin_id => {
  PinDataService.get(pin_id)
    .then(response => {
      setPin(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

useEffect(() => {
  getPin(props.match.params.pin_id);
}, [props.match.params.pin_id]);

  return (
    <div>
      {pinInfo ? (
        <div>
  <div>
  <h2>{pinInfo.pin_name}</h2>
  <img width="140" src={"https://pinnydb.netlify.app/images/" + pinInfo.category.replace(/ /g, '') + "/" + pinInfo.main_img}/>
    <div>Release Date: {pinInfo.date}</div>
    <div>Company: {pinInfo.company}</div>
    { pinInfo.property ? <div>Property: {pinInfo.property}</div> : <div></div> }
    { pinInfo.artist ? <div>Artist: {pinInfo.artist}</div> : <div></div> }

    <p>{pinInfo.notes}</p>
    { pinInfo.url ? <div>More Info: <a href={pinInfo.url} target="_blank">{pinInfo.url}</a></div> : <div></div> }
<hr/>
    { pinInfo.tags ? <div>{pinInfo.tags}</div> : <div></div> }
    </div>
</div>
      ) : (
        <div>No Pin</div>
      )}    

    </div>
  );
}

export default PinDetail;
