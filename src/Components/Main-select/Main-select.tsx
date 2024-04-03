import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'


export type SelectProps = {
    name?:string
    children?:ReactNode
    textTransform?:string
    padding?:string
    fontSize?:string
    fontWeight?:string
    width?:string
    left?:string
    top?:string
    border?:string
    boxShadow?:string
    Opened?:boolean
    tabIndex?:string
    ref?:any
    selectfilter?:string
    responseselect?:string
    responseselectpop?:string
    cardproductselect?:string
    selectheader?:string
    filtersselect?:string
    brandselect?:string
    isActive?: boolean
    setActive?: (value: boolean) => void
    onMouseEnter?: (event: MouseEvent) => void
    onClick?: (event: MouseEvent) => void
}


const StyledSelectInner = styled.div <SelectProps>`
    position: relative;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || '400'};
    text-transform: ${props => props.textTransform || 'none'};
    padding:${(props) => props.padding || '0'};
    border-radius: 4px;
    box-shadow: ${props => props.boxShadow || 'none'};
    cursor: pointer;
    width:${props => props.width || '0'};
    top:${props => props.top || '0'};
    left:${props => props.left || '0'};
    border: 1px solid transparent;
    z-index:5;
    color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    background: #2B2825;


    &:hover{
        color: var(--black);
        background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
    }
    &:focus{
        border: 1px solid var(--border);
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
    }

    ${props => props.selectfilter && css`
        border: 1px solid var(--border);
        width:90%;
        padding:5px 20px;
    `}

    ${props => props.selectheader && css`
        width: 175px;
        border: 1px solid var(--border);
        box-shadow: 0px 2px 10px 0px rgba(184, 164, 142, 0.40);
        padding:14px 20px;
        font-weight: 600;
        text-transform: uppercase;
    `}


    ${props => props.responseselect && css`
        @media (max-width:993px) {
            left: -10px;
            width:305px;
        
        }
        @media (max-width:768px) {
            max-width:240px;
            left: -10px;
        }
        @media (max-width:568px) {
            width:155px;
            right:0;
            position: static;
            display: flex;  
            justify-content: center;
            padding: 0;
        }
         
    `}
     
    ${props => props.filtersselect && css`
        display: flex;
        flex-direction: column;
        background-color: transparent;
        font-size:18px;
        &:hover{
            color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
            background:transparent;
    }
        &:focus{
            border: 1px solid transparent;
            box-shadow: none;
    }
        @media (max-width: 768px) {
            width: 240px;
        }
    `}

    ${props => props.brandselect && css`
        font-family: 'Open Sans', sans-serif;
        border: 1px solid var(--border);
        font-size:18px;

        @media (max-width: 768px) {
            width: 220px;
            padding:0 10px;
        }
        @media (max-width: 568px) {
            width: 340px;
            padding:0 10px;
            margin:0 auto;
        }

    `}

    ${props => props.responseselectpop && css` 
        font-size:17px;
        @media (max-width:993px) {
            left: 10px;
        }
        @media (max-width:768px) {
            width:240px;
            padding:10px 15px;
            
        }
        @media (max-width:568px) {
            width:150px;
            padding:10px 5px;
            font-size:12px;
            background: transparent;
            display: flex;  
            justify-content: center;
            order: -1;
            left:0;
            
            svg{
                width:30px;
                height:30px;
            }
            &:hover{
                background: transparent;
                color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
                border: 1px solid transparent;
                box-shadow: none;
            }
            &:focus{
                background: transparent;
                color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
                border: 1px solid transparent;
                box-shadow: none;
            }
        }
        
    `}

    ${props => props.cardproductselect && css`
        font-family: 'Open Sans', sans-serif;
        width:850px;
        border-radius: 4px;
        border: 1px solid #D6B88D;
        padding: 5px 10px;
        color: var(--txt, #BEAE97);
     
      @media (max-width: 880px) {
        max-width:100%;
      }
      @media (max-width: 568px) {
        width:270px;
        max-width: 105%;
      }
    `}
`


export const MainSelect:React.FC<SelectProps> = (props:SelectProps) => {
  return (
    <StyledSelectInner {...props} tabIndex='0'>
        <FlexContainer justify='space-between' align='center'>
            {props.name}
            {props.children}
        </FlexContainer>
    </StyledSelectInner>
  )
}



