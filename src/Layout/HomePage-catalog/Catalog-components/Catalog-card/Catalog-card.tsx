import React, { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Pagination } from '../Pagination';
import { useResize } from '../../../../Hooks/useResize';
import { Skeleton } from './Skeleton-catalog-card';
import { Card } from '../../../../Components/Card/Card';
import { observer } from 'mobx-react-lite';
import { scrollTop } from '../../../../Utils/scrollTop';
import SegregationStore from '../../../../Store/SegregationStore';


const StyledCatalogWrapper = styled.div`
  margin:10px 0 0 0;
    .filters-empty{
      font-weight:700;
      text-align:center;
    }
   .filterOpen{
      display: grid;
      grid-template-columns: repeat(3, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: flex-end;  
  }
  .filterClosed{
      display: grid;
      grid-template-columns: repeat(4, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
  }
  .filter-notfound{
    font-size:30px;
    width:800px;
    justify-content:center;
    display:flex;
    align-items:center;
    height:400px;
  }

  @media (max-width: 1300px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(3, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
  }
  
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: flex-end;  
  }
  }

  @media (max-width: 993px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
      
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 305px);
      grid-template-rows: repeat(3, 500px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
@media (max-width: 768px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 470px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(2, 240px);
      grid-template-rows: repeat(3, 470px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
@media (max-width: 568px) {
    .filterClosed{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 520px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;
  }
  .filterOpen{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 520px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-content: center;  
  }
}
`

export const CatalogCard:React.FC<any> = observer(()=>  {
  const segregationContext = useContext(SegregationStore)
  const [cards, setCards] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
  
  const [isLoading, setIsLoading] = useState(true);
  

  
// число карточек при изменении ширины экрана
  let countCards = 0;

    if(isScreenXxl && !segregationContext.isFilters){
      countCards = 12;
    }else if (isScreenXxl && segregationContext.isFilters){
      countCards = 9;
    }else if(isScreenXl && !segregationContext.isFilters){
      countCards = 9;
    }else if(isScreenXl && segregationContext.isFilters){
      countCards = 6;
    }else if(isScreenLg && !segregationContext.isFilters){
      countCards = 6;
    }else if(isScreenLg && segregationContext.isFilters){
      countCards = 6;
    }else if(isScreenMd && !segregationContext.isFilters){
      countCards = 6;
    }else if(isScreenMd && segregationContext.isFilters){
      countCards = 6;
    }else if(isScreenSm && segregationContext.isFilters){
      countCards = 3;
    }else if(isScreenSm && !segregationContext.isFilters){
      countCards = 3;
    }else if(width >= 100 && segregationContext.isFilters){
      countCards = 3;
    }else if(width >= 100 && !segregationContext.isFilters){
      countCards = 3;
    }
// число карточек при изменении ширины экрана

  useEffect(() => {  

    segregationContext.currentProduct.length === 0 && segregationContext.segregatioProducts.length === 0 ? // при первой загрузке оба параметра равны нулю 

    fetch(
      `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors?page=${currentPage}&limit=${countCards}&`
    )
    .then((res) => res.json())
    .then((data) => {
          setCards(data)
          setIsLoading(true)
          
          setTimeout(()=>{
            setIsLoading(false)
      
          }, 1500)      
     })  :  setCards(segregationContext.currentProduct)
  }, [segregationContext.currentProduct, currentPage]); // зависимости для перерендера карточек

 
  const changeCurrentPage = (number:number) =>{
    setCurrentPage(number) // функция для отрисовки пагинации
    scrollTop(1900); // функция скрола при использовании пагинации
  }
  return (
    <>
    <StyledCatalogWrapper>
    <div className={segregationContext.isFilters ? 'filterOpen' : 'filterClosed'}>
        {
        segregationContext.currentProduct.length === 0 && segregationContext.segregatioProducts.length !== 0 ? <div className='filters-empty'>Странно, но ничего нет! Попробуйте изменить критерии поиска</div> : // если продуктов по выбранным кретериям нету в бд то предупреждение
          isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) // До загрузки продуктов покажи скелетон
                    : cards.map((card:any, index:number) => ( // Загрузка продуктов
                  <Card param={card} key={index} /> // Отображение продуктов
            ) 
          )
        }
            
    </div>
    </StyledCatalogWrapper>
   
    {
      segregationContext.segregatioProducts.length !== 0 ? '' : <Pagination onChangePage={(number:number) => changeCurrentPage(number)}/> 
    } 
    </>
  )
}
)





     