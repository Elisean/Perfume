import { ReactComponent as BasketIcon } from "../../../../icons/basket.svg"
import { styled } from "styled-components"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../../../Utils/routes"
import { useContext } from "react"
import { observer } from "mobx-react-lite"
import BasketStore from "../../../../Store/BasketStore"


const BasketIconWrapper = styled.div`
    margin:0 0 0 30px;
    cursor: pointer;
    position:relative;

    .count{
        color: #000;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 30px;
        background: var(--red);
        position:absolute;
        top: -13px;
        left: 10px;
        width: 20px;
        height: 20px;
        padding:3px 0 0 0;
    }
    .active{
        position:relative;
        .count{
            position:absolute;
            top: -30px;
            left: 20px;
        }
        svg{
            background-color: #37332F;
            border-radius:4px;
            padding:5px;
            width:34px;
            height:34px;
        }
    }
`

export const HeaderBasket:React.FC = observer(() =>{
    const basketContext = useContext(BasketStore);

    
    return (
        <BasketIconWrapper>
            <NavLink to={ROUTES.BASKET} state='Корзина'>
                <span className="count">{basketContext.cardsData.length}</span>
            <BasketIcon />
            </NavLink>
        </BasketIconWrapper>
    )
})