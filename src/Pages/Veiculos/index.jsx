import React, { useEffect } from "react";
import Footer from "./footer";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";


const Veiculos = ()  =>{
  const [veiculos, setVeiculos] = useState([])
  
useEffect(()=> {
  getVeiculos()
},[])


const getVeiculos = async() => {
  const body = {
      name : "Ford KA",
      price: "50000",
      brand: "Ford",
      model: "2022",
      photo:"https://guiaauto.com.br/wp-content/uploads/2021/08/Ford-ka-3.jpg"
  };

  const headers = {
      "Content-type": "application/json; charset=UTF-8",
      'x-acess-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWExMjNmODZlMjIxNzdjMGNlNzBmZiIsInVzZXJuYW1lIjoiZGFuaWxvIiwicm9sZXMiOlsicmVzdHJpdG8iLCJhZG1pbiJdLCJpYXQiOjE2NzEwNDMwODV9.HXc6hyXT9fphZKSjWJ0L4tk53OVbhUcp2v1z2Ml4o_Q`
  }

  // GET
  const response = axios.get(
  `http://localhost:4000/veiculos`, {  
  headers: headers,
  })


  setVeiculos([...veiculos, ...(await response).data])

}



function create(Object) {
  return (
  
  <Card 
    key={Object.id} 
    photo={Object.photo} 
    name={Object.name} 
    brand={Object.brand}
    model={Object.model}
    price={Object.price}
    />
  
  
  );
}
  return (
    <>
    <div>
      <h1>
        <span>Veiculos</span>
      </h1>

      <dl className="dictionary">

       {veiculos.map(create)}
       
      </dl>
    </div>
    <Footer />
    </>
  );
}

export default Veiculos;
