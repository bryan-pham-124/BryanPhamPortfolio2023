import React from 'react'

const H2 = ({text, color ='black', textAlign='left'}) => {
  return (
    <h2 className={`font-semibold text-${color} text-4xl md:text-6xl text-${textAlign} my-6 xl:text-8xl`}>{text}</h2>
  )
}

export default H2