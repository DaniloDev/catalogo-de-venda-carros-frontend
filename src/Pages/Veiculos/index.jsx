import React, { useEffect } from "react";
import Footer from "./footer";
import Card from "./Card";
import Header from "./header";
import useVeiculos from "../../hooks/useVeiculos";
import usePagination from "../../hooks/usePagination";
import { Search } from './styles'

const Veiculos = ()  =>{
  //const [veiculos, setVeiculos] = useState([])
  const { veiculosSort, getVeiculos, setVeiculosSort, totalVeiculos, auxVeiculosSort } = useVeiculos(8)
  const { actualPage, setActualPage} = usePagination()

useEffect(()=> {
 // getVeiculos("Veiculo", {}, params)
  getVeiculos(actualPage)
},[actualPage])


const removeAccent = (str) => {
  str = String(str)
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

const searchVeiculos = (str) => {
  console.log(str)
  const arrVeiculosSort = auxVeiculosSort
  str =  removeAccent(str).toUpperCase()
  setVeiculosSort(arrVeiculosSort.filter((s) => 
    (removeAccent(s.name).toUpperCase().includes(str))
    || s.price.toUpperCase().includes(str) 
    || s.brand.toUpperCase().includes(str) 
    || s.model.toUpperCase().includes(str) 
  ))
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
    previousprice={Object.previousprice}
    />
  
  
  );
}
  return (
    <>
    <Header searchVeiculos={searchVeiculos}/>
    <div>
      <dl className="dictionary">

       {veiculosSort.map(create)}
       
      </dl>
      <div style={{ display: 'flex', justifyContent: 'center',  borderColor: 'trasnparent'}}>
      {
        Array(totalVeiculos).fill('').map((_, index) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'blue', borderRadius: 5,  borderColor: 'trasnparent'}}>
              <button style={{ color: index ===  actualPage - 1 ? 'white': 'black', width: 30,  borderColor: 'trasnparent', borderRadius: 5, backgroundColor: index ===  actualPage - 1 ? 'blue': 'white'}} key={index} onClick={() =>{ 
                
                setActualPage(index + 1) 

                setTimeout(() => {
                  window.location.reload()
                }, 2);
              }}
              disabled = {index ===  actualPage - 1}
              >

              { index + 1 }

            </button>
          </div>
          )
        })
      }
      </div>
    </div>
  <Footer/>
    </>
  );
}

export default Veiculos;