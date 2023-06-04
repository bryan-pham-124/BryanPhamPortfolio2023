import React from 'react'

const H4 = ({text,  color ='black'}) => {
  return (
    <h4 className={`font-medium text-xs text-${color} my-3`}>{text}</h4>
  )
}

export default H4