const formatarPreco = preco => {
   /* preco = Number(preco)
    let retorno = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return retorno;
 */
  preco = preco.replace(/\D/g, "")
  preco = preco.replace(/(\d)(\d{2})$/, "$1,$2")
  preco = preco.replace(/(?=(\d{3})+(\D))\B/g, ".")

  return preco
}
  export default formatarPreco

