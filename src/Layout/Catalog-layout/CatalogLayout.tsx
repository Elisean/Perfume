import React, { useState, useEffect } from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Skeleton } from '../HomePage-catalog/Catalog-components/Catalog-card/Skeleton-catalog-card'
import { Card } from '../../Components/Card/Card'
import { Pagination } from '../HomePage-catalog/Catalog-components/Pagination'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'



interface ICatalogLayout{
    title?:string
    cards?:any
    filter?:string
    isLoading?:boolean
}



const StyledLayoutWrapper = styled.section`

  .inner-page{
    display: grid;
    grid-template-columns: repeat(4, 305px);
    grid-template-rows: repeat(3, 500px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media(max-width:1300px){
      display: grid;
      grid-template-columns: repeat(3, 305px);
      grid-template-rows: repeat(3, 500px);
      justify-content:center;
    }
    @media(max-width:993px){
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
    }
    @media(max-width:768px){
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 470px);
    }
    @media(max-width:568px){
      display: grid;
      grid-template-columns: repeat(1, 300px);
      grid-template-rows: repeat(3, 520px);
    }
   
  }
`

export const CatalogLayout:React.FC<ICatalogLayout> = observer(({filter,title}) => {

   
    const [cards, setCards] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const countCards = 12;
    
 

  useEffect(() => {
    fetch(`https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?filter=${filter}&`)
    .then((res) => res.json())
    .then((data) => {
        setIsLoading(false)
        setCards(data)
    });

}, [currentPage, countCards]);


  return (
     <StyledLayoutWrapper>
        <Header/>
            <MainContainer>
            <AsideTitle responselayout={'true'}>{title}</AsideTitle>
              <div className='inner-page'>
              {
                isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
                          : cards.map((card:any, index:number) => (   
                          <Card param={card} key={index} />
                  )
                )
              }
              </div>           
            </MainContainer>
        <Footer/>
     </StyledLayoutWrapper>
  )
})




