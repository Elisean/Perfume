import React, { useEffect, useState } from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer';
import { ReactComponent as LocationSvg } from '../../../../icons/location.svg'
import styled from 'styled-components';


const LocationStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
  .flex{
    display:flex;
    flex-direction:column;
  }
  .location-title{
    padding: 0 0 0 10px;
  }
  @media (max-width:768px) {
    position:absolute;
    top: -100%;
    left: 0;  

  }
`


export const HeaderLocation:React.FC = () => {
  const [city, setSity] = useState([]);


  useEffect(()=>{
    fetch('https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Cities')
    .then((res) => res.json())
    .then((citiesData:any) => {
      setSity(citiesData)
    })
  
  }, [])
 
  const openListCities = () =>{
    // остановился тут 
  }

  return (
    <LocationStyled>
      <FlexContainer align='center'>
        <LocationSvg/>
        <div onClick={()=> openListCities()}>
          <p className='location-title'> Ваш Город: Москва</p>
        </div>
       
      </FlexContainer>
    </LocationStyled>
  )
}

