import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'
import { Footer } from '../../Components/Footer/Footer'
import { ReactComponent as NoOrdersIcon } from '../../icons/no-orders.svg'
import styled from 'styled-components'



const StyledOrderPanelWrapper = styled.section`

  .orderPanel-inner{
    margin:0 0 0 20px;
  }
  .no-orders{
    display:flex;
    background-color: var(--gray);
    padding:10px 12px;
    align-items:center;
    margin:40px 0 0 0;
    svg{
      margin:0 10px 0 0;
    }
  }
`
export const OrderPanel = () => {


  return (
    <StyledOrderPanelWrapper>
    <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>

      <FlexContainer>
        <AsidePanel/> 
        <div className='orderPanel-inner'>
            <AsideTitle>Заказы</AsideTitle>
            <p className='no-orders'>
              <NoOrdersIcon/>
              Вы пока не совершали заказов :(
            </p>
        </div>
     
      
      </FlexContainer>

    
      </MainContainer>
      <Footer/>  
    </StyledOrderPanelWrapper>
  )
}


