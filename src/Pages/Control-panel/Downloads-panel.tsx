import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'

import { ReactComponent as NoDownloadsIcon } from '../../icons/no-orders.svg'
import styled from 'styled-components'

const StyledDownLoadsPanelWrapper = styled.section`

 .downloadsPanel-inner{
    margin:0 0 0 20px;
  }
  .no-downloads{
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


export const DownloadsPanel:React.FC = () => {
  return (
    <StyledDownLoadsPanelWrapper>
      <Header/>
        <MainContainer>
          <AsideTitle>Мой аккаунт</AsideTitle>  
          <Breadcrumbs/>
            <FlexContainer>
              <AsidePanel/> 
              <div className='downloadsPanel-inner'>
                  <AsideTitle>Загрузки</AsideTitle>
                  <p className='no-downloads'>
                    <NoDownloadsIcon/>
                    Доступных загрузок нет
                  </p>
              </div>
            </FlexContainer>
        </MainContainer>
      <Footer/>  
    </StyledDownLoadsPanelWrapper>
  )
}

