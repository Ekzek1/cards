import React from 'react'

const Button = (props) => {

  const { children, ...restProps } = props;

  return (
    <button {...restProps } className = 'cards__button'>{children}</button>
  )
}

export default Button