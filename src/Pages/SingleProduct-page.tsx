import React, { useState, useEffect, useContext }  from 'react'
import styled from 'styled-components'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../Containers/Flex-container/FlexContainer'
import { useParams } from 'react-router-dom'
import { Button } from '../Components/Button/Button'
import { MainSelect } from '../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../icons/chevron-down.svg'
import { Modal } from '../Components/Modal/Modal'
import { ReactComponent as Bonuses } from '../icons/bonuses-icon.svg';
import { FormReview } from '../Components/Form-review/Form-review'
import { ReactComponent as Star } from '../icons/stars-icon.svg';
import { Card } from '../Components/Card/Card'
import { Skeleton } from '../Layout/HomePage-catalog/Catalog-components/Catalog-card/Skeleton-catalog-card'
import BasketStore from '../Store/BasketStore'
import { nanoid } from 'nanoid'
import { useAuthContext } from '../App/App'
import { NotAutorizet } from '../Components/Not-autorizet/Not-autorizet'



const SingleProductWrapperStyled = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-family: 'Montserrat', sans-serif;
   
  
  .card-wrapper{
    margin:25px 0 50px 0;   
  }
  .card-inner-product{
    margin:0 0 0 20px;
  }
  .card-image{
   img{
    width:410px;
    height:410px;
   }
  }
  .card-likes-title{
    text-align:center;
    margin:100px 0 20px 0;
  }
  .card-name{
    font-size: 24px;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin:0 0 40px 0;
  }
  .card-subtitle{
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px; 
    margin:0 0 10px 0;
  
  }
  .button-volume{
    font-family: 'Montserrat', sans-serif;
    border-radius: 4px;
    border: 1px solid #D6B88D;
    background: #2B2825;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
    font-weight:600;
    text-transform: uppercase;
    width:40px;
    height:40px;
  }
  .button-volume:focus{
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    -webkit-text-fill-color: var(--black);
  }
  .volume-single-product{
    margin:0 20px 40px 0;
  }
  .card-step{
    display: flex;
    align-items: center;
    margin:0 0 20px 0;
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
  .card-price{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; 
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing:1px;
    margin:0 0 27px 0;
  }
  .open-window{
    margin: 10px 0 20px 0;
    transition:.5s all;
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    opacity:1;
    visibility: visible;
    width:800px; 
  }                                     
  .close-window{
    transition:.5s all;
    margin: -50px 0 0 0;
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    font-size: 16px;
    opacity:0;
    visibility: hidden;
    width:800px;   
  }
  .open-review{
    position:relative;
    margin: 15px 0 20px 0;
    opacity:1;
    visibility: visible;
    display: flex;
    flex-direction:column;
    align-items:flex-end;
    width: 850px;
  }
  .close-review{
    position:relative;
    margin: -50px 0 0 0;
    opacity:0;
    visibility: hidden;   
    display: flex;
    flex-direction:column;
    align-items:flex-end;
    width: 850px;
  }
  .rating-star{
    width:16px;
    height:16px;
  }
  .reviews-wrapper{
    font-family: 'Open Sans', sans-serif;
    background-color: var(--gray);
    margin:10px 0 0 0;
    padding:20px 20px;
    width:100%;
  }
  .reviews-closed{
    height:0;
  }

  .reviews-username{
    font-size:14px;
    margin:0 0 10px 0;
  }
  .reviews-date{
    margin:0 0 16px 0;
  }
  .card-button{
    padding:12px 72px;
  }
  .authorized-hidden{
    opacity:0;
    visibility:hidden;
    width:0;
    height:0;
  }
  .authorized-visible{
    opacity:1;
    visibility:visible;
    width:890px;
    position:absolute;
    z-index:8;
    background-color: var(--bg-color);
    font-size:18px;
    text-align:center;
    top: -135px;
    left: 0px;
    padding:30px;
  
  }
 
 
 .card-likes-inner{
    display:grid;
    grid-template-columns: repeat(4, 305px);
    grid-template-rows: repeat(1, 510px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
 }
  @media (max-width:1300px) {
    .card-likes-inner{
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(1, 510px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content:center;
    }
  
}
@media (max-width:993px) {
    .authorized-visible{
      width:100%;
      max-width:890px;
    }
    .reviews-button{
      margin:20px 0 0 0;
    }
}
  @media (max-width:880px) {
    .open-review{
      width:100%;
    }
    .close-review{
      width:100%;
    }
    .open-window{
      width:100%;
      font-size:14px;
    }
    .close-window{
      width:100%;
      font-size:14px;
    }
}
@media (max-width:768px) {
    margin:60px 0 0 0;
    
  .card-wrapper{
    margin:25px 0;
  }
  .close-window{
    margin:-105px 0 0 0;
    transition:.5s all;
    z-index:-1;
    position:relative;
  }
  .open-window{
    transition:.5s all;
    position:relative;
    z-index:1;
  }
  .card-image{
    img{
      width:260px;
      height:260px;
    }
  }
  .card-name{
    font-size:17px;
    margin:0 0 5px 0;
  }
  .button-volume{
    margin:0 20px 5px 0;
  }
  .card-step{
    margin:0 0 5px 0;
  }
  .card-button{
    top:-26px;
  }
  .card-price-tag{
    display:flex;
    justify-content:space-between;
  }
  .card-inner{
    padding:0 12px 0 5px;
    margin:0 0 0 5px;
  }
  .card-title{
    padding:5px 0 0 0;
    font-size:14px;
  }
  .card-volume{
    margin:55px 0 15px 0px;
  }
  .card-likes-title{
    margin:30px 0;
    padding:0;
  }
  .card-likes-inner{
    display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(1, 470px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
  .reviews-button{
      margin:40px 0 0 0;
  }
}

@media (max-width:568px) {
  .card-likes-inner{
    display: grid;
    grid-template-columns: repeat(1, 330px);
    grid-template-rows: repeat(1, 505px);
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    justify-content: center;  
  }
  .card-inner-product{
    margin: 30px 20px 0 0;
  }
  .card-name{
    margin:15px 0 5px 0;
  }
  .button-volume{
    margin:0 5px 5px 0;
  }
  .card-button{
    left:0;
    top:-10px;
    width:270px;
  }
  .card-price-tag{
    width:270px;
  }
  .close-window{
    margin:-160px 0 0 0;
  }
  .reviews-button{
    width:260px;
  }
  .card-inner{
    height:250px;
    margin:0;
  }
  .card-title{
    padding:0;
    font-size:16px;
  }
  .card-volume{
    margin:65px 0 15px 15px;
  }
  .authorized-visible{
    font-size:14px;
    padding:10px 0;
    width:280px;
    top:-130px;
  }
}
 
`

export const SingleProduct:React.FC = () =>{
  const countCharacterForID = 6;
  const basketContext = useContext(BasketStore);
  const authContext = useContext(useAuthContext)

  const [cards, setCards] = useState<{[key:string]: any}>({
    id:"",
    imgUrl:"",
    cardName: "",
    volume: "",
    price:"",
})

  const [openDescription, setOpenDescription] = useState(false); // предикат для открытия модального окна с описанием
  const [openReviews, setOpenReviews] = useState(false); // предикат для открытия модального окна с всеми оставленными комментариями
  const [openModal, setOpenModal] = useState(false); // предикат для открытия модального окна для отправки комментария
  const [product, setProduct] = useState<any>([]); // получение всех продуктов
  const [isLoading, setIsLoading] = useState(true); // предикат для отображения продуктов после загрузки
  let [count, setCount] = useState(1); // количество продуктов 
  const {id} = useParams(); // получения id из адресной строки
  const [allReviews, setAllReviews] = useState([]); // получение всех комментариев
  const [productLikes, setProductLikes] = useState([]); // получение избранных продуктов
  const [likeProductLoading, setLikeProductLoading] = useState(true) // предикат для отображения избранных продуктов после загрузки
  const [isNotAuthorized, setIsNotAuthorized] = useState(false) // предикат для отображения ссылки на регистрацию если пользователь не авторизован 


  // Комментарии к продукту
 useEffect(() => {

  fetch(
      `https://64e6020b09e64530d17f6dd0.mockapi.io/Reviews`
    )
    .then((res) => res.json())
    .then((data) => {
      setAllReviews(data) // получение всех комментариев в массив
    }).catch((e)=>{
      console.log(e)
   });
 
  }, []);

  
 // Комментарии к продукту
  // открытие закрытие окна для отправки комментариев
  const toggleModal = () =>{
    setOpenModal((showModal) => !showModal)
  }
  // открытие закрытие окна для отправки комментариев
  // степпер на уменьшение количества продукта
  const decrease = () =>{
      if(count <= 1){
        setCount(count = 1)
      
      }else{
        setCount(count - 1)
      }  
  }
   
  // степпер на количества увеличение продукта
  const increase = () =>{

    setCount(count + 1)
    if(count === 100){
      setCount(count = 100)
    }
  }
 
 
  // подгрузка товаров
  useEffect(() => {
      // подгрузка отдельного товара
    fetch(
      `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors/${id}`
    )
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(false) // предикат для отображения продуктов после загрузки
      setProduct(data) // получение товаров в массив 
 
     })
   
      // подгрузка избранных товаров
      fetch(
        `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?&filter=${'productLikes'}`
      )
      .then((res) => res.json())
      .then((data) => {
        setLikeProductLoading(false) // предикат для отображения продуктов после загрузки
        setProductLikes(data) // получение товаров в массив 
      })
     
  }, [id]);
   
 
  const changeReview = () =>{
    if(!authContext.useAuth){
      setIsNotAuthorized(true)
    }else{
      setOpenModal(true)
    }
   
  }


  // формирование объекта для корзины товаров
  const getDataCard = (event?:any) =>{
    const newCard = {...cards} // формирование нового объекта на основе объекта cards
    newCard.id = nanoid(countCharacterForID); // добавление id к новому объекту 
    newCard.imgUrl = product.url; // добавление url к новому объекту 
    newCard.cardName = product.title; // добавление имени к новому объекту 
    newCard.volume = event?.target.innerText ?? count; // добавление количества продукта к новому объекту (значение по умолчанию число внутри переменной count)
    newCard.price = product.price; // добавление цены к новому объекту 
    basketContext.cardsData = JSON.parse(localStorage.getItem("basketProduct") || '[]') // получение объекта из localStorage [] - значение по умолчанию, если не будет найден basketProduct
    basketContext.cardsData.push(newCard) // добавление нового объекта в массив стора
    localStorage.setItem("basketProduct", JSON.stringify(basketContext.cardsData)) // фиксация нового объекта в locaStorage
    setCards(newCard) // замена объекта cards на newCard
  }
 // формирование объекта для корзины товаров

  return (
    <SingleProductWrapperStyled>
        <Header/>
    {
      isLoading ? [...new Array(1)] : <MainContainer cardresponse={'true'}>
        
      <AsideTitle singleproductresponse={'true'}>Парфюмерия</AsideTitle>
     
        <Breadcrumbs />
          <div className='card-wrapper'>
          <FlexContainer cardresponse={'true'}>
              <div className='card-image'>
                  <img src={product.url} alt="img-title" />
              </div>
              <div className='card-inner-product'>
                <h2 className='card-name'>{product.title}</h2>
                <p className='card-subtitle'>Объем мл.</p>
                <FlexContainer wrap='wrap' btnscardresponse={'true'}>
                  <button className='button-volume volume-single-product' tabIndex={0} onClick={(event:any) => getDataCard(event)}>{product.volumes[0]}</button>
                  <button className='button-volume volume-single-product' tabIndex={1} onClick={(event:any) => getDataCard(event)}>{product.volumes[1]}</button>
                  <button className='button-volume volume-single-product' tabIndex={2} onClick={(event:any) => getDataCard(event)}>{product.volumes[2]}</button>
                  <button className='button-volume volume-single-product' tabIndex={3} onClick={(event:any) => getDataCard(event)}>{product.volumes[3]}</button>
                </FlexContainer>
                <p className='card-subtitle'>Кол-во</p>
                <div className='card-step'>
                  <button className='step-minus' onClick={()=> decrease()}>-</button>
                  <button className='step-count'>{count}</button>
                  <button className='step-plus'onClick={()=> increase()}>+</button>
                </div>
                <div className='card-price-tag'> 
                  <p className='card-subtitle'>Стоимость</p>
                  <p className='card-price'>{product.price}₽</p>
                </div>

                <Button className='card-button' onClick={() => getDataCard()}>В корзину</Button>
              </div>
          </FlexContainer>
          </div>
          <MainSelect cardproductselect={'true'} onClick={()=>setOpenDescription(!openDescription)}>
            Описание
           <Chevron/>
          </MainSelect>
          <p className={openDescription ? 'open-window' : 'close-window'}>Этот аромат для мужчин и женщин. Композиция аромата состоит из: апельсина, имбиря,бергамота, <br /> толуанского бальзама, ванили и мускуса. Уникальная композиция нот доставит удовольствие своему <br /> обладателю. А название аромата придаст ему уверенность и хорошее настроение</p>
          <MainSelect cardproductselect={'true'} onClick={()=> setOpenReviews(!openReviews)}>
            Отзывы
           <Chevron/>
          </MainSelect>
           <Modal isOpen={openModal} onClose={toggleModal} modalTitle={product.title}>
           <div className='modal-bonuses-wrapper'>
                  <div className='modal-bonuses-icon'>
                    <Bonuses/>
                  </div>
                  <div className='modal-bonuses-description'>
                    <p className='modal-bonuses'>За текстовый отзыв Вы получите 100 бонусных баллов</p>
                    <p className='modal-bonuses'>За отзыв с фото 150 бонусных баллов</p>
                    <p className='modal-bonuses'>За видео-отзыв с фото 200 бонусных баллов</p>
                  </div>
            </div>
           <FormReview id={product.id} /> {/* компонент модального окна для комментария */}
         
           </Modal>
           
           <div className={openReviews? 'open-review' : 'close-review'}>
            {
              isNotAuthorized ? 
              <NotAutorizet>
                  Вы не зарегистрировались! <br />
                  Возможность оставлять отзывы есть только у 
                  зарегистрированного пользователя, 
                  перейдите по ссылке для регистрации:
              </NotAutorizet> : '' // отображение компонента если пользователь не авторизован
            }
              
            <Button padding='12px 0' top='0' left='0' className='reviews-button' onClick={()=> changeReview()}>Оставить отзыв</Button>

            {
              allReviews.map((review:any, index:number) => {
                if(product.id === review.cardsId?.id){
                  return(
                    <div className={openReviews ? 'reviews-wrapper' : 'reviews-closed'} key={index}>
                      <FlexContainer justify='space-between'>
                        <p className='reviews-username'>{review.userName}</p>
                        <p>
                               {[...Array(Number(review.rating))].map((_, index) => {
                                return (
                                    <Star key={index} className='rating-star' color="#FFEBCC" />
                                )
                              })}
                        </p>
                      </FlexContainer>
                      <p className='reviews-date'>{review.userDate}</p>
                      <p className='reviews-message'>{review.message}</p>
                  </div>
                  )    
                }  
              })  
            }
          </div>
          <AsideTitle className='card-likes-title'>Вам так же может понравиться</AsideTitle>
          <div className='card-likes-inner'> 
              {
              likeProductLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>) 
                        : productLikes.map((card, index) => (   
                        <Card param={card} key={index} />
                )
              )
            }
          </div>
      </MainContainer>
    }
        <Footer/>
    </SingleProductWrapperStyled>
  )
}