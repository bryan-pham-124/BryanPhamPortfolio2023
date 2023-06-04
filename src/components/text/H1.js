import React from 'react'

const H1 = ({text,  color ='black'}) => {
  return (
    <h1 className={`text-${color} font-bold text-6xl mb-8 pb-10 md:border-b-2  sm:text-8xl`}>{text}</h1>
  )
}

export default H1