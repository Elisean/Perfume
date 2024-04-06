import React from 'react'
import styled from 'styled-components'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { SingIn } from '../Components/SingIn/SingIn'
import { SingUp } from '../Components/SingUp/SingUp'

const StyledUserPageWrapper = styled.section`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  font-family: 'Montserrat', sans-serif;

  @media (max-width:768px) {
        margin:100px 0 0 0;
  }
 
`

export const RegistationPage = () => {
  return (
    <StyledUserPageWrapper>
        <Header/>
          <MainContainer>

          <AsideTitle margin='0 0 50px 0'> Мой аккаунт </AsideTitle>
          <Breadcrumbs />
      
            <FlexContainer registrationresponse={'true'} justify='space-between'>
            <SingIn/>
            <SingUp/>
           </FlexContainer>

          </MainContainer>

        <Footer/>
    </StyledUserPageWrapper>
  )
}
