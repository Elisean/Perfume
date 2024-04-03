import React from 'react'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { SelectCards } from './Catalog-components/Select-cards'
import { CatalogCard } from './Catalog-components/Catalog-card/Catalog-card'

interface IHomePage{
  search?:string
}

export const HomePageCatalog:React.FC<IHomePage> = () => {
  return (
  
      <MainContainer catalogresponse={'true'}>
        <AsideTitle response={'true'}>Каталог</AsideTitle>
        <SelectCards />
        <CatalogCard />
      </MainContainer>
    
  )
}

