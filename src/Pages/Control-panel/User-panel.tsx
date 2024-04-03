import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'
import styled from 'styled-components'
import { useForm } from '../../Hooks/useForm'
import { Input } from '../../Components/Input/Input'
import { MainForm } from '../../Components/Main-Form/Main-Form'
import { Button } from '../../Components/Button/Button'


const StyledUserPanelWrapper = styled.section`
    .user-panel-inner{
      margin:0 0 0 20px;
    }
    .user-surName{
        margin:0 0 0 20px;
    } 
    .user-input{
        width:359px;
    }
    .change-password-title{
      margin:20px 0;
    }
   
    .form-input{
      margin:0 0 5px 0;
    }


`

export const UserPanel:React.FC = () => {


// формирование полей для валидации
  const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
    name:"",
    surName:"",
    email: "",
    phone: "",
    number:"",
    changePassword:"",
    newPassword:"",
    confirmPassword:"",
});
// формирование полей для валидации


  return (
    <StyledUserPanelWrapper>
    <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>

      <FlexContainer>
        <AsidePanel/> 
        <div className='user-panel-inner'>
            <AsideTitle>Детали профиля</AsideTitle>
            <MainForm>
            <FlexContainer>
                <label htmlFor="user-name" className='user-name user-input'>
                  Имя *
                  <Input type='text' id='user-name' className="form-input" name='name' onChange={handleChange} value={formData.name} error={errors.name} autocomplete={'off'}/>
                </label>

                <label htmlFor="user-surName" className='user-surName user-input'>
                  Фамилия *
                  <Input type='text' id='user-surName' className="form-input" name='surName' onChange={handleChange} value={formData.surName} error={errors.surName} autocomplete={'off'} />
                </label>
            </FlexContainer>

            <label htmlFor="email" className='user-input'>
              Email *
                <Input type='email' id='email' className="form-input" name='email' autocomplete={'off'} onChange={handleChange} value={formData.email} error={errors.email}/>
            </label>  

            <p className='change-password-title'>Смена пароля</p>
            <label htmlFor="current-password" className='user-input'>
            Действующий пароль (не заполняйте, чтобы оставить прежний)
                <Input type='number' id='current-password' className="form-input" name='changePassword' autocomplete={'off'} onChange={handleChange} value={formData.changePassword} error={errors.email}/>
            </label>  

            <label htmlFor="new-password" className='user-input'>
            Новый пароль (не заполняйте, чтобы оставить прежний)
                <Input type='password' id='new-password' className="form-input" name='newPassword' autocomplete={'off'} onChange={handleChange} value={formData.newPassword} error={errors.email}/>
            </label> 

            <label htmlFor="confirm-password" className='user-input'>
            Подтвердите новый пароль
                <Input type='password' id='confirm-password' className="form-input" name='confirmPassword' autocomplete={'off'} onChange={handleChange} value={formData.confirmPassword} error={errors.email}/>
            </label> 
            <Button padding='12px 0' top='10px'>Сохранить изменения</Button>
            </MainForm>
            
        </div>
      </FlexContainer>

      </MainContainer>
      <Footer/>  
    </StyledUserPanelWrapper>
  )
}


