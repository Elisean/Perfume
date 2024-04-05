import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slider';
import { FlexContainer } from '../../../Containers/Flex-container/FlexContainer';
import SegregationStore from '../../../Store/SegregationStore';

interface IPrices {
  getChangePrice?: any;
}

const StyledPriced = styled.div`
  margin: 0 0 10px 0;

  @media (max-width: 568px) {
    margin: 0 auto 0 auto;
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }

  .Slider {
    width: 280px;
    height: 6px;
    border-radius: 4px;
    background-color: #0e0d0c;

    @media (max-width: 768px) {
      width: 225px;
    }
    @media (max-width: 568px) {
      margin: 0 auto 0 auto;
      width: 350px;
    }
    @media (max-width: 400px) {
    margin:0 0 0 10px;
    width: 270px;
  }

    .thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ffebcc;
      cursor: pointer;
      top: -6px;
    }
    .track-1 {
      height: 6px;
      background-color: #ffebcc;
    }
  }
  .values {
    margin: 10px 12px 0 12px;
    @media (max-width: 568px) {
      margin: 20px 0 0 0;
    }
    @media (max-width: 400px) {
      margin: 20px 0 0 10px;
    }
  }
`;

const MIN = 500;
const MAX = 30000;

export const Prices: React.FC<IPrices> = () => {
  const segregationContext = useContext(SegregationStore); // получаем контекст из стора

  const [value, setValue] = useState(MIN);

  const handleChangeBrand = (event: any) => {
    setValue(event);
    segregationContext.getPrice(event); // отправляем значения для минимального слайдера
  };

  return (
    <StyledPriced>
      <Slider
        className="Slider"
        onChange={(event: any) => handleChangeBrand(event)}
        value={value}
        min={MIN}
        max={MAX}
      />
      <FlexContainer justify="space-between">
        <p className="values from">от {value} ₽</p>
      </FlexContainer>
    </StyledPriced>
  );
};