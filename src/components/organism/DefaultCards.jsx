import React from 'react';
import CardsBody from '../molecules/CardsBody';
import CardsContent from '../molecules/CardsContent';
import Discription from '../atoms/Discription';
import Button from '../atoms/Button';
import Title from '../atoms/Title'

const DefaultCards = (props) => {

  const {title, discription, button} = props;

  return (
    <CardsBody>
      <CardsContent>
        <Title size = {2}>{title}</Title>
        <Discription>{discription}</Discription>
        <Button>{button}</Button>
      </CardsContent>
    </CardsBody>
  )
}

export default DefaultCards