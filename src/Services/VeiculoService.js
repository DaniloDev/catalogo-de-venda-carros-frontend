import axios from 'axios';

export default class VeiculoServices {
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN
    })
  }
  
    async getVeiculos () {
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

        // GET
        this.axios.get(
        `http://localhost:4000/veiculos`, {  
        headers: headers,
        })
        .then((response)=> {
          return response
        })

    }
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
  
/*POST
   this.axios.post(
    'http://localhost:4000/veiculos', body, {  
    headers: headers,
  })
  .then((response)=> {
  console.log("CONSOLE ", response)
})
*/

