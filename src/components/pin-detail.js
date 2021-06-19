import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom"
import PinSet from "../components/pin-set";

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
    tags: "",
    type: "",
    set: false,
    price: "",
    tier: 0,
    notes: "",
    url: false,
    artist: false,
    images: ""
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
{/*
const retrievePins = set => {
  PinDataService.getSet(set)
    .then(response => {
      setPins(response.data);        
    })
    .catch(e => {
      console.log(e);
    });
}; 
*/}
useEffect(() => {
  getPin(props.match.params.pin_id);
}, [props.match.params.pin_id]);
{/*
retrievePins(pinInfo.set);
*/}
const pinTags = pinInfo.tags.split(", ");
let pinImages = ""
if(pinInfo.images !== undefined)  {
  pinImages = pinInfo.images.split(", ");
} 

  return (
    <div>
      {pinInfo ? (
        <div>
  <div className="detail-box">
  <h3>{pinInfo.pin_name}</h3>
    <div className="row">
      <div className="column left">
        <img alt={pinInfo.pin_name} width="140" src={"/images/" + pinInfo.category.replace(/ /g, '') + "/" + pinInfo.main_img}/>
      </div>
      <div className="column right">
        <div><b>Category:</b> <Link to={"/category/"+pinInfo.category}>{pinInfo.category}</Link></div>    
        <div> <b>Release Date:</b> {pinInfo.date}</div>
        <div><b>Company:</b> <Link to={"/company/"+pinInfo.company}>{pinInfo.company}</Link></div>
        <div><b>Type:</b> <Link to={"/type/"+pinInfo.type}>{pinInfo.type}</Link></div>
        { pinInfo.property ? <div><b>Property:</b> <Link to={"/property/"+pinInfo.property}>{pinInfo.property}</Link></div> : <div></div> }
        { pinInfo.artist ? <div><b>Artist:</b> {pinInfo.artist}</div> : <div></div> }
      </div>
    </div>
    <br/>
    <p>{pinInfo.notes}</p>
    { pinInfo.url ? <div><a href={pinInfo.url} target="_blank" rel="noreferrer">More Info</a><br/></div> : <div></div> }
    { (pinInfo.tags !== "") ? (
    <ul className="tag-list">
      {
        pinTags.map(tag => (
          <div>
            <li key={"tag" + tag} className="tag-list-item"><Link to={"/tags/"+tag}>{tag.toUpperCase()}</Link></li>
          </div>
        ))
      }
    </ul>
    ) : (
      <div></div>
    )
}

{ (pinImages !== "") ? (
    <ul className="gallery mw-gallery-traditional">
      {
        pinImages.map(pinImage => (
            <li key={pinImage} className="gallerybox"><Link to={"/images/" + pinInfo.category.replace(/ /g, '') + "/" + pinImage} target="_blank"><img alt={pinImage} width="200" src={"/images/" + pinInfo.category.replace(/ /g, '') + "/" + pinImage}/></Link></li>         
        ))
      }
    </ul>
    ) : (
      <div></div>
    )
}
    </div>

  { pinInfo.set  ? (    
    <PinSet setName={pinInfo.set}/>
   ) : (<div></div>) }
</div>
      ) : (
        <div>No Pin</div>
      )}    

    </div>
  );
}

export default PinDetail;

