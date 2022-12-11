import React from 'react'

const CardsBody = (props) => {

  const {children ,...restProps } = props;

  return (
    <div  {...restProps} className='cards__body'>
      {children}
    </div>
  )
}

export default CardsBody