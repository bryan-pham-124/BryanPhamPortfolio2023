import React from 'react'

const H3 = ({text,  color ='black'}) => {
  return (
    <h3 className={`font-medium text-2xl text-${color} my-3`}>{text}</h3>
  )
}

export default H3