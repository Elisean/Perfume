import React, { ChangeEvent, useContext } from 'react'
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { useResize } from '../../../Hooks/useResize';
import { useLocation } from 'react-router-dom';
import FiltersStore from '../../../Store/SegregationStore';

interface IPagination{
  onChangePage:any
}

const StyledPaginate = styled.div`
    margin:45px 0 0 0;
    
    .showFilter{
        margin:50px 0 0 0;
    }
    li{
        color: var(--txt, #BEAE97);
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        margin:10px;
    }

    @media (max-width: 568px) {
        li{
            margin:5px;
        }
       
    }
    .paginate{
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        cursor: pointer;
    }

    .previous,
    .next
    {
       
        a{
            background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border:1px solid #C09E6C;
            border-radius:6px;
            padding:7px 14px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
            font-weight:800;
            cursor: pointer;
            height:auto;
        }
      
    }
    .selected{
        border-radius: 4px;
        background: #B7A08B;
        padding: 10px 18px;
        color:#36332E;
    }  
`

export const Pagination:React.FC<IPagination> = ({onChangePage}) => {
    const filtersContext = useContext(FiltersStore);
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
    const location = useLocation();

    let countPage = 0;

    if(isScreenXxl){
        countPage = 5;
        if(filtersContext.isFilters){
            countPage = 7;
        }
    }else if (isScreenXl){
        countPage = 7;
        if(filtersContext.isFilters){
            countPage = 10;
        }
    }else if (isScreenLg){
        countPage = 7;
        if(filtersContext.isFilters){
            countPage = 10;
        }

    }else if (isScreenMd){
        countPage = 7;
        if(filtersContext.isFilters){
            countPage = 10;
        }
    }
    else if (isScreenSm){
        countPage = 20;
    }else if (width >= 100){
        countPage = 20;
    }

    if(location.pathname === '/manCatalogPage/'){
        countPage = 2;
    }
  
    if(location.pathname === '/womenCatalogPage/'){
        countPage = 2;
    }

    if(location.pathname === '/unisexCatalogPage/'){
        countPage = 2;
    }

    return <StyledPaginate>      
            <div className={filtersContext.isFilters ? `${'showFilter'}`: ''}>
            <ReactPaginate
                className='paginate'
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event:any)=> onChangePage(event.selected + 1)}
                pageRangeDisplayed={1}
                pageCount={countPage}
                previousLabel="<"
                renderOnZeroPageCount={null}/>
            </div>
        </StyledPaginate>
    
}
