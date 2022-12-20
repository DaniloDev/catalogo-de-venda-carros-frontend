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

  usuarioAutenticado () {
    return localStorage.getItem("catvendascarros") != undefined ? true : false
    // return typeof localStorage.getItem("catvendascarros")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("catvendascarros")
  }
}