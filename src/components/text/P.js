import React from 'react'

const P = ({text,  color ='black', textAlign ="left" }) => {
  return (
    <p className={`font-medium text-sm text-${color} md:text-md text-${textAlign} my-2`}>{text}</p>
  )
}

export default P