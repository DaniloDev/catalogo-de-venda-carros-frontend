import Styles, { Container, Title, Search } from "./styles";
import Form from "../../Components/Form";
import Grid from "../../Components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useVeiculos from "../../hooks/useVeiculos";
import usePagination from "../../hooks/usePagination";
import Header from "./header";


function AdmVeiculos() {
  const { veiculos, getVeiculos, setVeiculos, totalVeiculos, auxVeiculos } = useVeiculos(8)
  const { actualPage, setActualPage} = usePagination()
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    getVeiculos(actualPage);
  }, [actualPage]);


  const removeAccent = (str) => {
    str = String(str)
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }

  const searchVeiculos = (str) => {
    console.log(str)
    const arrVeiculos = auxVeiculos
    str =  removeAccent(str).toUpperCase()
    setVeiculos(arrVeiculos.filter((s) => 
      (removeAccent(s.name).toUpperCase().includes(str))
      || s.price.toUpperCase().includes(str) 
      || s.brand.toUpperCase().includes(str) 
      || s.model.toUpperCase().includes(str) 
    ))
  }

  return (
    <>
    <Header searchVeiculos={searchVeiculos}/>
      <Container>
        <Title>VEICULOS</Title>
        <div style={{ marginBottom: 20}}></div>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getVeiculos={getVeiculos} />
        <Grid 
         setOnEdit={setOnEdit} 
         veiculos={veiculos} 
         setVeiculos={setVeiculos} 
         totalVeiculos={totalVeiculos} 
         setActualPage={setActualPage}
         actualPage={actualPage}
         />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Styles />
    </>
  );
}

export default AdmVeiculos;
