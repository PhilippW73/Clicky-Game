import React from "react";
import "./PictureCard.css";

const PictureCard = props => {

	const clicked = () => {
		props.increaseScore(props.id);
	}

	return (
	  <div className="card">
	    <div className="img-container">
	      <img alt={props.name} src={props.image} onClick={clicked}/>
	    </div>
	  </div>
	);
}

export default PictureCard;