import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer';
import { HeaderLogo } from './Header-logo/Header-logo';
import { HeaderSelect } from './Header-select/Header-select';
import { HeaderSearch } from './Header-search/Header-search';
import { HeaderUser } from './Header-user/Header-user';
import { HeaderBasket } from './Header-basket/Header-basket';
import { HeaderBurger } from '../Header-burger/Header-burger';


const HeaderBottomStyled = styled.div`

  margin:16px 0 0 0;
  @media (max-width:768px) {
    margin: 0;
  }
`





export const HeaderBottom:React.FC = () => {
  return (
    <HeaderBottomStyled>
         <FlexContainer align='center' justify='space-between'>
          <HeaderBurger />
            <HeaderLogo/>
            <HeaderSelect/>
            <HeaderSearch/>
            <HeaderUser/>
            <HeaderBasket/>
        </FlexContainer>
    </HeaderBottomStyled>
  )
}
