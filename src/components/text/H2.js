import React from 'react'

const H2 = ({text, color ='black'}) => {
  return (
    <h2 className={`font-bold  mb-8 text-${color} pb-5  text-xl md:border-b-2 lg:text-6xl`}>{text}</h2>
  )
}

export default H2