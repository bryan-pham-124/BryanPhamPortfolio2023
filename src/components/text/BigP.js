import React from 'react'

const BigP = ({text,  color ='black', textAlign ="left" }) => {
  return (
    <p className={`font-normal text-lg text-${color}  text-${textAlign} mt-5 mb-3 md:text-2xl`}>  {text}  </p>
  )
}

export default BigP