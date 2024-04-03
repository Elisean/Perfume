import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { MainContainer } from '../../Containers/Main-container/Main-container'
import { AsideTitle } from '../../Components/Aside-title/Aside-title'
import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs'
import { AsidePanel } from '../../Components/Aside-panel/AsidePanel'
import { FlexContainer } from '../../Containers/Flex-container/FlexContainer'
import { ReactComponent as UserManNew } from '../../icons/user-man-new.svg'
import styled from 'styled-components'


const StyledBonusesPanelWrapper = styled.section`
.bonusesPanel-inner{
  width:100%;
  margin:0 0 0 20px;
}
.user-count-purchases{
  background-color: var(--gray);
  width:190px;
  height:40px;
  padding:10px;
  margin:0 0 16px 0;
}
.user-description{
  width:250px;
  margin:0 0 40px 0;
}
.active-count{
  coLor:var(--red);
}
.mb-10{
  margin:0 0 10px 0;
}
.user-status{
  width:593px;
}
.user-status-line{
  width:100%;
  background-color: var(--black);
  height:4px;
  position:relative;
  top:30px;
}
.user-status-dot{
  width:18px;
  height:18px;
  background-color: var(--goldenWhite);
  border-radius:50%;
}
.dot-start{
  position:absolute;
  top:-7px;
  left:0;
}
.dot-start::before{
  content:"";
  position:absolute;
  width:40px;
  height:4px;
  background-color: var(--goldenWhite);
  top:7px;
  left:0;
}

.dot-middle{
  position:absolute;
  top:-7px;
  left:50%;
  transform:translate(-50%);
}
.dot-end{
  position:absolute;
  top:-7px;
  right:0;
}
.user-status-role{
  position:absolute;
  top:-50px;
  background-color: var(--gray);
  width:180px;
  font-size:14px;
  padding:10px 5px;
  text-align:center;
}
.history-bonuses{
  width:593px;
  margin:50px 0 0 0;
 
}
.history-item{
  background-color: var(--gray);
  border-radius:4px;
  padding:20px;
}
.history-date{
  background-color: var(--black);
  width:100%;
  padding:10px;
  font-weight:700;
  border-radius:4px;
}
.history-bonuse{
  margin:16px 0 0 0;
}
.history-time{
  margin:16px 0 0 0;
}
.history-cause{
  margin:16px 0 0 0;
}


`


export const BonusesPanel:React.FC = () => {

  const [statusStart, setStatusStart] = useState(true)
  const [statusMiddle, setStatusMiddle] = useState(false)
  const [statusEnd, setStatusEnd] = useState(false)


  return (
    <StyledBonusesPanelWrapper>
           <Header/>
      <MainContainer>
        <AsideTitle>Мой аккаунт</AsideTitle>  
        <Breadcrumbs/>

      <FlexContainer>
        <AsidePanel/> 
    <div className='bonusesPanel-inner'>
          <FlexContainer direction='column'>
            <AsideTitle margin='0 0 40px 0'>Бонусы</AsideTitle>

                <FlexContainer justify='space-between'>
                  <div className='user-description'>
                    <p className='user-status mb-10'>Ваш статус: Новый покупатель</p>
                    <p className='user-cashback mb-10'>Ваш кэшбек: 2%</p>
                    <p className='user-bonuses mb-10'>Баллов сейчас: 100 баллов</p>        
                  </div>
                     <UserManNew />  
                  <FlexContainer direction='column'>
                    <p className='user-count-purchases'><span className='active-count'>0</span> / 5 покупок сделано</p>
                    <p className='user-count-description'>Чтобы получать кэшбек 3% и статус <br /> «Частый покупатель» , вам нужно сделать <br /> количество покупок 5</p>
                  </FlexContainer>

                </FlexContainer>  

          </FlexContainer>

      <div className='user-status'>
          <div className="user-status-line">
                <div className='user-status-dot dot-start'>
                    {
                      statusStart &&  <div className='user-status-role'>Новый покупатель</div>
                    }
                </div>
                <div className='user-status-dot dot-middle'>
                    {
                      statusMiddle && <div className='user-status-role'>Частый покупатель</div>
                    }
                </div>
                <div className='user-status-dot dot-end'>
                    {
                      statusEnd &&  <div className='user-status-role'>Постоянный покупатель</div>
                    }
                </div>
          </div>
      </div> 
      <div className='history-bonuses'>
          <ul className='history-list'>
              <li className='history-item'>
                <div className='history-date'>1.07.2023</div>
                <div className='history-bonuse'>Баллы: 100</div>
                <div className='history-time'>Дата: 22.07.2023 21:05</div>
                <div className='history-cause'>Причина: Регистрация</div>
              </li>
          </ul>  
      </div>
     
    </div>
    
      </FlexContainer>
      
    
      </MainContainer>
      <Footer/>
    </StyledBonusesPanelWrapper>
  )
}



