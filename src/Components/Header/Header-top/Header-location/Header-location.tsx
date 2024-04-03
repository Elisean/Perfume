import React from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer';
import { ReactComponent as LocationSvg } from '../../../../icons/location.svg'
import styled from 'styled-components';

const LocationStyled = styled.div`
  font-family: 'Montserrat', sans-serif;

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
  return (
    <LocationStyled>
      <FlexContainer align='center'>
        <LocationSvg/>
        <p className='location-title'> Ваш Город: Москва </p>
      </FlexContainer>
    </LocationStyled>
  )
}
