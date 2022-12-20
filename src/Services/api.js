import axios from "axios";

const dadosStorage = localStorage.getItem('catvendascarros')

    if(dadosStorage){
      var tokenUser = JSON.parse(dadosStorage)
    }

const headers = {
    "Content-type": "application/json; charset=UTF-8",
    'x-acess-token': tokenUser? tokenUser.token : ''
  }


export const api = axios.create({
	baseURL: "http://localhost:4000",
	
	headers : headers
});
