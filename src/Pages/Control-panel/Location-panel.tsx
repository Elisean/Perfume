import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'
import { LocationForm } from './Location-form/LocationForm'
import { LocationUserData } from './Location-form/LocationUserData'
import styled from 'styled-components'

const StyledLocationPanelWrapper = styled.section`
  .locationPanel-inner{
    margin:0 0 0 20px;
  }
  .location-description{
    margin:20px 0 0 0;
  }
  .location-description-none{
      display:none;
  }
  .add-location{
    margin:20px 0 0 0;
    font-size:20px;
  }
  .location-add-address{
    margin:20px 0 0 0;
    color:var(--text);
    text-decoration:underline;
  }
  .location-add-address-none{
    display:none;
  }
`

export const LocationPanel:React.FC = () => {

  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [userData, setAuthUser] = useState<any>([])

  useEffect(()=>{
    fetch('https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Users')
    .then((res) => res.json())
    .then((data) => setAuthUser(data))
  }, [])

  
  const usersNames = userData.map((user:any, index:number)=>{
    return user.userName
  })
  return (
    <StyledLocationPanelWrapper>
    <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>
        <FlexContainer>
          <AsidePanel/> 
          <div className='locationPanel-inner'>
              <AsideTitle>Адрес</AsideTitle>
              {
                usersNames ? <LocationUserData/> : (
                  <>
                  <p className={openEditAddress ? "location-description-none" : "location-description"}>Следующие адреса будут использованы при оформлении заказов по-умолчанию</p>
                  <h2 className='add-location'>Платёжный адрес:</h2>
                  <button className={openEditAddress ? "location-add-address-none" : "location-add-address"} onClick={()=> setOpenEditAddress(!openEditAddress)}>Добавить</button>
                  </> 
                ) 
              }
              {
                openEditAddress && <LocationForm/>
              }
          
          </div>
        </FlexContainer>
      </MainContainer>
      <Footer/>  
    </StyledLocationPanelWrapper>
  )
}

