import React,{ useState } from 'react'
import { Input } from '../Input/Input'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { Button } from '../Button/Button'
import { useForm } from '../../Hooks/useForm'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import axios from 'axios'


const StyledSingUpUser = styled.section`
  @media (max-width:768px) {
      margin:20px 0 0 0;
  }
    width:100%;
    max-width:520px;

    .input-wrapper{
      display:flex;
      flex-direction:column;
      margin:20px 0 0 0;  
    }
    .user-title{
      margin:0 0 20px 0;
      font-size:24px;
    }
    .user-gender{
        margin:20px 0 0 0;
    }
    .option-wrapper{
        display:flex;
        align-items:center;
        margin:20px 20px 0 0;
    }
    .user-option{
        width:24px;
        height:24px;
        border-radius:50%;
        border:1px solid var(--border);
        margin:0 5px 0 0;
        transition:0.2s all;
    }
    .user-option:checked{
        border:8px solid var(--border);
        background-color: var(--black);
        transition: 0.2s all;
    }
    .user-description{
        margin:20px 0 20px 0;
    }

    .main-input{
        
        @media (max-width:1150px) {
            min-width:95%;
        } 
    }
  
    .user-notification{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index: 5;
    }
    .user-notification::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      min-width:100%;
      min-height:100%;
      background-color: #00000040;
    }
    .notification-inner{
      display:flex;
      flex-direction:column;
      align-items:center;
      position:absolute;
      z-index:6;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      background-color:var(--gray);
      padding:62px 40px;
      width:730px;
      height:250px;
    }
    .notification-title{
      font-size:24px;
      font-weight:700;
    }
    .notification-subtitle{
      margin:25px 0;
      font-size:18px;
    }

    @media (max-width:768px) {
      .notification-inner{
        width:500px;
        padding:50px 0;
        text-align:center;
      }
    }
    @media (max-width:540px) {
      .notification-inner{
        width:300px;
        padding:10px 0;
        text-align:center;
        height:240px;
      }
 
      .notification-subtitle{
        margin:25px 0;
        font-size:16px;
      }
    }
`



export const SingUp:React.FC = () => {

  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    email: "",
  });

  const [userData, setUserData] = useState<{[key:string]: any}>({
      userMail:"",
      userPassword:"",
      userID:"",
      userToken:""
  })
  const [isRegestration, setIsRegestration] = useState(false); // оповещение после того как пользователь зарегестрировался
  
  const body = document.body;
  isRegestration ? body.classList.add('overflow') : body.classList.remove('overflow');

  const countPassword = 10;
  const countID = 6;
  const countSymbolsUserToken = 10

  const getUserEmail = (event?:any) =>{

    event.preventDefault();
    // формирование данных для отправки на почту пользователя
    const newEmail = {...userData}
    newEmail.userMail = formData.email;
    newEmail.userPassword = nanoid(countPassword);
    newEmail.userID = nanoid(countID);
    newEmail.userToken = nanoid(countSymbolsUserToken)

    // отправка данных на почту пользоователя
      axios 
      .get('http://localhost:3030/', {
          params: {
            userMail: newEmail.userMail,
            userPassword: newEmail.userPassword
          }
      })
      .then(()=>{
        console.log('success')
      })
      .catch(()=>{
        console.log('fail')
      })
      // проверка на то что пользователь написал свои данные 
      if(newEmail.userMail.length === 0){ 
        setIsRegestration(false)
      }else{
        // отправка данных на бд
        setIsRegestration(true)
        try {
          fetch('https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmail),
          })
        
        } catch (error) {
          console.error('Error', error)
        }
      }
      setUserData(newEmail)
  }


  return (
    <StyledSingUpUser >
    <h2 className='user-title'>Регистрация</h2>
    <form method='POST' action="http://localhost:3030">
      <h3 className='user-advantage'>При регистрации вы получите 100 бонусных баллов</h3>

      <label htmlFor="singUp-user-email" className='input-wrapper'>
        Email *
        <Input className='main-input'
         type='email'
         id="singUp-user-email"
         name='email' 
         required
         value={formData.email}
         onChange={handleChange}
         error={errors.email}
         placeholder='Email адрес'
        /> 
      </label>
   

      <div className='user-gender'>Пол</div>
      <FlexContainer >
      
      <label htmlFor="man" className='option-wrapper'>
        <Input type="radio" id='man' className='user-option' name='gender' value='man' required />
        M
      </label>

      <label htmlFor="women" className='option-wrapper'>
        <Input type="radio" id='women' className='user-option' name='gender' value='woman' required />
        Ж
      </label>

      </FlexContainer>
      <p className='user-description'>Ссылка для установки нового пароля будет отправлена на ваш email</p>
     
     <Button padding='12px 58px' onClick={(event:any)=> getUserEmail(event)}>Регистрация</Button>
    </form>
    {
        isRegestration && <div className='user-notification'>
        <div className='notification-inner'>
          <h1 className="notification-title">Вы успешно зарегистрированы!</h1>
          <h2 className='notification-subtitle'>На ваш Email адрес отправлен пароль для входа в личный кабинет</h2>
          
          <Button padding='12px 20px' onClick={()=> window.location.reload()}>Войдите в аккаунт</Button>
        </div>
      </div>
    }
  </StyledSingUpUser>
  )
}
