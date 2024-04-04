import styled, {css} from 'styled-components';
import { ContainersTypes } from "../Containers-types";

const StyledContainer = styled.div<ContainersTypes>`
    width:${props=> props.width || '100%'};
    max-width:${props=> props.maxWidth || '1310px'};
    margin:${(props)=>props.margin || '0 auto'};
    padding:${(props) => props.padding || '0 15px'};
    position: ${(props)=> props.position || 'static'};
   
    ${props => props.response && css`
        @media(max-width:1300px){
            max-width:985px;
        }
        @media(max-width:993px) {
            max-width:768px;
        }
    `}
    ${props => props.footerresponse && css`
        @media (max-width: 1100px) {
            max-width:997px;
        }
        @media (max-width: 997px) {
            max-width:768px;
        }
    `}
    ${props => props.catalogresponse && css`
        @media(max-width:1300px){
            max-width:985px;
        }
        @media(max-width:993px) {
            max-width:768px;
        }
        @media(max-width:768px) {
            max-width:568px;
        }
        @media(max-width:568px) {
            max-width:335px;
        }
    `}
    
    ${props => props.cardResponse && css`
    
        @media(max-width:768px) {
            max-width:568px;
          
        }
        @media(max-width:568px) {
            width:294px;
            margin:0 auto;         
        }
    `}

    
`

export const MainContainer:React.FC<ContainersTypes> = (props:ContainersTypes) => {
    return <StyledContainer {...props}/>
}
