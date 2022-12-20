import React from "react";
import formatarPreco from "../../Utils/formatarPreco";

function Card(params) {
    return (
        <div className="term">
        <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
            <img style={{ width: 240, height: 140}} src={params.photo}/>
            {/*<img style={{ width: 250, height: 250}} src={params.photo}/>*/}
          </span>
          <p style={{ fontSize: 18, fontWeight: 'bold', color: '#000'}}>{params.name} {params.brand} <span style={{ color: "#000", fontSize:16}}>{params.model}</span></p> 
       
        <dd style={{ color: "#0562454", fontSize: 20, padding: 10, paddingTop: 'auto'}}>
          <p>R${formatarPreco(params.price)} <span style={{ justifyContent: 'flex-end', fontSize: 10, color: "#ddd"}}><s>R${formatarPreco(params.previousprice)}</s></span></p> 
        </dd>
        </dt>
      </div>
    );
}

export default Card;