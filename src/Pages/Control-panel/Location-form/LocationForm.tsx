import React, { useState } from 'react'
import { MainForm } from '../../../Components/Main-Form/Main-Form'
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer'
import { Input } from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button/Button'
import styled from 'styled-components'
import { useForm } from '../../../Hooks/useForm'
import { observer } from 'mobx-react-lite'
import { UserData } from '../../../Store/UserDataStore'
import { nanoid } from 'nanoid'

const StyledLocationFormWrapper = styled.section`
  .location-form-inner{
    margin:30px 0 0 0;
  }
  .form-input{
    position:relative;
  }
  .user-surName{
    margin:0 0 0 20px;
  } 
  .user-input{
    width:359px;
  }
  .mb-10{
    margin:0 0 10px 0;
  }
  .area-item{
    padding:10px 0 0 0;

  }
  .countries-list{
    display:block;
    position:absolute;
    top:160px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:500px;
    overflow: auto;
    width:100%;
  }
  .countries-list-none{
    display:none;
  }

  .areas-item{
    display:flex;
    padding:10px;
    align-items:center;
    transition:0.3s all;
    cursor: pointer;
  }
  .areas-item:hover{
    background: var(--gradient, linear-gradient(118deg, #C09E6C 0%, #FFEBCC 42.62%, #BF936B 100%));
    -webkit-text-fill-color: #36332E;
    transition:0.3s all;
    cursor: pointer;
  }
  .areas-list{
    display:block;
    position:absolute;
    top:325px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:500px;
    overflow: auto;
    width:100%;
  }

  .areas-list-none{
    display:none;
  }

  .cities-list{
    display:block;
    position:absolute;
    top:410px;
    left:0;
    z-index:5;
    background-color: var(--bg-color);
    height:auto;
    max-height:345px;
    overflow: auto;
    width:100%;
  }

  .cities-list-none{
    display:none;
  }
 
`
const userStore = new UserData();
  const countId = 8;

export const LocationForm:React.FC = observer(() => {


  // формирование полей для валидации
    const {formData, errors, handleChange} : {formData : any; errors : any; handleChange : any} = useForm({
        name:"",
        surName:"",
        email: "",
        phone: "",
        number:"",
    });
  // формирование полей для валидации

      // формирование полей для отправки на бд

    const [userData, setUserData] = useState<{[key:string]: any}>({
      id:"",
      name:"",
      surName:"",
      country: "",
      address:"",
      area: "",
      city:"",
      postcode:"",
      phone:"",
      email:"",
    })
   
    const getDataUser = async () =>{
      
          // обновление пользовательских данныъх
        await fetch(`https://65e9dfcec9bf92ae3d3a80b3.mockapi.io/Users/${1}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName:formData.name,
            userSurName:formData.surName,
            userCountry:userStore.countryletter,
            userAddress:formData.address,
            userArea:userStore.areaLetter,
            userCity:userStore.cityLetter,
            userPostcode:formData.number,
            userPhone:formData.phone,
            userMail:formData.email,
          }),
        })
           // обновление пользовательских данныъх
        window.location.reload()
    }

     // формирование полей для отправки на бд
  return (
    <StyledLocationFormWrapper>

    <MainForm>

      <div className='location-form-inner'>

      <FlexContainer>
        <label htmlFor="user-name" className='user-name user-input mb-10'>
          Имя *
          <Input type='text' id='user-name' className="form-input" name='name' onChange={handleChange} value={formData.name} error={errors.name} autocomplete={'off'} required/>
        </label>

        <label htmlFor="user-surName" className='user-surName user-input'>
          Фамилия *
          <Input type='text' id='user-surName' className="form-input " name='surName' onChange={handleChange} value={formData.surName} error={errors.surName} autocomplete={'off'} required />
        </label>
      </FlexContainer>


      <label htmlFor="country" className='user-input'>
          Страна / регион*
          <Input type='text' id='country' className="form-input mb-10" name='country' value={userStore.countryletter} autocomplete={'off'} onChange={(event:any) => userStore.openAllCountries(event.target.value)}/>

          <ul className={userStore.isOpenChange ? 'countries-list' : 'countries-list-none'}>
          {
              userStore.isOpenChange && userStore.countries?.map((country:any, index:number)=>{
                  return <li className='areas-item' key={index} onClick={((event:any)=> userStore.insertUserCountry(event.target.textContent))}>{country.name}</li> 
              })
          }
      </ul>

      </label>
    
        <label htmlFor="address" className='user-input'>
        Адрес *
          <Input type='text' id='address' className="form-input mb-10" name='address' autocomplete={'off'} onChange={handleChange} value={formData.address} error={errors.address} />
        </label>

      <label htmlFor="locality" className='user-input'>
        Населенный пункт *
          <Input type='text' id='locality' className="form-input mb-10" value={userStore.areaLetter} autocomplete={'off'} onChange={(event:any) => userStore.openAllAreas(event.target.value)} disabled={userStore.isDisabled} />

          <ul className={userStore.isOpenChangeArea ? 'areas-list' : 'areas-list-none'}>
            {
                userStore.isOpenChangeArea && userStore.areas?.map((area:any, index:number)=>{
                    return <li className='areas-item' key={index} onClick={((event:any)=> userStore.insertUserArea(event.target.textContent))}>{area.name}</li> 
                })
            }
        </ul>

      </label>
       
        <label htmlFor="area" className='user-input'>
        Область / район *
          <Input type='text' id='area' className='form-input mb-10' name='area' value={userStore.cityLetter} autocomplete={'off'} onChange={(event:any)=> userStore.openAllCities(event.target.value)} disabled={userStore.isDisabled}/>

          <ul className={userStore.isOpenChangeCity ? 'cities-list' : 'cities-list-none'}>
              {
                  userStore.isOpenChangeCity && userStore.cities?.map((city:any, index:number)=>{
                      return <li className='areas-item' key={index} onClick={((event:any)=> userStore.insertUserCity(event.target.textContent))}>{city.name}</li> 
                  })
              }
          </ul>
        </label>          
      
        <label htmlFor="email-index" className='user-input'>
        Почтовый индекс *
          <Input type='number' id='email-index' className="form-input mb-10" name='number' autocomplete={'off'} onChange={handleChange} value={formData.number} error={errors.number} />
        </label>

        <label htmlFor="phone" className='user-input'>
        Телефон  *
          <Input type='phone' id='phone' className="form-input mb-10" name='phone' autocomplete={'off'} onChange={handleChange} value={formData.phone} error={errors.phone} required/>
        </label>

        <label htmlFor="email" className='user-input'>
        Email *
          <Input type='email' id='email'  className="form-input mb-10" name='email' autocomplete={'off'} onChange={handleChange} value={formData.email} error={errors.email} required />
        </label>  
      </div>
        <Button type='button' onClick={()=> getDataUser()} padding='12px 0'>Сохранить</Button>
  </MainForm>
        
</StyledLocationFormWrapper>
  )
})













// const newUserData = {...userData}
        // newUserData.userId = nanoid(countId)
        // newUserData.name = formData.name
        // newUserData.surName = formData.surName
        // newUserData.country = userStore.countryletter
        // newUserData.address = formData.address
        // newUserData.area = userStore.areaLetter
        // newUserData.city = userStore.cityLetter
        // newUserData.postcode = formData.number
        // newUserData.phone = formData.phone
        // newUserData.email = formData.email

        // setUserData(newUserData)