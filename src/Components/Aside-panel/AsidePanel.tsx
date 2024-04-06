import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Panel } from '../../icons/panel.svg' 
import { ReactComponent as  Bonuses} from '../../icons/bonuses-icon.svg' 
import { ReactComponent as  Order} from '../../icons/order.svg' 
import { ReactComponent as  Downloads} from '../../icons/downloads.svg' 
import { ReactComponent as  LocationPanel} from '../../icons/location-panel.svg' 
import { ReactComponent as  UserPanel} from '../../icons/user-panel.svg'
import { ReactComponent as  Exit} from '../../icons/exit.svg'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../Utils/routes'




const StyledWrapperAsidePanel = styled.section`
    .aside-nav{
        width:305px;
        margin:23px 0 0 0;
    }
    .nav-item{
        font-family: 'Montserrat', sans-serif;
        display:flex;
        align-items:center;
        padding:20px 16px 20px 16px;
        justify-content:space-between;
        cursor: pointer;
        svg{
            width:40px;
            color:#645C4F;
        }
    }
    .nav-item-active{
        font-family: 'Montserrat', sans-serif;
        display:flex;
        align-items:center;
        padding:20px 16px 20px 16px;
        justify-content:space-between;
        cursor: pointer;
        background-color: var(--gray);
        svg{
            width:40px;
            color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
        }
    }
    .nav-item:hover{
        background-color: var(--gray);
        svg{
            color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
        }
    }
  
`

export const AsidePanel:React.FC = () => {

    const exit = () =>{
    
        localStorage.removeItem('userToken')
        window.location.reload()
        
    }

  return (
    <StyledWrapperAsidePanel>
      <nav className='aside-nav'>
            <ul className='nav-list'>
                <NavLink state='Панель управления' to={ROUTES.USERPAGE} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Панель управления <Panel/></NavLink>
                <NavLink state='Бонусы' to={ROUTES.BONUSESPANEL} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Бонусы <Bonuses/></NavLink>
                <NavLink state='Заказы' to={ROUTES.ORDERPANEL} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Заказы <Order/></NavLink>
                <NavLink state='Загрузки' to={ROUTES.DOWNLOADSPANEL} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Загрузки <Downloads/></NavLink>
                <NavLink state='Адрес' to={ROUTES.LOCATIONPANEL} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Адрес <LocationPanel/></NavLink>
                <NavLink state='Детали профиля' to={ROUTES.USERPANEL} className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item'}>Детали профиля <UserPanel/></NavLink>
                <NavLink to='/registration' className='nav-item' onClick={()=> exit()}>Выход <Exit/></NavLink>
            </ul>
      </nav>
    </StyledWrapperAsidePanel>
  )
}

