import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card" style={props.backgroundImage}>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
