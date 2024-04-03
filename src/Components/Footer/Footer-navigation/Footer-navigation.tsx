import React from 'react'

import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { ReactComponent as Location } from '../../../icons/footer-location.svg'
import { ReactComponent as Time } from '../../../icons/footer-time.svg'
import { ReactComponent as Whatsapp } from '../../../icons/footer-whatsapp.svg'
import { ReactComponent as Telegram } from '../../../icons/footer-telegram.svg'
import { ReactComponent as Email } from '../../../icons/footer-email.svg'
import { ReactComponent as Self } from '../../../icons/footer-self-emloyed.svg'





const FooterNavigationStyled = styled.nav`
  .nav-item{
    margin:27.5px 0 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    .location{
        position: relative;
        z-index:1;
        &::before{
            content: '';
            display: block;
            width: 8px;
            height:8px;
            background-color: #37332F;
            position: absolute;
            z-index:2;
            border-radius:50%;
            top:13px;
        }
    }



  }
  .item-icon{
    margin:0 20px 0 0;
    display: flex;
    width:40px;
    height:40px;
    border-radius:50%;
    justify-content: center; 
    align-items: center;
    background-color: #37332F;
    color: #37332F;
   
    
    svg{
        color:var(--text);
    }
  } 
  
    .time{
        position: relative;
        svg{
            width: 12px;
            height: 20px;
            position: absolute;
            left: 11px;
            top:9px;
        }
    }
    .whatsapp{
        position: relative;
        svg{
            width: 21px;
            height: 21px;
            position: absolute;
            left: 10px;
            top:9px;
        }
    }
    .email{
        position: relative;
        svg{
            width: 20px;
            height: 18px;
            position: absolute;
            left: 10px;
            top:9px;
        }  
    }
    .nav-item:hover{
        .item-icon{
            background: linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%);
            -webkit-text-fill-color: transparent;
            svg{
                color: #37332F;
            }
        }
        .location{
            svg{
                color:#37332F;
            }

            &::before{
            background-color: var(--text);
    
            }
        }
    }
   
    .nav-list:last-child{
        margin:0 0 0 10%;
    }

    @media (max-width:1100px) {
        .nav-list:last-child{
            margin:0;
    }

    @media (max-width:997px) {
        .nav-item{
            width:300px;
            
            br{
                display: none;
            }
        }
        .self{
            width:50px;
        }
        .location{
            width:75px;
        }
    }
    @media (max-width:630px) {
        .nav-list{
            margin:0 auto;
        }
        .nav-list:last-child{
            margin:0 auto;
        }
    }
    @media (max-width:325px) {
        .nav-item{
            max-width:250px;
            font-size:14px;
        }
        .item-icon{
            margin:0 10px 0 0;
        }
    }



}
`


export const FooterNavigation:React.FC = () => {
  return (
    <FooterNavigationStyled>
        <FlexContainer footerresponse={'true'} justify='space-between'>
        <ul className='nav-list'>
            <li className='nav-item'> <span className='item-icon location'> <Location/> </span> г. Астрахань: ул. Свердлова, 106; ул. Победы <br /> 55А, пав. 10.</li>
            <li className='nav-item'> <span className='item-icon time'> <Time/> </span> Ежедневно с 9:00 до 18:00</li>
        </ul>
        <ul className='nav-list'>
            <li className='nav-item'> <span className='item-icon whatsapp'> <Whatsapp/> </span> Мы в Whatsapp</li>
            <li className='nav-item'> <span className='item-icon'> <Telegram/> </span> Мы в Telegram</li>
            <li className='nav-item'> <span className='item-icon email'> <Email/> </span> parfumpomotivam@gmail.com</li>
        </ul>
        <ul className='nav-list'>
            <li className='nav-item'> <span className='item-icon self'> <Self/> </span> ИП РАГИМОВА А.М.К. <br /> ИНН 510704693888</li>
        </ul>
        </FlexContainer>
    </FooterNavigationStyled>
  )
}
