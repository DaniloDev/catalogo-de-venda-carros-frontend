import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Table, Thead, Tbody, Tr, Th, Td } from './styles'
import { api } from '../../Services/api'

const Grid = ({ veiculos, setVeiculos, setOnEdit }) => {
  const handleEdit = (item) => {
    console.log(item)
    setOnEdit(item);
  };

  const handleDelete = async (id, name) => {
    let result = confirm("Deseja realmente excluir " + name )
    if(result){
    await api
      .delete("/admVeiculos/" + id)
      .then(({ data }) => {
        const newArray = veiculos.filter((veiculo) => veiculo._id !== id);

        setVeiculos(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
    }else{
      return
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th style={{ paddingLeft: 5 }}> Nome</Th>
          <Th>Preço</Th>
          <Th>Marca</Th>
          <Th>Modelo</Th>
          <Th>Foto</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {veiculos.map((item, i) => (
          <Tr key={i}>
            <Td style={{ paddingLeft: 5 }} width="20%">{item.name}</Td>
            <Td style={{ paddingLeft: 5 }} width="20%">{item.price}</Td>
            <Td style={{ paddingLeft: 5 }} width="20%">{item.brand}</Td>
            <Td style={{ paddingLeft: 5 }} width="20%">{item.model}</Td>
            <Td style={{ paddingLeft: 5 }} width="5%"> <img src={item.photo} style={{ width: 50, height: 50}}/></Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item._id, item.name)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table> 
  );
};

export default Grid;
