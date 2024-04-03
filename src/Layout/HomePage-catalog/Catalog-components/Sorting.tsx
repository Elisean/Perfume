import { styled } from 'styled-components'
import React, { useContext } from 'react'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { Button } from '../../../Components/Button/Button'
import { observer } from 'mobx-react-lite'
import SegregationStore from '../../../Store/SegregationStore'


export const sortItems = [
 'По популярности',
 'По рейтингу',
 'Сортировка от последнего',
 'Цена по убыванию',
 'Цена по возрастанию',
]


const SortWrapper = styled.div`
    position: absolute;
    z-index:2;
    top: 65px;
    left: 325px;
    @media (max-width:993px) {
      left:315px;
    }
    @media (max-width:768px) {
      left: 250px;
    }
    @media (max-width:568px) {
      left: 0;
      top:60px;
    }

`


export const Sorting:React.FC<any> = observer((props) => {

  const segregationContext = useContext(SegregationStore);

  const getSortItem = (sortItem:string) =>{
    props.getSort(sortItem)
    segregationContext.priceDescending(sortItem)
  }
 
  return (
    <SortWrapper>
      <FlexContainer direction='column'>
       {
        sortItems.map((sortItem, index) => (
          <Button  key={index} btnsorting={'true'} tabIndex={0} onClick={(event:any)=> getSortItem(event.target.textContent)}>{sortItem}</Button>
        ))
       }
      </FlexContainer>
    </SortWrapper>
  )
})
