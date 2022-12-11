import React from 'react'

const Image = (props) => {

  const { src, alt , ...restProps } = props;

  return (
    <img  {...restProps} className='cards__image' src={src} alt={alt} />
  )
}

export default Image