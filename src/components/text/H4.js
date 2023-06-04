import React from 'react'

const H4 = ({text,  color ='black', textAlign ="left"}) => {
  return (
    <h4 className={`font-light text-md text-${color} my-3 text-${textAlign}`}>{text}</h4>
  )
}

export default H4