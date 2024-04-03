import React from 'react'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import styled from 'styled-components'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Button } from '../../Components/Button/Button'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import CardImageBombshel from "../../images/bombshel.png"
import CardImagesCreed from "../../images/aventus.png"
import CardImagesNarcotiqe from "../../images/fleur.png"
import { Link } from 'react-router-dom'
import { ROUTES } from '../../Utils/routes'






const PopularFragrancesStyled = styled.div`

    font-family: 'Montserrat', sans-serif;
    color: #E1D3BD;
    margin:80px 0 0 0;

    .fragrances-item{
        position: relative;
    }
    .card-title{
        position: absolute;
        left:50%;
        top:20px;
        transform: translate(-65%);
        font-size: 24px;
        font-weight: 400;
        z-index:1;
    }
    .card-subtitle{
        position: absolute;
        left:50%;
        bottom:100px;
        transform: translate(-60%);
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.80);
        font-size: 20px;
        font-weight: 700;
    }
    .card-img{
       transform: scale(1);
       height: 500px;
       transition: .5s;
       padding:0 20px 0 0;
       margin:0 20px 0 0;
    }
   
    .fragrances-item:hover{
      .card-img{
      transform: scaleX(1.5);
      height: 500px;
      transition: .5s;
      padding:0 20px 0 0;
      margin:0 100px;
    }
    }
   
  
 
  @media (max-width: 1300px) {
    pointer-events: none;
    .card-img{
      height: 350px;
    }
    .card-subtitle{
      width:300px;
      font-size:16px;
      transform: translate(-55%);
      bottom:70px;
    }
  }
  @media (max-width: 993px) {
    .card-subtitle{
      font-size:14px;
      transform: translate(-50%);
      bottom:70px;
      width:200px;
    }
    .card-title{
      transform: translate(-50%);
    }
    .card-img{
      padding: 0;
      margin:0 10px 0 10px;
      height: 295px;
    }
  }
  @media (max-width: 768px) {
    .fragrances-item{
        margin:0 0 30px 0;
    }
    .card-img{
        height: 500px;
    }
    .card-subtitle{
      font-size:20px;
      transform: translate(-50%);
      bottom:70px;
      width:300px;
    }
  }
  @media (max-width:450px) {
    .fragrances-item{
        margin:0 0 20px 0;
    }
      .card-img{
        height:400px;
      }
      .card-subtitle{
        font-size:18px;
        bottom:80px;
      }
  }
  @media (max-width:325px) {
    .fragrances-item{
        margin:0 0 20px 0;
    }
      .card-img{
        height:300px;
      }
      .card-subtitle{
        font-size:14px;
        bottom:70px;
      }
  }


`

export const PopularFragrances:React.FC = () => {

  return (
    <PopularFragrancesStyled>
    <MainContainer response={'true'}>
            <AsideTitle response={'true'} top='-40px'>Популярные ароматы</AsideTitle>
            <ul className='fragrances-inner'>
            <FlexContainer response={'true'} justify='space-between' align='center'>
              <li className='fragrances-item'>
              <h3 className='card-title'>Для неё</h3>
                <img className='card-img' src={CardImageBombshel} alt="images" />
                <p className='card-subtitle'>Victoria Secret Bombshell</p>
                <Button responsebtn={'true'} padding='12px 72px' top='85%' left='50%' position='absolute' transform='translate(-57%, 0)'><Link className='card-link' to={`/perfume${ROUTES.SINGLEPRODUCT + '61'}`}>в корзину</Link></Button>
              </li>
              <li className='fragrances-item'>
              <h3 className='card-title'>Для него</h3>
                <img className='card-img' src={CardImagesCreed} alt="images" />
                <p className='card-subtitle'>Aventus By Creed</p>
                <Button responsebtn={'true'} padding='12px 72px' top='85%' left='50%' position='absolute' transform='translate(-57%, 0)'><Link className='card-link' to={`/perfume${ROUTES.SINGLEPRODUCT + '62'}`}>в корзину</Link></Button>
              </li>
              <li className='fragrances-item'>
              <h3 className='card-title'>Унисекс</h3>
                <img className='card-img' src={CardImagesNarcotiqe} alt="images" />
                <p className='card-subtitle'>Narcotiqe</p>
                <Button responsebtn={'true'} padding='12px 72px' top='85%' left='50%' position='absolute'  transform='translate(-57%, 0)'><Link className='card-link' to={`/perfume${ROUTES.SINGLEPRODUCT + '63'}`}>в корзину</Link></Button>
              </li>
            </FlexContainer>
            </ul>
    </MainContainer>   
    </PopularFragrancesStyled>
  
  )
}