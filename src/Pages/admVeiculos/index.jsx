import Styles, { Container, Title } from "./styles";
import Form from "../../Components/Form";
import Grid from "../../Components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from '../../Services/api'

function AdmVeiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getVeiculos = async() => {
    // GET
    const response = api.get("/veiculos")
    setVeiculos([...veiculos, ...(await response).data])
  }  

  useEffect(() => {
    getVeiculos();
  }, [setVeiculos]);

  return (
    <>
      <Container>
        <Title>VEICULOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getVeiculos={getVeiculos} />
        <Grid setOnEdit={setOnEdit} veiculos={veiculos} setVeiculos={setVeiculos} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Styles />
    </>
  );
}

export default AdmVeiculos;
