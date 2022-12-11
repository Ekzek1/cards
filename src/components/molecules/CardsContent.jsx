import React from 'react';


const CardsContent = (props) => {

  const {children,...restProps } = props;

  return (
    <div  {...restProps} className='cards__content'>
      {children}
    </div>
  )
}

export default CardsContent