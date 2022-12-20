import React, { useEffect } from "react";
import UserServices from "../../Services/UserService";
import { useNavigate} from 'react-router-dom'

const user =  new UserServices()


const Logout = () => {

    const navigate = useNavigate()

    useEffect(()=> {
       user.logout()
       navigate('/login')
    })

}
export default Logout