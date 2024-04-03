import React from 'react'
import styled from 'styled-components'
import { Header } from '../Components/Header/Header'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Footer } from '../Components/Footer/Footer'
import { ReactComponent as IconAboutFlower } from '../icons/about-icon-flower.svg'
import { ReactComponent as IconAbout } from '../icons/about-icon.svg'



const AboutPageStyled = styled.section`
  font-family: 'Montserrat', sans-serif;
 
  .text-page{
    margin:20px 0 0 0;
    color: var(--text);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    position: relative;
    z-index:3;
  }
  .text-list{
    margin:30px 0 50px 0;
    width:561px;
  }
  .list-item{
    position: relative;
    padding:0 0 0 34px;
  }
  .list-item::before{
    content: "";
    position:absolute;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    top:50%;
    left:6px;
    transform: translate(-50%,-50%);
  }
  .about-inner{
    max-width:1063px;
  }
  .about-images{
    position: absolute;
    top:60%;
    right: 0;
    z-index:2;
    transform: translate(0,-50%);
  }
  @media (max-width:768px) {
    padding:50px 0 0 0;
    .text-list{
      width:530px;
    }
  }
  @media (max-width:568px) {
    .text-list{
      width: none;
      max-width:100%;
    }
    .about-images{
      svg{
        width:250px;
      }
    }
    .list-item{
      padding:0;
    }
    .list-item::before{
      display: none
    }
    .about-inner{
      text-align:center;
    }
  }
`

export const AboutUsPage = () => {
  return (
    <AboutPageStyled>
      <Header/>
      <MainContainer position='relative'>
      <AsideTitle>О Нас</AsideTitle>
      <Breadcrumbs/>
      <section className='about-inner'>
     

       <p className='text-page'>Дорогие гости, рады приветствовать вас на нашем сайте!</p>

       <p className='text-page'>Мы собрали для вас самые известные ароматы со всего мира. Благодаря богатому ассортименту, каждый сможет найти для себя то самое: мужчины — то, что придаст им мужественности и статусности, женщины — то что выгодно подчеркнёт их нежность, подарит изысканный шарм и оставит шлейф очарования. Даже для самых скромных особ у нас всегда найдётся приятный аромат</p>
       <h2 className='text-page'>Каждая модель описана тремя нотами:</h2>

       <ul className='text-page text-list'>
        <li className='text-page list-item'>Верхние – это первое впечатление, которое оставляет о себе аромат. Их длительность не более часа</li>
        <li className='text-page list-item'>Средние ноты – появляются после верхних и длятся  несколько часов. Они не такие яркие, как верхние ноты, тем не менее, составляют всю суть аромата</li>
        <li className='text-page list-item'>Базовые ноты – создают финальное впечатление об аромате и остаются на коже продолжительное время. Они оставляют легкий шлейф, который может длиться даже до нескольких дней</li>
       </ul>

      <p className='text-page'>Наша цель — доставлять вам радость от покупки, совершив её в два клика. После регистрации на сайте, отправьте в корзину выбранный флакон и ожидайте доставку</p>
        <div className='about-images'>
          <IconAboutFlower/>
          <IconAbout/>
        </div>
      </section>   
      </MainContainer>
      <Footer/>
    </AboutPageStyled>
    
  )
}
