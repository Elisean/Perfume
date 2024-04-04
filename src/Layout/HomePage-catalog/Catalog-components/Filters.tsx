import React, { useState } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../.../../../../icons/chevron-down.svg'
import { Button } from '../../../Components/Button/Button'
import { ReactComponent as Closed } from '../../../icons/closed.svg'
import { Brand } from '../Filters-components/Brand'
import { Prices } from '../Filters-components/Prices'
import { Gender } from '../Filters-components/Gender'
import { Notes } from '../Filters-components/Notes'



const FiltersWrapperStyled = styled.section`
    position: relative;
    top: -10px;
    border-radius: 4px;
    background:#211E1C;
    box-shadow: 0px 9px 15px 0px rgba(116, 107, 90, 0.41);
    width:305px;
    padding:70px 0 10px 0;

    .chevron-up{
        transform: rotate(180deg);
        transition: .3s;
    }
    .chevron-down{
        transform: rotate(0);
        transition: .3s;
    }
    @media(max-width:993px){
        left: -17px;
        z-index: 1;
        width:320px;
    }
    @media(max-width:767px){
        left: -17px;
        z-index: 1;
        width:254px;
    }
` 

export const Filters:React.FC<any> = () => {
    const [brandOpen, setBrandOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);
    
  return (
    <FiltersWrapperStyled>
        
       <MainSelect filtersselect={'true'} width='285px' padding='5px 5px 10px' onClick={()=>setBrandOpen(!brandOpen)} >
            <p>Бренд</p>
            <div className={brandOpen ? 'chevron-up' : 'chevron-down'}>
                <Chevron/>
            </div>
       </MainSelect>
        {
            brandOpen ? <Brand/> : ''
        }
       <MainSelect filtersselect={'true'} width='285px' padding='5px 5px 10px' onClick={()=>setPriceOpen(!priceOpen)}>
            <p>Стоимость</p>    
            <div className={priceOpen ? 'chevron-up' : 'chevron-down'}>
                <Chevron/>
            </div>
       </MainSelect>
        {
          priceOpen ? <Prices/> : ''
        }


       <MainSelect filtersselect={'true'} width='285px' padding='5px 5px 10px' onClick={()=>setGenderOpen(!genderOpen)}>
            <p>Пол</p>    
            <div className={genderOpen ? 'chevron-up' : 'chevron-down'}>
                <Chevron />
            </div>
       </MainSelect>

       {
          genderOpen ? <Gender/> : ''
       }   

       <MainSelect filtersselect={'true'} width='285px' padding='5px 5px 20px 5px' onClick={()=>setNotesOpen(!notesOpen)}>
            <p>Ноты</p>    
            <div className={notesOpen ? 'chevron-up' : 'chevron-down'}>
                <Chevron/>
            </div>
       </MainSelect>

       {
          notesOpen ? <Notes /> : ''
       } 
           
        <Button closefilters={'true'} align='center' justify='space-between' padding='5px 15px'>
            Сбросить 
            <Closed/>
        </Button>

    </FiltersWrapperStyled>
  )
}
