import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Table, Thead, Tbody, Tr, Th, Td , Head} from './styles'
import { api } from '../../Services/api'
import formatarPreco from '../../Utils/formatarPreco'

const Grid = ({ veiculos, setVeiculos, setOnEdit, totalVeiculos, setActualPage, actualPage }) => {

  const handleEdit = (item) => {
    setOnEdit(item)
  };

  const handleDelete = async ({ _id, name}) => {

    let result = window.confirm("Deseja realmente excluir o veículo " +  name)

    if(result){

    await api
      .delete("/admVeiculos/" + _id)
      .then(({ data }) => {
        const newArray = veiculos.filter((veiculo) => veiculo._id !== _id);

        setVeiculos([]);
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
    <>
    <Table>
      <Thead>
        <Tr>
          <Th style={{ paddingLeft: 5 }}> Nome</Th>
          <Th>Preço</Th>
          <Th>Preço Anterior</Th>
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
            <Td style={{ paddingLeft: 5 }} width="20%">R${formatarPreco(item.price)}</Td>
            <Td style={{ paddingLeft: 5 }} width="20%">R${formatarPreco(item.previousprice)}</Td>
            <Td style={{ paddingLeft: 5 }} width="10%">{item.brand}</Td>
            <Td style={{ paddingLeft: 5 }} width="10%">{item.model}</Td>
            <Td style={{ paddingLeft: 5 }} width="5%"> <img src={item.photo} style={{ width: 50, height: 50}}/></Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

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
    </>
  );
};

export default Grid;
