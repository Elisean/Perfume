import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { ReactComponent as BonusesIcon } from '../icons/bonuses-icon.svg'
import { Button } from '../Components/Button/Button'
import BasketStore from '../Store/BasketStore'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { Input } from '../Components/Input/Input'
import checked from '../icons/checked.svg';
import { observer } from 'mobx-react-lite'
import { GeneralPrice } from '../Components/General-price/General-price'



const StyledWrapperBasketPage = styled.section`
  
  display: flex;
  flex-direction: column;
  .basket-content{
    min-height:31vh;
  }
 
  .basket-points{
  
    background-color: var(--gray);
    padding:30px;
    margin:23px 0 0 0;
    border-radius:5px;
    width:955px;
   
    svg{
      margin:0 10px 0 0;
    }
  }
  .points-description{
    display:flex;
    align-items:center;
  }
  .basket-button{
    margin:20px 0 0 0;
    padding:12px 35px;
  }
  .product-inner{
    display:flex;
    margin:40px 0 20px 0;
    justify-content:space-between;
  
  }
  .product-image{
    width:80px;
    height:80px;
    margin:0 45px;
  }
  .product-remove{
      color:var(--text);
  }
  .product-check{
      width: 24px;
      height: 24px;
      border: 1px solid var(--border);
      border-radius:5px;
  }
  .product-check:checked{
      background-image: url(${checked});   
  }
  .product-name{
    margin:10px 0 25px 0;
  }
  .product-price{
    margin:10px 0 0 0;
  }

  .card-step{
    display: flex;
    align-items: center;
    margin:0 0 20px 140px;
    background-color: #2B2624;
    border-radius: 4px;
    width: 144px;
    justify-content: center;
  }

  .step-count{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    width:56px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #565147;
    margin: 0 10px;
  }
  .step-minus,.step-plus{
    font-size:40px;
    color: var(--text);
  }
  .step-minus{
    margin: -5px 0 0 0;
  }

  @media (max-width:993px) {
    
      .basket-points{
        max-width:700px;
        margin:20px auto;
      }
      .basket-content{
        max-width:700px;
        margin:20px auto;   
      }
      .card-step{
        margin:0 0 20px 10px;
        height:60px;
      }
      .product-image{
        margin:0 20px;
      }
  }
  @media (max-width:768px) {
    
    .basket-points{
        max-width:540px;
        margin:40px auto 20px auto;
    }
    .basket-content{
        max-width:560px;
        margin:20px auto;   
      }
    .basket-button{
      left:120px;
    }
    .product-name{
      font-size:14px;
      margin:10px 0 10px;
    }
    .product-price{
      font-size:14px;
    }
    .product-image{
      width:60px;
      height:60px;
    }
    .card-step{
        margin:0 0 20px 10px;
        height:50px;
        width:110px;
    }
    .step-count{
      width:35px;
      height:25px;
    }
    .step-plus,
    .step-minus{
      font-size:30px;
    }
    .product-remove{
      font-size:14px;
      margin:0 0 0 -4px;
    }
}
  @media (max-width:568px) {
    .basket-points{
        max-width:290px;
        margin:40px auto 20px auto;
        padding:20px;
    svg{
         width:150px;
        }
    }
    .product-image{
      margin:0 10px 0 10px;
      width:70px;
      height:70px;
    }
    .product-inner{
      position:relative;
    }
    .basket-content{
        max-width:290px;
    }
    .card-step{
        position:absolute;
        top:40px;
        right:0px;
        height:30px;
        width:100px;
    }
    .product-name{
      font-size:12px;
      margin:5px 0 5px -5px;
    }
    .basket-button{
      left:0px;
    }
    .product-price{
      margin:5px 0 0 0;
    }
  }
` 

export const BasketPage = observer(() => {

  const basketProductsContext = useContext(BasketStore); 
  
  const basketProducts = basketProductsContext.cardsData  

  const [priceItem, setPriceItem] = useState(0) // Общая цена 
  let [countItem, setCountItem] = useState(0) // Количество выбранных продуктов

  const getPrice = (event:any, price:string) =>{ // получение цены продукта

    if(event.target.checked){ // получение состояния инпут
      let generalPrice = priceItem + Number(price); // цена продукта
      setPriceItem(generalPrice) // сумма цены продукта
      setCountItem(countItem += 1) // количество продуктов
    }else{
      let generalPrice = priceItem - Number(price); // цена продукта
      setPriceItem(generalPrice) // сумма цены продукта
      setCountItem(countItem -= 1) // количество продуктов
    }
  
  }


  return (
    <StyledWrapperBasketPage>
      <Header/>

      <MainContainer >
      <AsideTitle margin='0'>Корзина</AsideTitle>
        <Breadcrumbs/>
          <div className='basket-points'>
            <div className='points-description'>
            <BonusesIcon/>
              У вас сейчас есть 100 баллов. Используйте их, чтобы получить скидку 100 ₽ на эту покупку
            </div>
          <Button className='basket-button'>Потратить баллы</Button>
          </div>
        <div className='basket-content'>
        {
          basketProducts.map((product:{id:string, cardName:string, price:string, volume:number, imgUrl:string})=>{
            
            return (
              <div className='product-inner' key={product.id}>
                  <MainContainer padding='0' width='955px' margin='0'>
                  <FlexContainer justify='space-between'>
                    <FlexContainer align='center'>
                      <Input  type='checkbox' className='product-check' onClick={(event:any)=> getPrice(event, product.price)} />
                      <img className='product-image' src={product.imgUrl} alt="perfume" />
                    </FlexContainer>
             
                    <FlexContainer direction='column' align='flex-start' flex='0 1 46%'>
                      <h2 className='product-name'>{product.cardName}, {product.volume + 'мл'}</h2>
                      <button className='product-remove' onClick={() => basketProductsContext.deleteCard(product.id)}>удалить x</button>
                    </FlexContainer>
                    <FlexContainer>
                      <p className='product-price'>{product.price}₽</p>
                    </FlexContainer>
                    <div className='card-step'>
                      <button className='step-minus' onClick={()=> basketProductsContext.decrease(product.id)}>-</button>
                      <button className='step-count'>{product.volume}</button>
                      <button className='step-plus' onClick={()=> basketProductsContext.increase(product.id)}>+</button>
                    </div>
                  </FlexContainer>
                  </MainContainer>
              </div>
            )
          })
        }
        </div>
        <GeneralPrice count={countItem} generalPrice={priceItem}/>
      </MainContainer>
    <Footer />
    </StyledWrapperBasketPage>
  )
})
