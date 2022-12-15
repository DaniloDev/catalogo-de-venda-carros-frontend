import React from "react";

function Card(params) {
    return (
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            <img style={{ width: 250, height: 250}} src={params.photo}/>
          </span>
          <span>{params.name} {params.brand}</span> 
          <span>{params.model}</span>
        </dt>
        <dd>
          {params.price}
        </dd>
      </div>
    );
}

export default Card;