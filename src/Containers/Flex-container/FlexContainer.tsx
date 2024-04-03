import  styled, { css }  from "styled-components"
import { ContainersTypes } from "../Containers-types";




const FlexContainerStyled = styled.div<ContainersTypes>`
    display:flex;
    flex-direction:${props => props.direction || 'row'};
    align-items:${props => props.align || 'stretch '};
    justify-content:${props => props.justify || 'flex-start'};
    flex-wrap:${props => props.wrap || 'nowrap'};
    flex:${props => props.flex || '0 0 auto'};

    ${props => props.response && css`
        @media (max-width:768px) {
            flex-direction: column;
        }
    }
    `}

    ${props => props.footerresponse && css`
        @media (max-width:997px) {
            flex-wrap: wrap;
        }
    }
    `}
    ${props => props.filtersresponse && css`
        @media (max-width:568px) {
            flex: 0 0 auto;
            flex-wrap: wrap;
        }
    }
    `}
    ${props => props.cardResponse && css`
        @media (max-width:568px) {
           flex-direction: column;
        }
    }
    `}
    ${props => props.btnsCardResponse && css`
        @media (max-width:568px) {
           justify-content: space-between;
           width:260px;
        
        }
    }
    `}

    ${props => props.registrationresponse && css`
        @media (max-width:768px) {
           flex-wrap:wrap;
        }
    }
    `}
    ${props => props.cardslikesresponse && css`
        @media (max-width:1300px) {
           flex-wrap:wrap;
           gap:10px;
        
        }
    } 
    `}
`

export const FlexContainer:React.FC<ContainersTypes> = (props)=>{
    return <FlexContainerStyled {...props}/>
}