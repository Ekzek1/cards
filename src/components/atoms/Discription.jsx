import React from 'react'

const Discription = (props) => {

  const { children, ...restProps} = props;

  return (
    <p {...restProps} className = 'cards__discription'>{children}</p>
  )
}

export default Discription