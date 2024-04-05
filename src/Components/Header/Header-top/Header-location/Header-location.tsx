import React, { useEffect, useState } from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer';
import { ReactComponent as LocationSvg } from '../../../../icons/location.svg'
import styled from 'styled-components';


const LocationStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
  ::-webkit-scrollbar{
    width: 16px;
 }
 ::-webkit-scrollbar-track{
    border-radius: 6px;
    background: #1D1A19;
    
 }
 ::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    border:3px solid #1D1A19;
 }
  .flex{
    display:flex;
    flex-direction:column;
  }
  .location-title{
    padding: 0 0 0 10px;
    cursor: pointer;
  }
  .location-inner{
    position:relative;
  }
  .open-cities{
    display:flex;
    flex-direction:column;
    top:20px;
    left:-15px;
    position:absolute;
    width:200px;
    height:200px;
    overflow-Y:scroll;
    text-align:left;
    border:1px solid var(--border);
    background-color: var(--bg-color);
    transition:.5s all;
    opacity:1;
    visibility:visible;
    z-index:6;
    @media (max-width:768px) {
      top:160px;
      left:-115px;
    }
    @media (max-width:420px) {
      left:-85px;
    }
  }
  .close-cities{
    display:flex;
    flex-direction:column;
    top:-10000%;
    left:-15px;
    position:absolute;
    width:200px;
    height:200px;
    overflow-Y:scroll;
    opacity:0;
    visibility:hidden;
    transition:.5s all;
    text-align:left;
    z-index:6;
    @media (max-width:768px) {
      left:-115px;
    }
    @media (max-width:420px) {
      left:-85px;
    }
  }
  .cities-item{
    padding:7px 0 8px 15px;
    cursor: pointer;
  }
  .cities-item:hover{
    color: var(--black);
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  }
  @media (max-width:768px) {
    position:absolute;
    top: -100%;
    left: 0;  
  }
`


export const HeaderLocation:React.FC = () => {
  const [isOpenCities, setIsOpenCities] = useState(false);
  const [initialCity, setInitialCity] = useState('Москва')
  const [city, setSity] = useState([]);


  useEffect(()=>{
    fetch('https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Cities')
    .then((res) => res.json())
    .then((citiesData:any) => {
      setSity(citiesData)
    })
  
  }, [])
 
  const openListCities = (event?:any) =>{

    setIsOpenCities(!isOpenCities)
  }
  const changeCities = (event:any) =>{
    setInitialCity(event)
  }

  return (
    <LocationStyled>
      <FlexContainer align='center'>
        <LocationSvg/>
        <div className='location-inner' onClick={()=> openListCities()}>
          <p className='location-title'> Ваш Город: {initialCity}</p>
          <ul className={isOpenCities ? 'open-cities' : 'close-cities'}>
           {
            city.map((item:string, index:number)=>{
              return <li className='cities-item' key={index}  onClick={((event:any)=> changeCities(event.target.textContent))}>{item}</li>
            })
           }
          </ul>
        </div>
       
      </FlexContainer>
    </LocationStyled>
  )
}

