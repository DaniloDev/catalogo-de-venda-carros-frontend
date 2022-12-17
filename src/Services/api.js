import axios from "axios";


const headers = {
    "Content-type": "application/json; charset=UTF-8",
    'x-acess-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWExMjNmODZlMjIxNzdjMGNlNzBmZiIsInVzZXJuYW1lIjoiZGFuaWxvIiwicm9sZXMiOlsicmVzdHJpdG8iLCJhZG1pbiJdLCJpYXQiOjE2NzEwNDMwODV9.HXc6hyXT9fphZKSjWJ0L4tk53OVbhUcp2v1z2Ml4o_Q`
  }


export const api = axios.create({
	baseURL: "http://localhost:4000",
	
	headers : headers
});
