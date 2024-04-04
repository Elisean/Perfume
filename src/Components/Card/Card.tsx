import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { Button } from '../Button/Button'
import { nanoid } from 'nanoid'
import { observer } from 'mobx-react-lite'
import { scrollTop } from '../../Utils/scrollTop'
import BasketStore from '../../Store/BasketStore'

const StyledCardWrapper = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: var(--txt-dark, #36332E);
 
 
  .card-image{
    width:245px;
    height:220px;
    border-radius:4px;
    margin:30px auto 0 auto;
  }
  .card-inner{
    font-family: 'Open Sans', sans-serif;
    color: var(--txt, #BEAE97);
    padding:0 30px; 
  }
  .card-title{
    font-size: 16px;
    position: absolute;
    top:260px;
    display: flex;
    padding:0 20px 0 0;
  }
  .card-volume{
    margin:60px 0 15px 0;
  }
  .button-volume{
    display: flex;
    justify-content: center;
    align-items: center;
    width:34px;
    height:34px;
    border-radius: 4px;
    border: 1px solid #D6B88D;
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:0 0 15px 0;
    font-family: Montserrat;
    font-weight:600;
    cursor: pointer;
    &:hover{
      background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
      -webkit-text-fill-color: #36332E;
    }
    &:focus{
      background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
      -webkit-text-fill-color: #36332E;
    }
  }
  .price-title{
    font-size: 18px;
    font-weight: 400;
    line-height: 140%; 
    margin:0 0 90px 0;
  }
  .price{
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    font-weight: 700;
    padding: 0 5px 0 0;
  }
  .button-card{
    top:-70px;
    padding:12px 72px;
  }
  @media (max-width:1300px) {
    .card-inner{
      height:260px;
    }
  }
  @media (max-width: 768px) {
    height:475px;

    .card-inner{
      padding:0 12px 0 12px;
    }
    .card-image{
      margin:15px auto 0 auto;
      width:220px;
      height:220px;
    }
    .card-title{
      top:245px;
    }
    .price-title{
      margin:10px 0 75px 0px;
    }
    .price{
      margin:10px 0 0 0;
      padding:0;
    }
    .button-card{
      top:-70px;
      padding:12px 45px;
      width:225px;
      left:-4px;
    }
    .button-card-volume{
      margin:0 0 7px 10px !important;
    }

  }
  @media (max-width: 568px) {
   
    width:291px;
    margin:0 auto;
    height:515px;

    .card-inner{
      padding:0 30px 0 10px;
    }
    .card-image{
      margin:15px auto 0 auto;
      width:250px;
      height:250px;
    }
    .card-title{
      top:280px;
      left:20px;
    }
    .card-volume{
      margin: 65px 5px 10px 10px;
    }
    .price-title{
      margin:10px 0 0 10px;
    }
    .button-card{
      top:7px;
      left:135px;
    }
  }

`

export const Card:React.FC<any> = observer(({param}) => {
  const basketContext = useContext(BasketStore);

  const countCharacterForID = 6;

  const [cards, setCards] = useState<{[key:string]: any}>({
    id:"",
    imgUrl:"",
    cardName: "",
    volume: "",
    price:"",
})


  const getDataCard = (event?:any) =>{
    const newCard = {...cards} // формирование нового объекта на основе объекта cards
    newCard.id = nanoid(countCharacterForID); // добавление id к новому объекту 
    newCard.imgUrl = param.url; // добавление url к новому объекту 
    newCard.cardName = param.title; // добавление имени к новому объекту 
    newCard.volume = event?.target.innerText ?? '1'; // добавление количества продукта к новому объекту 
    newCard.price = param.price; // добавление цены к новому объекту 
    basketContext.cardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]') // получение объекта из localStorage [] - значение по умолчанию, если не будет найден basketProduct
    basketContext.cardsData.push(newCard) // добавление нового объекта в массив стора
    localStorage.setItem("basketProduct", JSON.stringify(basketContext.cardsData)) // фиксация нового объекта в locaStorage
    setCards(newCard) // замена объекта cards на newCard
  }

 

  return (
         <StyledCardWrapper >
         <Link style={{display:'flex'}} to={`/perfume/singleProduct/${param.id}`}> <img className='card-image' src={param.url} onClick={()=> scrollTop()} alt="card-img"/></Link>
                    <div className='card-inner'>
                    <Link to={`/perfume/singleProduct/${param.id}`}> <h2 className='card-title'>{param.title}</h2> </Link>
                      <p className='card-volume'>Объем мл.</p>
                      <FlexContainer wrap='wrap' justify='space-between'>
                        <button className='button-volume button-card-volume' name='volume' tabIndex={0} onClick={(event:any) => getDataCard(event)}>{param.volumes[0]}</button>
                        <button className='button-volume button-card-volume' name='volume' tabIndex={1} onClick={(event:any) => getDataCard(event)}>{param.volumes[1]}</button>
                        <button className='button-volume button-card-volume' name='volume' tabIndex={2} onClick={(event:any) => getDataCard(event)}>{param.volumes[2]}</button>
                        <button className='button-volume button-card-volume' name='volume' tabIndex={3} onClick={(event:any) => getDataCard(event)}>{param.volumes[3]}</button>
                      </FlexContainer>
                      <FlexContainer justify='space-between'>
                        <p className='price-title'>Стоимость:</p>
                        <p className='price'>{param.price + '₽'}</p>
                      </FlexContainer>
                        <Button className='button-card' btncards={'true'} onClick={()=> getDataCard()}>в корзину</Button>
                  </div>
      </StyledCardWrapper>  
  )
}
)