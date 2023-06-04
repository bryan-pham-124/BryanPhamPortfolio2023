import React from 'react'

const H2 = ({text, color ='black', textAlign='left'}) => {
  return (
    <h2 className={`font-medium  mb-8 text-${color} pb-5 text-6xl text-${textAlign} `}>{text}</h2>
  )
}

export default H2