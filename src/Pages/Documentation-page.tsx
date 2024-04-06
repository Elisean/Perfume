import React from 'react'
import styled from 'styled-components'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { ReactComponent as Fail} from '../icons/fail.svg'
import { ReactComponent as DocumentationIcon} from '../icons/documentation-icon.svg'


const DocumentationPageStyled = styled.section`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;

    .text-page{
      font-size: 18px;
      font-weight: 400;
      line-height: 140%;
      
    }
    .text-subtitle{
      margin:20px 0 0 0;
    }
    .text-link{
        display: flex;
        align-items: center;
        margin:50px 0 0 0;
        a{
          margin:0 0 0 50px;
          text-decoration: underline;
        }
    }
    .icon-page{
      position: absolute;
      top:0;
      left:50%;
      transform: translate(-50%,50%);
      z-index: -1;
    }
    .text-links{
      margin-bottom: 210px;
    }
    @media (max-width:768px) {
      padding:50px 0 0 0;
    }
    @media (max-width:568px) {
      .icon-page{
        svg{
          width:250px;
        }
      }
    }
  
`

export const DocumentationPage = () => {
  return (
    <DocumentationPageStyled>
      <Header/>
      <MainContainer>
        <AsideTitle>Документация</AsideTitle>
        <Breadcrumbs/>
        <p className='text-page text-subtitle'>Наш товар сертифицирован</p>
        <div className='text-page text-links'>
          <div className='text-link'> <Fail/> <a href="https://parfumpomotivam.store/docs/sertificat_eas.pdf">Сертификат ЕАС</a></div>
          <div className='text-link'> <Fail/> <a href="https://parfumpomotivam.store/docs/vipiska_iz_egrn.pdf">Выписка из <br /> ЕГРН</a></div>
        </div>
        <div className='icon-page'>
        <DocumentationIcon/>
        </div>
      </MainContainer>
      <Footer/>
    </DocumentationPageStyled>
  )
}
