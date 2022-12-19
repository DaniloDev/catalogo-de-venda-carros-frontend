import { api } from '../Services/api';

export default class UserServices {

  async login (dados) {
    const {data} = await api.post('/auth', dados)

    if (data.success == true) {
      console.log("DATA ", data)
      localStorage.setItem("catvendascarros", JSON.stringify(data))
      return true
    }

    alert("Usuário e/ou senha incorretos!")
    return
  }

  async cadastrar (dados) {
  
  const body = {
    name : "Ford KA",
    price: "50000",
    brand: "Ford",
    model: "2022",
    photo:"https://guiaauto.com.br/wp-content/uploads/2021/08/Ford-ka-3.jpg"
  };

 const headers = {
    "Content-type": "application/json; charset=UTF-8",
    'x-acess-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWExMjNmODZlMjIxNzdjMGNlNzBmZiIsInVzZXJuYW1lIjoiZGFuaWxvIiwicm9sZXMiOlsicmVzdHJpdG8iLCJhZG1pbiJdLCJpYXQiOjE2NzEwNDMwODV9.HXc6hyXT9fphZKSjWJ0L4tk53OVbhUcp2v1z2Ml4o_Q`
  }
/*
  fetch("http://localhost:4000/series", { 

    method: "POST", 
    body: JSON.stringify(body),
    headers:headers})
.then((response) => response.json())
.then((response)=> {
    console.log("CONSOLE ", response)
})*/
  
// POST
   this.axios.post(
    'http://localhost:4000/veiculos', body, {  
    headers: headers,
  })
  .then((response)=> {
  console.log("CONSOLE ", response)
})


//GET
/*this.axios.get(
  `http://localhost:4000/veiculos`, {  
  headers: headers,
})
.then((response)=> {
console.log("CONSOLE ", response)
})*/
  }

  usuarioAutenticado () {
    return localStorage.getItem("catvendascarros") != undefined ? true : false
    // return typeof localStorage.getItem("catvendascarros")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("catvendascarros")
  }
}