import React from 'react'

const H1 = ({text,  color ='black', textAlign}) => {
  return (
    <h1 className={`text-${color} font-bold text-6xl sm:text-8xl text-${textAlign}`}>{text}</h1>
  )
}

export default H1