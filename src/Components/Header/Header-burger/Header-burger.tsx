import React from 'react'
import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import  BurgerLogo from '../../../icons/logo.svg'
import { HeaderLocation } from '../Header-top/Header-location/Header-location'
import { HeaderPhone } from '../Header-top/Header-phone/Header-phone'
import { HeaderMenu } from '../Header-top/Header-menu/Header-menu'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../Utils/routes'


const HeaderBurgerWrapper = styled.div`

@media (max-width:768px) {
  .header-bg{
      content:'';
      width: 100%;
      height: 100vh;
      position: fixed;
      top:0;
      left:0;
      background-color: var(--black);
      opacity:.5;
      transition:.5s;
    }
    .header-bg-closed{
      content:'';
      width: 100%;
      height: 100vh;
      position: fixed;
      top:0;
      left: -100%;
      background-color: var(--black);
      transition:.5s;
    }
}
 

`

const BurgerStyled = styled.div`
   
     display:none;

    @media (max-width:768px) {
      display:block;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid var(--border);
      background: #2B2825;
      position: fixed;
      box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
      z-index:3;
      top:30px;
  
 
      .burger-item{
        display: block;
        width:22px;
        height:2px;
        background: var(--border);
        margin:8px 0 0 0;
        transition:.5s all;
        border-radius: 4px;

        &:first-child{
          margin:8px 0 0 0;
        }
        &:nth-child(2){
          width:16px;
          position: relative;
          left: -3px;
        }
      }
      .burger-open{
          display: block;
          width:22px;
          height:2px;
          background: var(--border);
          margin:8px 0 0 0;
          transition:.5s all;
          border-radius: 4px;

        &:first-child{
          margin:18px 0 0 0;
          transform:rotate(-45deg)
        }
        &:nth-child(2){
         opacity:0;
         visibility:hidden;
         width:0;
        }
        &:last-child{
          margin:-12px 0 0 0;
          transform:rotate(45deg)
        }
      }
    }

`
const HeaderBurgerMenuStyled = styled.div`

  display: none;

  .burger-logo{
      display:none;
  }
  
  @media (max-width:768px) {
    display: block;
    position: fixed;
    top:0;
    left: -100%;
    width: 100%;
    height: 100vh;
    z-index:2;

    .burger-logo{
      display:block;
    }
    .menu-inner{
      width: 415px;
      height:405px;
      background-color: var(--bg-color);
      position:fixed;
      top:0;
      left:0;
      transition:.5s;
      z-index:3;
    }
    .menu-inner-closed{
      width: 415px;
      height:405px;
      background-color: var(--black);
      position:fixed;
      top:0;
      left: -100%;
      transition:.5s;
    } 
    .burger-nav{
      width:92%;
      box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
      margin:10px 0 0 0;
    }
    .navigation-item{
      border-radius: 4px;
      background: #2B2825;
      box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
      text-align: left;
      font-family: 'Open Sans', 'sans-serif';
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
      position: relative;
      height: 44px;
    }
    .navigation-item:hover{
      background: linear-gradient(95deg, #C09E6C -5.68%, #FFEBCC 41.36%, #BF936B 104.69%);
      color: #3C3428; 
      font-weight: 700;
      font-family: 'Open Sans', 'sans-serif';
    }
    .nav-link{
      position: absolute;
      width: 100%;
      height: 44px;
      padding:12px;
    }
    .burger-location{
      position: absolute;
      width:200px;
      top: 60%;
      left:0;
      transform: translate(50%, 50%);
    }
    .burger-phone{
      position:absolute;
      width:200px;
      top: 68%;
      left:0;
      transform: translate(50%, 50%);
    }
    .burger-menu{
      position: absolute;
      top: 77%;
      left:34%;
    }
  }

  @media (max-width:425px) {
    .menu-inner{
      width: 315px;
      height:405px;
      background-color: var(--bg-color);
      position:fixed;
      top:0;
      left:0;
      transition:.5s;
      z-index:3;
    }
    .menu-inner-closed{
      width: 0;
    }
    .burger-location{
      left: -30px;
    }
    .burger-phone{
      left: -30px;
    }
    .burger-menu{
      top: 77%;
      left:32%;
    }
  }
    
`

export const HeaderBurger:React.FC = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const body = document.body;
  openBurger ? body.classList.add('overflow') : body.classList.remove('overflow');
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleClosed = (event:any) =>{
      if(wrapRef.current && wrapRef.current.contains(event.target)){
        setOpenBurger(openBurger)
      }
  }
  
  useEffect(() =>{
      document.addEventListener('mousedown', handleClosed)
  }, [])


  return (
    <>
    <HeaderBurgerWrapper>
      <div ref={wrapRef} className={openBurger ? 'header-bg' : 'header-bg-closed'} ></div>
        <BurgerStyled onClick={()=> setOpenBurger(!openBurger)}>
            <span className={openBurger ? 'burger-open' : 'burger-item'}></span>
            <span className={openBurger ? 'burger-open' : 'burger-item'}></span>
            <span className={openBurger ? 'burger-open' : 'burger-item'}></span>
        </BurgerStyled>
      <HeaderBurgerMenuStyled>
        <div  className={openBurger ? 'menu-open': 'menu-closed'}>
          <div className={openBurger ? 'menu-inner': 'menu-inner-closed'}>
            <Link to={ROUTES.HOME}>
              <img className='burger-logo' src={BurgerLogo} alt="logo" />
            </Link>
          
             <nav className='burger-nav'>
                <ul className='nav-list'>
                  <li className='navigation-item'><Link to={ROUTES.MANCATALOGPAGE} className='nav-link'>Мужские</Link></li>
                  <li className='navigation-item'><Link to={ROUTES.WOMENCATALOGPAGE} className='nav-link'>Женские</Link></li>
                  <li className='navigation-item'><Link to={ROUTES.UNISEX} className='nav-link'>Унисекс</Link></li>
                </ul>
             </nav>
             <div className='burger-location'>
              <HeaderLocation/>
             </div>
             <div className='burger-phone'>
              <HeaderPhone/>
             </div>
             <div className='burger-menu'>
              <HeaderMenu/>
             </div>
          </div>
        </div>
      </HeaderBurgerMenuStyled>

    </HeaderBurgerWrapper>
     
    </>
    
  )
}
