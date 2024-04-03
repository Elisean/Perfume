import React, {ReactNode, useRef, useEffect} from 'react'
import styled from 'styled-components';
import { createPortal } from "react-dom";
import { ReactComponent as ModalClosed } from '../../icons/modal-closed.svg';


interface IModal{
  onClose?: any;
  isOpen?: any;
  children:ReactNode;
  modalTitle:string;
}

const StyledModalWrapper = styled.section`
   position: fixed;
   top: 0;
   left: 0;
  z-index:6;

  .modal{
    position: absolute;
    top:0;
    left:0;
    z-index:5; 
    width: 100vw;
    height: 100vh;
  }

  .modal::after{
    content: "";
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #00000040;
    left: 0;
    top:0;
  }
  .modal-inner{
    position: absolute;
    background-color: #2B2825;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index:5;
    padding:30px;
    max-width:600px;
    min-width:600px;
  }
  .modal-title{
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .modal-closed{
    position: absolute;
    right:10px;
    top:10px;    
  }
  .modal-bonuses-wrapper{
    display: flex;
    flex-direction: row;
    margin:20px 0 0 0;
    background-color: var(--bg-color);
    padding: 10px;
  }
  .modal-bonuses-description{
    margin:0 0 0 20px;
    line-height:25px;
  }
  .modal-bonuses-icon{
    margin:10px 0 0 0;
  }
  .modal-rating{
    display: flex;
    align-items: center;
    margin:20px 0 0 0;
  }
  .star-icon{
    margin:0 10px 0 0;
    color: var(--bg-color);
  }
  .star-icon:hover{
    color: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
  }
  .rating-title{
    margin:0 0 0 25px;
  }
  .modal-form-stars{
    display: flex;
    align-items: center;
    margin:20px 0 20px 0;
  }
  .modal-form-review{
    display: flex;
    flex-direction: column;
  }
  .review{
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid#565147;
    width:100%;
    height:169px;
    margin:6px 0 0 0;
    resize: none;
  }
  @media (max-width:768px) {
    .modal-inner{
      min-width:540px;
  }
  }
  @media (max-width:568px) {
    .modal-inner{
      min-width:280px;
      padding:20px;
    }
    .modal-bonuses{
      font-size:14px;
    }
    .review{
      height:100px;
    }
}

`

export const Modal:React.FC<IModal> = ({isOpen, onClose, children, modalTitle } : IModal) => {

  const handleClose = () => onClose();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyPress = (event:any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

  
    if (isOpen && typeof window !== "undefined") {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyPress);
    }

  
    return () => {
      if (isOpen && typeof window !== "undefined") {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [isOpen, onClose]);

  return (
    isOpen &&
    createPortal(
      <StyledModalWrapper> 
      <div className='modal'>
       
        <main ref={modalRef} className='modal-inner'>
          <h2 className='modal-title'>{modalTitle}</h2>          
      
          {children}
          <button className='modal-closed' onClick={()=> handleClose()}>
            <ModalClosed/>
          </button>
          </main>
          
      </div>
    </StyledModalWrapper>,
    document.body
    )
   
  )
}
