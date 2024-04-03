import React, { ReactNode } from 'react'

import styled from 'styled-components';





interface IForm{
    placeholder?: string;
    className?: string;
    brandform?:string;
    onChange?: any;
    children?:ReactNode;
    action?:any
}

const FormWrapperStyled = styled.form<IForm>`
    position: relative;

    .form-input{
        border:2px solid #514941;
        padding:15px 50px 15px 20px;
        width:100%;
        border-radius:4px;
        color: var(--text);
        margin:0;
 
        
        &:focus{
            outline: none;
            border-radius: 4px;
            border: 2px solid var(--border);
            box-shadow: 0px 0px 20px 0px rgba(160, 149, 133, 0.20);
        }
        &::placeholder{
            color: #867A68;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 140%;
        }
        &:hover{
            outline: none;
            border-radius: 4px;
            border: 2px solid var(--border);
            box-shadow: 0px 0px 20px 0px rgba(160, 149, 133, 0.20);
  
        }
}
    .form-btn-search{
        position: absolute;
        right:30px;
        top:13px;
    }
    .form{
        margin:10px 0 4px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }   

`


export const MainForm:React.FC<IForm> = ({children, action}) => {
  return (
    <FormWrapperStyled action={action} className='form'>
            {children}
    </FormWrapperStyled>
  )
}


