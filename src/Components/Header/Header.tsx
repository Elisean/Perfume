import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { HeaderTop } from './Header-top/Header-top'
import { HeaderBottom } from './Header-bottom/Header-bottom'



const HeaderStyledWrapper = styled.div`

  font-family: 'Montserrat', sans-serif;
  margin:16px 0 0 0;
  
  @media (max-width:768px) {
    margin: 0;
    top: 0;
    background: rgba(63, 58, 51, 0.3);
    backdrop-filter: blur(15px); 
    height:93px;
    padding:28px 0 0 0;
    position: fixed;
    width: 100%;
    z-index:6;
  }

`

export const Header:React.FC = () => {
  return (
    <HeaderStyledWrapper>
        <MainContainer>
          <FlexContainer direction='column'>
            <HeaderTop/>
            <HeaderBottom/>
          </FlexContainer>
        </MainContainer>
    </HeaderStyledWrapper>
  )
}
