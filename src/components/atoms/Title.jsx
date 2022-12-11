import React from 'react'

const Title = (props) => {

  const { size = 1, children, ...restProps } = props;
  const Component = 'h' + size;

  return (
    <Component {...restProps} className = 'cards__title'>{children}</Component>
  )
}

export default Title