import React, { ReactNode, useContext } from 'react'
import { styled } from 'styled-components'
import { createPortal } from 'react-dom'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'
import FiltersStore from '../../Store/SegregationStore'

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
    min-width:100%;
    min-height:100%;
    position:fixed;
    top:0;
    left:100%;
    background-color: transparent;
    transition:0.5s;
  }

  .show-aside-response{
      position:absolute;
      top:50%;
      left:0;
      color:white;
      transform:rotate(90deg);
      @media (max-width:470px) {
        top:2%;
        left:43%;
      }
      svg{
        width:45px;
        height:45px;
      }
  }
   .hide-aside-response{
      position:absolute;
      top:50%;
      left:75px;
      color:white;
      transform:rotate(-90deg);

      @media (max-width:470px) {
        top:2%;
        left:43%;
      }

      svg{
        width:45px;
        height:45px;
      }
  }
  
` 


export const Aside:React.FC<IAside> = (props:IAside) => {

  const filtersContext = useContext(FiltersStore);

  const body = document.body;
  filtersContext.isFilters ? body.classList.add('overflow') : body.classList.remove('overflow');


  return (
    createPortal(
      <AsideStyledWrapper>
      <div className={filtersContext.isFilters ? 'show-aside' : 'hide-aside'}>
          {props.children}
          <div className='aside-inner'>
            <button type='button' className={filtersContext.isFilters ? 'show-aside-response' : 'hide-aside-response'} onClick={()=> filtersContext.setFilters(!filtersContext.isFilters)}><Arrow/></button>
          </div>
      </div>
    </AsideStyledWrapper>,document.body
    )
   
  )
}