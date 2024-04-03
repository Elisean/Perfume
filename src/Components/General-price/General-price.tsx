import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { AsideTitle } from '../Aside-title/Aside-title'

interface IGeneralPrice{
    count?:number
    generalPrice:number
}


const StyledGeneralPrice = styled.div`
    margin:50px 0 0 0;
    padding:30px;
    background-color: var(--gray);
    width:630px;

    .price-inner{
        display:flex;
        margin:0 0 40px 0;
    }
    .price-description{ 
        margin:0 0 0 70px;
    }
    .price-points{
        margin:0 0 0 85px;
    }
    .price-cashback{
        margin:0 0 0 82px;
    }
    .price-to-pay{
        text-align:center;
        font-size:24px;
        font-family: 'Montserrat', sans-serif;
    }
    .price-pay{
        font-family: 'Open Sans', sans-serif;
        font-size:20px;
        font-weight:700;
        letter-spacing:1px;
    }
    .button-checkout{
        left: 160px;
    }
    @media (max-width:768px) {
        width:540px;
        .button-checkout{
            left:115px;
        }
    }
    @media (max-width:568px) {
        margin:40px auto;
        width:290px;
        .button-checkout{
            left:-8px;
        }
        :nth-child(2){
            display:flex;
            margin:5px 0 0 0;
            flex-direction:column;
        }
        .price-inner{
            margin:0 0 30px 0;
        }
        .price-points{
            margin:0 0 0 100px;
        }
        .price-cashback{
            margin:0 0 0 97px;
        }
    }
    
`

export const GeneralPrice:React.FC<IGeneralPrice> = ({count, generalPrice}) => {
  return (
    <StyledGeneralPrice>
        <AsideTitle textalign='center' margin='0'>{count ?? 0} товара на сумму: <span>{generalPrice}</span> ₽</AsideTitle>
      
            <div className='price-inner'>
                <p>Доставка</p>
            <p className='price-description'>Заказы до 10 000 ₽ доставим бесплатно в Ваш ближайший 
                постамат. Если в Вашем регионе их нет, то так же 
                бесплатно доставим в Ваше отделение Почты России. 
                Заказы свыше 10 000₽ доставим курьером до двери.
            </p>
            </div>
            
            <div className='price-inner'>
                <p>Скидка</p>
                <p className='price-points'>0 баллов</p>
            </div>
   
            <div className='price-inner'>
                <p>Кэшбэк</p>
                <p className='price-cashback'>0 баллов</p>
            </div>

            <div className='price-to-pay'>К оплате: <span className='price-pay'>{generalPrice} ₽</span></div>

            <Button padding='12px 40px' top='10px' className='button-checkout'>Оформить заказ</Button>
           
    </StyledGeneralPrice>
  )
}


