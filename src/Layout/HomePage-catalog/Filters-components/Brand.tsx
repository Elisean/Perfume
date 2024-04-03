import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { MainSelect } from '../../../Components/Main-select/Main-select'
import { ReactComponent as Chevron } from '../../../icons/chevron-down.svg'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import { observer } from 'mobx-react-lite'
import { Input } from '../../../Components/Input/Input'
import { ReactComponent as Search } from '../../../icons/search.svg'
import SegregationStore from '../../../Store/SegregationStore'



const brandSearchList = [
    "Acqua di parma",
    "Ajmal",
    "Amouage",
    "Bogart",
    "Britney spears",
    "Bruno Banani",
    "Cacharbel",
    "Gucci",
    "Issey miyake",
    "Hermes"
]


const BrandWrapperStyled = styled.section`
    position: relative;
    
@media (max-width:568px) {
    padding:10px 0 0 0;
    overflow:scroll;
}

.brand-icon{
    transform: rotate(180deg)
}
.brand-search-wrapper{
    border-radius: 4px;
    background:  #211E1C;
    box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    margin:0 12px;
    padding:5px 0 0 0;
    
    @media (max-width:568px) {
        max-width:340px;
        margin:0 auto;
    }
}
.brand-search-list{
    padding:45px 0 0 0;
    height:340px;
    overflow-y: scroll;
}

 ::-webkit-scrollbar{
    width: 16px;
 }
 ::-webkit-scrollbar-track{
    border-radius: 6px;
    background: #1D1A19;
    
 }
 ::-webkit-scrollbar-thumb{
    border-radius: 6px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    border:3px solid #1D1A19;
 }
   
.brand-search-title{
    color: var(--text);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    text-transform: uppercase;
    text-align: left;
    margin:0;
    position: absolute;
    width:80%;
    padding:10px 40px;
    background-color:#211E1C;

    @media(max-width:767px) {
        text-align: center;
        padding:10px 0;
        width:85%;
    }
    @media (max-width:568px) {
        text-align: left;
        padding:10px 30px;
        width:88%;
    }
}
.brand-search-item{
    text-align: left;
    color: var(--text);
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    text-transform: uppercase;
    padding:10px 30px 10px 10px;
    margin:0 30px 0 20px;
    cursor: pointer;
}
.brand-search-item:hover{
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    font-weight: 700;
}

.brand-search-item-active{
    border-radius: 4px;
    background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    color: var(--gray);
    text-align: left;
    font-weight: 700;
    padding:8px 30px 8px 10px;
    margin:0 30px 0 20px;
    cursor: pointer;
    
}
.input-brand{
    margin:6px 0 0 0; 
    width:260px;
    background-color: #1B1816;
    display:flex;
}
`


const filtersBrand = (searchText:string, brandSearchList:string[]) =>{
    if(!searchText) {
        return brandSearchList;
     }
    return brandSearchList.filter((brand:string)=>
        brand.toLowerCase().includes(searchText.toLowerCase())
     );
} 

export const Brand:React.FC = observer(() => {
    const [searchItemActive, setSearchItemActive] = useState(false) // предикат для установки активного класса к элементу
    const [activeIndex, setActiveIndex] = React.useState(-1); // Индекс активного элемента
    const segregationContext = useContext(SegregationStore) // получаем контекст из стора
    const [searchBrandList, setSearchBrandList] = useState(brandSearchList)

    const [searchItemBrand, setSearchItemBrand] = useState<any>('')

    const handleChangeLetters = (event:any) =>{
        setSearchItemBrand(event.target.value);
    }

    const handleChangeBrands = (event: any) => {
        segregationContext.getBrands(event.target.textContent)

        const index = parseInt(event.currentTarget.getAttribute('tabIndex'), 10);
        if (isNaN(index)) return; // Если индекс не числовой, ничего не делаем
    
        // Обновляем состояние активного элемента
        setActiveIndex(index);
        setSearchItemActive(true); // Устанавливаем active для всего списка
      };

    useEffect(()=>{
        const Debounce = setTimeout(()=>{
            const filteredBrands = filtersBrand(searchItemBrand, brandSearchList);
            setSearchBrandList(filteredBrands);
        }, 300)
        return () => clearTimeout(Debounce)
    }, [searchItemBrand])
    
    
       return (
         <BrandWrapperStyled>
                 <MainSelect brandselect={'true'} width='280px' padding='7px 30px'>
                     Все бренды
                     <div className='brand-icon'>
                         <Chevron/>
                     </div>  
                 </MainSelect>
     
                 <div className='brand-search-wrapper'>
                     <MainForm >
                        <Input type="search" placeholder="Найти парфюм.." className='form-input input-brand' onChange={(event:any)=> handleChangeLetters(event)} /> 
                        <button type="submit" className="form-btn-search"><Search/></button>
                     </MainForm>
                     <p className='brand-search-title'>Все</p>
     
                 <ul className='brand-search-list'>
                     {
                         searchBrandList.map((perfume, index)=>(
                             <li className={activeIndex === index ? 'brand-search-item-active' : 'brand-search-item'}
                              data-active={activeIndex === index}
                              tabIndex={index}
                              key={index}
                              onClick={(event:any) => handleChangeBrands(event)}>{perfume}</li>
                         ))
                     }    
                 </ul>
                 </div>
         </BrandWrapperStyled>
       
       )
     }
     
)


