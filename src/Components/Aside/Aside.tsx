import React, { ReactNode, useContext } from 'react'
import { styled } from 'styled-components'
import { createPortal } from 'react-dom'

import SegregationStore from '../../Store/SegregationStore'


interface IAside{
  children? : ReactNode
}

const AsideStyledWrapper = styled.section`
    position: fixed;
    min-width:100vw;
    min-height:100vh;
    z-index:5;

       /* Внешний класс */
    .before-aside{
      background-color: var(--bg-color);
      width:380px;
      margin: auto;
      height:100vh;
      overflow:scroll;
      margin:90px auto 0 auto;
      padding:0 0 80px 0;
      @media (max-width:400px) {
        width:300px;
      }
    }
    .before-aside-description{
      font-family: 'Montserrat', sans-serif;
      font-size:16px;
      padding:15px;
      margin:10px 0 0 0;    
    }
     /* Внешний класс */
    
  .aside-inner{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
      z-index:5;
  }
  .show-aside{
    min-width:100%;
    min-height:100%;
    position:fixed;
    top:0;
    left:0;
    background-color: #00000075;
    transition:0.5s;
  
  }
  .hide-aside{
    min-height:100%;
    position:fixed;
    top:0;
    left:100%;
    background-color: transparent;
    transition:0.5s;
  }

` 


export const Aside:React.FC<IAside> = (props:IAside) => {

  const segregationContext = useContext(SegregationStore);

  const body = document.body;
  segregationContext.isFilters ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    createPortal(
      <AsideStyledWrapper>
   
        <div className={segregationContext.isFilters ? 'show-aside' : 'hide-aside'}>
          {props.children}
        </div>

    </AsideStyledWrapper>,document.body
    )
   
  )
}