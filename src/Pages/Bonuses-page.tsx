import React from 'react'
import styled from 'styled-components'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { MainContainer } from '../Containers/Main-container/Main-container'
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs'
import { AsideTitle } from '../Components/Aside-title/Aside-title'
import bonusesExampleOne from '../images/bonuses-example-1.png'
import bonusesExampleTwo from '../images/bonuses-example-2.png'
import bonusesExampleThree from '../images/bonuses-example-3.png'
import bonusesExampleFour from '../images/bonuses-example-4.png'
import bonusesExampleFive from '../images/bonuses-example-5.png'


const BonusesPageStyled = styled.section`
  font-family: 'Open Sans', sans-serif;
  color: var(--text);
  font-size: 16px;

  .title-page{
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    margin:50px 0 10px 0;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .breadcrumps{
    margin:0 0 20px 0;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
  .text-link{
    text-decoration: underline;
  }
  .mb-10{
    margin:0 0 10px 0;
  }
  .mb-20{
    margin:0 0 20px 0;
  }
  .mb-40{
    margin:0 0 40px 0;
  }
  @media (max-width: 768px) {
    padding:50px 0 0 0;

    .bonuses-images{
      max-width:100%;
    }
    .breadcrumbs-wrapper{
      margin:0 0 10px 0;
    }
  }
`

export const BonusesPage:React.FC = () => {
  return (
    <BonusesPageStyled>
      <Header/>
      <MainContainer>
        <section className='bonuses-inner'>
          <AsideTitle>Бонусы</AsideTitle>
          <div className='breadcrumbs-wrapper'>
            <Breadcrumbs />
          </div>
         

          <p className='text-page mb-40'>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. <br /> Этими баллами можно оплачивать покупки!</p>
          <p className='text-page mb-10'>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. <br /> Этими баллами можно оплачивать покупки! Бонусные баллы можно найти в вашей Корзине</p>

          <img src={bonusesExampleOne} alt="bonuses-example-1.png" className='bonuses-images mb-40'/>

          <p className='text-page mb-20'>Как их получить?</p>
          <p className='text-page mb-10'>Первое – регистрация. За регистрацию на сайте вам полагается 100 баллов. Сделать это не трудно: просто перейдите во <br /> вкладку <a className='text-link' href="#">Мой аккаунт</a></p>

          <img src={bonusesExampleTwo} alt="bonuses-example-2" className='bonuses-images mb-40'/>

          <p className='text-page mb-10'>Второе – покупки. Если вы зарегистрированы на сайте, то после каждой покупки вам моментально начисляется кэшбэк. <br /> Причём, чем больше у вас покупок, тем больше кэшбек!</p>

          <img src={bonusesExampleThree} alt="bonuses-example-3" className='bonuses-images mb-40'/>

          <p className='text-page mb-10'>Ну и, наконец, отзывы. Просто поделитесь в карточке товара своим мнением. За простой комментарий – 100 баллов. За <br /> отзыв с фото – 150 баллов. За видео-отзыв – 200 баллов*</p>
          <p className='text-page mb-10'>* – в отзыве необходимо указать свои фамилию и имя, а также место, куда был сделан заказ. Себя снимать не нужно – только духи</p>

          <img src={bonusesExampleFour} alt="bonuses-example-4" className='bonuses-images mb-40'/>

          <p className='text-page mb-10'>Информацию о текущем количестве бонусных баллов, а также их историю, можно узнать в личном кабинете: откройте <br /> вкладку «Мой аккаунт» и выберите там пункт <a className='text-link' href="#">«Бонусы»</a></p>

          <img src={bonusesExampleFive} alt="bonuses-example-5" className='bonuses-images mb-10'/>

          <p className='text-page'>С любыми вопросами о бонусной системе вы всегда можете обратиться к нам</p>
        </section>
      </MainContainer>
      <Footer/>
    </BonusesPageStyled>
  )
}

