import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { FormContainer, InputArea, Input, Label, Button } from './styles'
import { api } from '../../Services/api'

const Form = ({ getVeiculos, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const veiculo = ref.current;

      veiculo.name.value = onEdit.name;
      veiculo.price.value = onEdit.price;
      veiculo.brand.value = onEdit.brand;
      veiculo.model.value = onEdit.model;
      veiculo.photo.value = onEdit.photo;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const veiculo = ref.current;

    if (
      !veiculo.name.value ||
      !veiculo.price.value ||
      !veiculo.brand.value ||
      !veiculo.model.value ||
      !veiculo.photo.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await api
        .put("/admVeiculos/" + onEdit.id, {
          name: veiculo.name.value,
          price: veiculo.price.value,
          brand: veiculo.brand.value,
          model: veiculo.model.value,
          photo: veiculo.photo.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
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

    veiculo.name.value = '';
    veiculo.price.value = '';
    veiculo.brand.value = '';
    veiculo.model.value = '';
    veiculo.photo.value = '';

    setOnEdit(null);
    getVeiculos();
  };

  return (
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
  );
};

export default Form;
