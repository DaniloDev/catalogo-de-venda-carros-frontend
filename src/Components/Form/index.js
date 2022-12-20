import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FormContainer, InputArea, Input, Label, Button } from './styles'
import { api } from '../../Services/api'
import UserServices from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { currencyMask } from '../../Utils/mask' 

const user = new UserServices()


const Form = ({ getVeiculos, onEdit, setOnEdit }) => {
  const [name, setName] = useState('')
  const [state, setState] = useState({ price: ''})

  const ref = useRef();

  const veiculo = ref.current;

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setState({...state, [e.target.name]: e.target.value})
  console.log(state.price)
  }
  
  useEffect(() => {
    const dadosStorage = localStorage.getItem('catvendascarros')

    if(dadosStorage){
      const nameUser = JSON.parse(dadosStorage)
      setName(nameUser.name)
    }
    if (onEdit) {
     

      veiculo.name.value = onEdit.name;
      veiculo.price.value = onEdit.price;
      veiculo.previousprice.value = onEdit.previousprice;
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
      !veiculo.previousprice.value ||
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
            price: veiculo.price.value.replace(/,/g, "").replace(/\./g, ""),
            previousprice: veiculo.previousprice.value.replace(/,/g, "").replace(/\./g, ""),
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
            price: veiculo.price.value.replace(/,/g, "").replace(/\./g, ""),
            previousprice: veiculo.previousprice.value.replace(/,/g, "").replace(/\./g, ""),
            brand: veiculo.brand.value,
            model: veiculo.model.value,
            photo: veiculo.photo.value
          })
          .then(data=> {
            toast.success(data)
            window.location.reload()
          })
          .catch(({ data }) => toast.error(data));
      }
    }

    veiculo.name.value = '';
    veiculo.price.value = '';
    veiculo.previousprice.value = ''
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
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" type="text"/>
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="price" type="text" onChange={(e)=> handleChange(currencyMask(e))} />
      </InputArea>
      <InputArea>
        <Label>Preço Anterior</Label>
        <Input name="previousprice" type="text" onChange={(e)=> handleChange(currencyMask(e))} />
      </InputArea>
      <InputArea>
        <Label>Marca</Label>
        <Input name="brand" type="text" />
      </InputArea>
      <InputArea>
        <Label>Modelo</Label>
        <Input name="model" type="number" />
      </InputArea>

      <InputArea>
        <Label>URL FOTO</Label>
        <Input name="photo" type="text" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
