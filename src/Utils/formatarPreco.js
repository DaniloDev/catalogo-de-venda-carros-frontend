const formatarPreco = preco => {
    preco = Number(preco)
    let retorno = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return retorno;
  }
  export default formatarPreco