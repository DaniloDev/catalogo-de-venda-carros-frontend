import React from "react";

function Card(params) {
    return (
        <div className="term">
        <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
            <img style={{ width: 250, height: 250}} src={params.photo}/>
          </span>
          <p style={{ fontSize: 22, fontWeight: 'bold', color: '#000'}}>{params.name} {params.brand} <span style={{ color: "#000", fontSize: 22}}>{params.model}</span></p> 
       
        <dd style={{ color: "#0562454", fontSize: 22, padding: 10}}>
          <p>R${params.price} <span style={{ fontSize: 14, color: "#ddd"}}><s>180000</s></span></p> 
        </dd>
        </dt>
      </div>
    );
}

export default Card;