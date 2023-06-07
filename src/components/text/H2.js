import React from 'react'

const H2 = ({text, color ='black', textAlign='left'}) => {
  return (
    <h2 className={`font-semibold text-${color} text-2xl md:text-4xl text-${textAlign} my-6`}>{text}</h2>
  )
}

export default H2