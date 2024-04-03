import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import styled from 'styled-components'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { AsidePanel } from '../Components/Aside-panel/AsidePanel'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'


const StyledWrapperUserPage = styled.section`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .user-description{
    font-family: 'Montserrat', sans-serif;
    margin:20px 0 0 20px;
    line-height:23px;
  }
`

export const UserPage = () => {
  return (
    <StyledWrapperUserPage>
      <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>
        <FlexContainer>
          <AsidePanel/> 
          <p className='user-description'>
          Добро пожаловать, User <br />
          Из главной страницы аккаунта вы можете посмотреть ваши недавние заказы, настроить платежный адрес и адрес доставки, а также изменить пароль и основную информацию
          </p>
        </FlexContainer>
      </MainContainer>
      <Footer/>
    </StyledWrapperUserPage>
  )
}


