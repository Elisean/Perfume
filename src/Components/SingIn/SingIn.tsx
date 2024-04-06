import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useForm } from '../../Hooks/useForm';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Utils/routes';
import { useAuthContext } from '../../App/App';
import styled from 'styled-components'
import checked from '../../icons/checked.svg';


const StyledSingInUser = styled.section`

    width:100%;
    max-width:520px;

    .user-form{
      display:flex;
      flex-direction:column;
    }

    .input-wrapper{
        display:flex;
        flex-direction:column;
        margin:20px 0 0 0;  
    }
    .user-title{
      margin:0 0 20px 0;
      font-size:24px;
    }
    .input-remember{
      display: flex;
      align-items: center;
      margin:10px 0;
    }
    .input-check{
        width: 24px;
        height: 24px;
        border: 1px solid var(--border);
        border-radius:5px;
        margin:10px 10px 10px 0;
    }
    .input-check:checked{
        background-image: url(${checked});   
    }
    .main-input{
        @media (max-width:1150px) {
            min-width:95%;
        } 
    }

`


export const SingIn:React.FC = observer(() => {
    const navigate = useNavigate()

    const [authUser, setAuthUser] = useState<any>([])
 
    const authContext = useContext(useAuthContext)
   

  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    email: "",
    password: "",
  });

  useEffect(()=>{
    fetch('https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Users')
    .then((res) => res.json())
    .then((data) => setAuthUser(data))
  }, [])

  const SingIn = () =>{
    for(let key of authUser){
      if(formData.email === key.userMail && formData.password === key.userPassword){
        localStorage.setItem("userAuth", JSON.stringify(authContext.useAuth = true)) 
        authContext.setUseAuth(true)
        navigate(ROUTES.USERPAGE)
      }
    }
  }
  
  return (
    <StyledSingInUser>
  
        <h2 className='user-title'>Вход</h2>
        <form action="#" className='user-form'>
        <label htmlFor="singIn-user-email" className='input-wrapper'>
            Email *
        <Input 
            className='main-input' 
            type='email' 
            id='singIn-user-email' 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder='Email адрес'
            required
            />
        </label>
        <label htmlFor="singIn-user-password" className='input-wrapper'>
            Пароль *
        <Input 
            className='main-input' 
            type='password' 
            id='singIn-user-password'
            name='password' 
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder='Пароль'
            required
            />

        </label>

        <label className='input-remember' htmlFor="user-remember">
            <Input className='input-check' id='user-remember' type='checkbox' value={'Запомнить меня'} />
            Запомнить меня
        </label>
        <Button type='button' padding='12px 91px' onClick={()=> SingIn()}>Войти</Button>
    </form>
    
    </StyledSingInUser>
  )
})


