import React, { useState } from 'react'
import { Rating } from '../Rating/Rating'
import { Input } from '../Input/Input'
import { MainForm } from '../Main-Form/Main-Form'
import { Button } from '../Button/Button'

interface IFormReview{
  id?:number
}

export const FormReview:React.FC<IFormReview> = (id) => {
  // шаблон комментария 
    const [reviews, setReviews] = useState<{[key:string]: any}>({
        id:"",
        userName: "",
        rating:"",
        userDate: new Date().toLocaleDateString(),
        message: ""
    })

   // метод отправки комментария на бд
  const send = () => {
    try {
      fetch('https://64e6020b09e64530d17f6dd0.mockapi.io/Reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(reviews),
      })
     
    } catch (error) {
      console.error('Error', error)
    }
    
  }
  // получене данных из полей ввода
  const getData = (event : any) =>{
    const newReview = {...reviews}
    newReview[event.target.name] = event.target.value
    newReview.cardsId = id
    setReviews(newReview)
  }

 
  return (
       <MainForm className='modal-form'>
           {/* пока так */}
            <br/> 
            {/* пока так */}
            <label htmlFor="user-name" >
                 Ваше имя
                 <Input type='text' name='userName' className='form-input' placeholder='Ваше имя' value={reviews?.userName} onChange={(event : any)=> getData(event)} />
            </label>
            <div className="modal-form-stars">
                 <Rating name='rating' value={reviews?.rating} onChange={(event : any) => getData(event)}/>
                 Оцените покупку*
            </div>
          
            <label htmlFor='user-review' className='modal-form-review'>
                 отзыв*
                 <textarea name='message' className='review form-input' id='user-review' value={reviews?.message} onChange={(event : any)=> getData(event)}></textarea>
            </label>
         <Button sendbutton={'true'} onClick={send}>Отправить отзыв</Button>
        </MainForm>
 
  )
}
