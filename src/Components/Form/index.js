import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormContainer, InputArea, Input, Label, Button, ButtonLogout } from './styles'
import { api } from '../../Services/api'
import UserServices from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

const user = new UserServices()


const Form = ({ getVeiculos, onEdit, setOnEdit }) => {
  const [name, setName] = useState('')

  const ref = useRef();

  const veiculo = ref.current;

  const navigate = useNavigate()
  useEffect(() => {
    const dadosStorage = localStorage.getItem('catvendascarros')

    if(dadosStorage){
      const nameUser = JSON.parse(dadosStorage)
      setName(nameUser.name)
    }
    if (onEdit) {
     

      veiculo.name.value = onEdit.name;
      veiculo.price.value = onEdit.price;
      veiculo.brand.value = onEdit.brand;
      veiculo.model.value = onEdit.model;
      veiculo.photo.value = onEdit.photo;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !veiculo.name.value ||
      !veiculo.price.value ||
      !veiculo.brand.value ||
      !veiculo.model.value ||
      !veiculo.photo.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }else{
      if (onEdit) {
        await api
          .put("/admVeiculos/" + onEdit._id, {
            name: veiculo.name.value,
            price: veiculo.price.value,
            brand: veiculo.brand.value,
            model: veiculo.model.value,
            photo: veiculo.photo.value
          })
          .then(data=> {
            toast.success(data)
            window.location.reload()
          })
          .catch(({ data }) => toast.error(data));
      } else if(!onEdit){
        await api
          .post("/admVeiculos", {
            name: veiculo.name.value,
            price: veiculo.price.value,
            brand: veiculo.brand.value,
            model: veiculo.model.value,
            photo: veiculo.photo.value
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
    }

    veiculo.name.value = '';
    veiculo.price.value = '';
    veiculo.brand.value = '';
    veiculo.model.value = '';
    veiculo.photo.value = '';

    setOnEdit(null);
    getVeiculos();
  };

  const handleSair = async (e) => {
    e.preventDefault();
    user.logout()
    navigate('/login')
  }

  return (
    <>
        <FormContainer ref={ref} onSubmit={handleSair}>
        <span>Bem vindo, {name}</span>
        <ButtonLogout type="submit">Sair</ButtonLogout>
   
        </FormContainer>
    
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="price" type="number" />
      </InputArea>
      <InputArea>
        <Label>Marca</Label>
        <Input name="brand" />
      </InputArea>
      <InputArea>
        <Label>Modelo</Label>
        <Input name="model" type="text" />
      </InputArea>

      <InputArea>
        <Label>URL FOTO</Label>
        <Input name="photo" type="text" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
    </>
  );
};

export default Form;
