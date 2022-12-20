import React, {useEffect, useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    if(localStorage.getItem('catvendascarros')){
      navigate('/admveiculos')
    }else{
      navigate('/login')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await userService.login(form)
      console.log('response do Login', response)
      if (response === true) {
        navigate('/admveiculos')
      }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Login' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <Container>
      <Form>
      <a class="navbar-brand js-scroll-trigger" href="/login">
                <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" height="70" /></a>
        <h34 style={{ color: 'black', fontWight: 'bold', fontSize: 28}}>Acesso Restrito</h34>
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Entrar!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
      </Form>
    </Container>
    
  )
}

export default Login;