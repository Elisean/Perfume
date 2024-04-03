import React from 'react'
import { MainContainer } from '../../Containers/Main-container/Main-container';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { Pagination } from'swiper/modules';
import SliderBannerOne from "./../../images/slider-banner-1.png"
import SliderBannerTwo from "./../../images/slider-banner-2.png"
import SliderBannerThree from "./../../images/slider-banner-3.png"
import SliderBannerFour from "./../../images/slider-banner-4.png"
import SliderBannerFive from "./../../images/slider-banner-5.png"
import SliderBannerOneResponse from "./../../images/slider-banner-1-768px.png"
import SliderBannerTwoResponse from "./../../images/slider-banner-2-768px.png"
import SliderBannerThreeResponse from "./../../images/slider-banner-3-768px.png"
import SliderBannerFourResponse from "./../../images/slider-banner-4-768px.png"
import SliderBannerFiveResponse from "./../../images/slider-banner-5-768px.png"
import 'swiper/css';
import 'swiper/css/pagination';


register();



const SliderStyledWrapper = styled.div`
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    position: relative;
        
    .slider-inner{
        position: relative;
        z-index:2;
    }
    .slider-title{
        background: var(--gradient, linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 34px;
        font-weight: 600;
        width:795px;
        position: absolute;
        top:200px;
    }
    .slider-title-0{
        right:0;
    }
    .slider-title-1{
        right:0;
    }
    .slider-subtitle{
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width:244px;
        position: absolute;
        top:300px;
        left:225px;
        right:0;
    }
    .slider-subtitle-1{
        margin:0 323px 0 auto;
    }
    .slider-subtitle-0{
        margin:0 323px 0 auto;
    }
    .subtitle-auxiliary{
        background: linear-gradient(92deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 24px;
        font-weight: 800;
    }
    .slide-image{
        margin: -200px 0;
        object-fit: fill;
        width:100%;
        height:1100px;
   
        @media (max-width:1700px) {
            object-fit: cover;
            margin:0;
            height:450px;
            
        }
      
        @media (max-width:900px) {
            margin: 0;
            object-fit: cover;
            height:400px;
        }  
        @media (max-width:767px) {
            height:600px;
        }
    }
    @media(max-width:1700px) {
        .slider-title{
            top: 100px;
        }
        .slider-subtitle{
            top: 200px;
        }
    }


    @media (max-width:1300px) {
        .slider-title{
            max-width:593px;
            br{
                display: none;
            }
        }
        .slider-title-1{
            max-width:593px;
            br{
                display: none;
            }
        }
        .slider-title-0{
            max-width:593px;
            br{
                display: none;
            }
        }
        .slider-subtitle{
            top:250px;
            left:190px;
        }
        .slider-subtitle-1{
            top:250px;
            margin:0 190px 0 auto;
        }
        .slider-subtitle-0{
            top:250px;
            margin:0 190px 0 auto;
        }
    }

    @media (max-width:900px) {
        .slider-title{
            top:100px;
        }
        
        .slider-subtitle{
            top:250px;
            left:190px;
        }
        .slider-subtitle-1{
            top:250px;
            margin:0 190px 0 auto;
        }
        .slider-subtitle-0{
            top:250px;
            margin:0 190px 0 auto;
        }
    }
    @media (max-width:767px) {
        .slider-title{
            top:130px;
            font-size:25px;
            max-width:440px;
            left:50%;
            transform: translate(-50%);

        }
        .slider-subtitle{
            font-size:27px;
            top:490px;
            left:0;
            margin:0 auto;
        }
        z-index:1;
    }
    @media (max-width:450px) {

        .slider-title{
            top:100px;
            font-size:20px;
            max-width:305px;
        }
        .slider-subtitle{
            top:360px;
        }
        .slide-image{
            height:500px;
        }

    }
    .swiper-pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        bottom:30px;
    }
    .swiper-pagination-bullet{
        background-color: transparent;
        border: 1px solid var(--text);
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
    .swiper-pagination-bullet-active{
        width: 14px;
        height: 14px;
        padding:5px;
        background: linear-gradient(118deg, var(--text) 0%, #FFEBCC 42.62%, var(--text) 100%);
    } 
`

const params = {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
  }

export const Slider:React.FC = () => {
  return (
   
    <SliderStyledWrapper>
    <Swiper {...params}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      speed={1000}
      pagination={{ clickable: true }}
      modules={
        [Pagination]
      }
    >
            <SwiperSlide>

            <MainContainer>
                    <div className="slider-inner" >
                        <h1 className={`slider-title slider-title-0`}>Оптовая продажа люксовой парфюмерии <br /> с маржой до 100% и доставкой по РФ и СНГ</h1>
                        <h2 className={`slider-subtitle slider-subtitle-0`}> В наличии более <br /><span className='subtitle-auxiliary'>
                        500 </span>ароматов</h2>
                    </div>
            </MainContainer>

                <picture>
                <source srcSet={SliderBannerOne} media="(min-width:768px)" />
                <img className='slide-image' src={SliderBannerOneResponse} alt="slide-img" />
                </picture>

            </SwiperSlide>
            <SwiperSlide>

            <MainContainer>
                    <div className="slider-inner">
                        <h1 className={`slider-title slider-title-1`}>Оптовая продажа люксовой парфюмерии <br /> с маржой до 100% и доставкой по РФ и СНГ</h1>
                        <h2 className={`slider-subtitle slider-subtitle-1`}> В наличии более <br /><span className='subtitle-auxiliary'>
                        500 </span>ароматов</h2>
                    </div>
            </MainContainer>

                <picture>
                <source srcSet={SliderBannerTwo} media="(min-width:768px)" />
                <img className='slide-image' src={SliderBannerTwoResponse} alt="slide-img" />
                </picture>

            </SwiperSlide>
            <SwiperSlide>

            
            <MainContainer>
                    <div className="slider-inner">
                        <h1 className={`slider-title`}>Оптовая продажа люксовой парфюмерии <br /> с маржой до 100% и доставкой по РФ и СНГ</h1>
                        <h2 className={`slider-subtitle`}> В наличии более <br /><span className='subtitle-auxiliary'>
                        500 </span>ароматов</h2>
                    </div>
            </MainContainer>


                <picture>
                <source srcSet={SliderBannerThree} media="(min-width:768px)" />
                <img className='slide-image' src={SliderBannerThreeResponse} alt="slide-img" />
                </picture>


            </SwiperSlide>
            <SwiperSlide>

            
            <MainContainer>
                    <div className="slider-inner">
                        <h1 className={`slider-title`}>Оптовая продажа люксовой парфюмерии <br /> с маржой до 100% и доставкой по РФ и СНГ</h1>
                        <h2 className={`slider-subtitle`}> В наличии более <br /><span className='subtitle-auxiliary'>
                        500 </span>ароматов</h2>
                    </div>
            </MainContainer>

                <picture>
                <source srcSet={SliderBannerFour} media="(min-width:768px)" />
                <img className='slide-image' src={SliderBannerFourResponse} alt="slide-img" />
                </picture>

            </SwiperSlide>
            <SwiperSlide>

            
            <MainContainer>
                    <div className="slider-inner">
                        <h1 className={`slider-title`}>Оптовая продажа люксовой парфюмерии <br /> с маржой до 100% и доставкой по РФ и СНГ</h1>
                        <h2 className={`slider-subtitle`}> В наличии более <br /><span className='subtitle-auxiliary'>
                        500 </span>ароматов</h2>
                    </div>
            </MainContainer>

                <picture>
                <source srcSet={SliderBannerFive} media="(min-width:768px)" />
                <img className='slide-image' src={SliderBannerFiveResponse} alt="slide-img" />
                </picture>


            </SwiperSlide>
           
    </Swiper>
    </SliderStyledWrapper>
  )
}
