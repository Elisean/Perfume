import React, { useContext } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import checked from '../../../icons/checked.svg';
import { observer } from 'mobx-react';
import { ReactComponent as Arrow } from '../../../icons/arrow.svg'
import SegregationStore from '../../../Store/SegregationStore';


interface IGender{
  getChecked?:any
  getChangeChecked?:any
}


const StyledGender = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
    .title-input{
      display: flex;
      align-items: center;
      margin:0 0 0 5px;
    }
    .input-check{
        width: 24px;
        height: 24px;
        border: 1px solid var(--border);
        border-radius:5px;
        margin:10px;
    }
    .input-check:checked{
        background-image: url(${checked});   
    }
  
    .close-aside{
      display:none;
    }

    @media (max-width:568px) {
      .close-aside{
        display:block;
        background-color: #2B2825;
        width:30px;
        height:25px;
        transform:rotate(90deg);
        border: 2px solid var(--red);
        color:var(--red);
        margin:0 10px 0 0;
    }
      .input-check{
        margin: 10px 10px 10px 10px;
      }
    }

`

export const Gender:React.FC<IGender> = observer(() => {

  const segregationContext = useContext(SegregationStore) // получаем контекст из стора


  const changeGender = (event:any) =>{
    if(event.target.checked){
      segregationContext.getGender(event.target.value)
    }else{
      segregationContext.getGender('false')
    }
  }


  return (
    <StyledGender>
        <FlexContainer direction='column' align='flex-start'>
          <label className='title-input' htmlFor="women">
            <input className='input-check' id='women' type='radio' name='gender' onClick={(event:any)=> changeGender(event)} value={'Женские'}/>
              Женские
          </label>
          <label className='title-input' htmlFor="man">
            <input className='input-check' id='man' type='radio' name='gender' onClick={(event:any)=> changeGender(event)} value={'Мужские'}/>
              Мужские
          </label>
          <label className='title-input' htmlFor="gender">
            <input className='input-check' id='gender' type='radio' name='gender' onClick={(event:any)=> changeGender(event)} value={'Унисекс'}/>
              Унисекс
          </label>
        </FlexContainer>
            <button type='button' className='close-aside'  onClick={()=> segregationContext.setFilters(!segregationContext.isFilters)}><Arrow/></button>        
    </StyledGender>
  )
}) 

