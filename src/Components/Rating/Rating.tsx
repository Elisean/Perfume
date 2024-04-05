import React, {useState} from 'react'
import { ReactComponent as Star } from '../../icons/stars-icon.svg';
import styled from 'styled-components';


interface IRating{
  onChange?:any
  name?:any
  value?:any
  activeColor?:any
}

const RatingStarsStyled = styled.div`
  margin:0 20px 0 0;

    input[type=radio]{
        display: none;
    }
    .rating-star{
        cursor: pointer;
    }
    @media (max-width:568px) {
      .rating-star{
        width:18px;
      }
        margin:0 15px 0 0;
    }

`
export const Rating:React.FC<IRating> = ({name, onChange}) => {
    const [rating, setRating] = useState<any>(null)
    const [hover, setHover] = useState<any>(null)

  const changeRating = (event:any) =>{
    setRating(event.target.value)
  }
  return (
    <RatingStarsStyled>
        {[...Array(5)].map((_, index) => {
            const currentRating = index + 1
          return (
            <label>
                <input
                 type="radio"
                 name={name}
                 value={currentRating}
                 onClick={(event:any) => changeRating(event)}
                 onChange={(event:any) => onChange(event)}
              
                 />
    
                <Star 
                    className='rating-star'
                    color={currentRating <= (hover || rating) ? "#FFEBCC" : "#211E1C"} 
                    onMouseEnter={()=> setHover(currentRating)}
                    onMouseLeave={()=> setHover(null)}
                />
            </label>
          )
        })}
    </RatingStarsStyled>
  )
}
