import React from 'react'
import { FlexContainer } from '../../../../Containers/Flex-container/FlexContainer'
import { ReactComponent as PhoneSVG } from '../../../../icons/phone-call.svg'
import styled from 'styled-components'

const PhoneStyled = styled.div`
    .header-phone{
        padding: 0 0 0 10px;
    }
    @media (max-width:768px) {
      position:absolute;
      top: -100%;
      left: 0;
  }

`

export const HeaderPhone:React.FC = () => {
  return (
    <PhoneStyled>
    <FlexContainer align='center'>
        <PhoneSVG/>
        <a className='header-phone' href="tel:7(937)1367766" type='phone'>7(937) 136 - 77 - 66</a>
    </FlexContainer>
    </PhoneStyled>
  )
}
