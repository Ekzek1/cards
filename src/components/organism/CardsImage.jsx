import React from 'react';
import CardsBody from '../molecules/CardsBody';
import Image from '../atoms/Image';
import CardsContent from '../molecules/CardsContent'
import Discription from '../atoms/Discription';
import Button from '../atoms/Button';
import Title from '../atoms/Title'

const CardsImage = (props) => {

  const {title, discription, button ,src, alt} = props;

  return (
    <CardsBody>
      <Image src={src} alt = {alt}/>
      <CardsContent>
        <Title size = {2}>{title}</Title>
        <Discription>{discription}</Discription>
        <Button>{button}</Button>
      </CardsContent>
    </CardsBody>
  )
}

export default CardsImage