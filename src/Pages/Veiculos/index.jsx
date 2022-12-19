import React, { useEffect } from "react";
import Footer from "./footer";
import Card from "./Card";
import { useState } from "react";
import { api } from '../../Services/api'
import Header from "./header";

const Veiculos = ()  =>{
  const [veiculos, setVeiculos] = useState([])
  
useEffect(()=> {
  getVeiculos()
},[])


const getVeiculos = async() => {
  // GET
  const response = api.get("/veiculos")

  const sortRespnse = (await response).data.sort((a,b)=>{return a.price - b.price})

  setVeiculos([...veiculos, ...sortRespnse])
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
    <Header/>
    <div>
      <dl className="dictionary">

       {veiculos.map(create)}
       
      </dl>
    </div>
  <Footer/>
    </>
  );
}

export default Veiculos;
