import React from 'react'

const H4 = ({text,  color ='black', textAlign ="left" }) => {
  return (
    <h4 className={`font-normal text-sm text-${color} md:text-md text-${textAlign} my-2 leading-8`}>{text}</h4>
  )
}

export default H4