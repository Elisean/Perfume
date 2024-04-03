import React from 'react';
import {ReactComponent as Logo} from '../../../../icons/logo.svg';
import styled from 'styled-components';
import { ROUTES } from "../../../../Utils/routes";
import { Link } from "react-router-dom";


const LogoStyled = styled.div`
  position:relative;
  z-index:1;
 
  
@media (max-width:768px) {
  position:absolute;
  left:50%;
  top:0;
  transform:translate(-50%, 0)
}
`

export const HeaderLogo:React.FC = () => {
  return (
    <LogoStyled>
      <Link to={ROUTES.HOME}>
        <Logo/>
      </Link>
    </LogoStyled>
  )
}
