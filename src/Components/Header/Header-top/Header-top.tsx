import React from 'react'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { HeaderLocation } from '../Header-top/Header-location/Header-location'
import { HeaderMenu } from '../Header-top/Header-menu/Header-menu'
import { HeaderPhone } from '../Header-top/Header-phone/Header-phone'




export const HeaderTop:React.FC = () => {
  return (
    <FlexContainer align='center' justify='space-between'>
            <HeaderLocation/>
            <HeaderMenu/>
            <HeaderPhone/>
    </FlexContainer>
  )
}
