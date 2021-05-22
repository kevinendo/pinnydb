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
    set: false,
    price: "",
    tier: 0,
    notes: "",
    url: false,
    artist: false
  };

const [pinInfo, setPin] = useState(initialPinState);
const [pinSet, setPins] = useState([]);

const getPin = pin_id => {
  PinDataService.get(pin_id)
    .then(response => {
      setPin(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

const retrievePins = set => {
  PinDataService.getSet(set)
    .then(response => {
      setPins(response.data);        
    })
    .catch(e => {
      console.log(e);
    });
}; 

useEffect(() => {
  getPin(props.match.params.pin_id);
}, [props.match.params.pin_id]);

retrievePins(pinInfo.set);

  return (
    <div>
      {pinInfo ? (
        <div>
  <div class="detail-box">
  <h3>{pinInfo.pin_name}</h3>
<img width="140" src={"https://pinnydb.netlify.app/images/" + pinInfo.category.replace(/ /g, '') + "/" + pinInfo.main_img}/>
    <div><b>Category:</b> <Link to={"/category/"+pinInfo.category}>{pinInfo.category}</Link></div>    
    <div> <b>Release Date:</b> {pinInfo.date}</div>
    <div><b>Company:</b> <Link to={"/company/"+pinInfo.company}>{pinInfo.company}</Link></div>
    <div><b>Type:</b> <Link to={"/type/"+pinInfo.type}>{pinInfo.type}</Link></div>
    { pinInfo.property ? <div><b>Property:</b> <Link to={"/property/"+pinInfo.property}>{pinInfo.property}</Link></div> : <div></div> }
    { pinInfo.artist ? <div><b>Artist:</b> {pinInfo.artist}</div> : <div></div> }
<br/>
    <p>{pinInfo.notes}</p>
    { pinInfo.url ? <div><b>URL:</b> <a href={pinInfo.url} target="_blank">{pinInfo.url}</a></div> : <div></div> }
    </div>
    
  { pinInfo.set ? (
    <div>
  <div class="set-name">{pinInfo.set}</div> 
  <div>
    <ul class="gallery mw-gallery-traditional">
      {
          pinSet.reverse().map(pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link to={"/pinDetail/"+pin.pin_id.$numberInt}>
                    <div class="thumb"><img width="100" src={"https://pinnydb.netlify.app/images/" + pin.category.replace(/ /g, '') + "/" + pin.main_img}/></div>
                    <div class="pinname">{pin.pin_name}</div></Link>
                </div>
           </li>
          ))
      }
      </ul>
  </div> 
  </div>
   ) : (<div></div>) }

</div>
      ) : (
        <div>No Pin</div>
      )}    

    </div>
  );
}

export default PinDetail;

