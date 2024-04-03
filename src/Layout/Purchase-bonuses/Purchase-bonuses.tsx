import { styled } from 'styled-components';
import { Button } from '../../Components/Button/Button';
import { MainContainer } from '../../Containers/Main-container/Main-container';
import bgStar from '../../images/bg-stars.png';
import { AsideTitle } from '../../Components/Aside-title/Aside-title';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Utils/routes';
import { scrollTop } from '../../Utils/scrollTop';

const PurchaseBonusesStyles = styled.div`
        position: relative;
        font-family: Montserrat;

    .purchase-inner{
        margin-top:109px;
        height:300px;
        background: url(${bgStar}) no-repeat;
        background-size: contain;
        background-position: bottom center;
        z-index:3;
        position: relative;
      
    }
    .bonus-title{
        color: #E1D3BD;
        font-size: 30px;
        font-weight: 400;
        padding:40px 0 0 90px;
    }
    .bonus-subtitle{
        color: #E1D3BD;
        font-size: 16px;
        font-weight: 400;
        padding:35px 0 0 90px;
    }
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 300px;
        background-color: #000;
        top:0;
        left:0;
        z-index:1;
    }

    @media (max-width:1550px) {

        &::before{
            display:none;
        }
        .purchase-inner{
            background-size: cover;
        }   
    }
    
    @media (max-width:767px) {
        .purchase-inner{
            margin-top: 80px;
        }
        .bonus-title{
            padding:50px 0 0 20px;
            font-size:25px;
        }
        .bonus-subtitle{
            padding:15px 0 0 20px;
        }
    }
    @media (max-width:450px){
        text-align: center;

        .bonus-title{
            padding:30px 0 0 0;
            font-size:20px;
        }
        .bonus-subtitle{
            padding:15px 0 0 0;
            font-size:16px;
        }
    }
`

export const PurchaseBonuses = () =>{
    return (
        <PurchaseBonusesStyles>
            <div className='purchase-inner'>
            <MainContainer response={'true'}>
            <AsideTitle response={'true'} top='-70px'>Бонусы от покупок</AsideTitle>
                <h2 className='bonus-title'>Получайте кэшбэк за покупки</h2>
                <h3 className='bonus-subtitle'>Бонусные баллы за регистрацию и покупки</h3>
                <Button responsebonusesbtn={'true'} top='35px' left='90px' padding='12px 0'> <Link state='бонусы' to={ROUTES.BONUSES} onClick={()=> scrollTop()}> Узнать подробнее </Link> </Button>
            </MainContainer>
            </div>
        </PurchaseBonusesStyles>
    )
}