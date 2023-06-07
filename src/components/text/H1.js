import React from 'react'

const H1 = ({text, color ='black',textAlign }) => {
  return (
    <h1 className={`text-${color} font-bold text-4xl md:text-8xl text-${textAlign} my-10`}>{text}</h1>
  )
}

export default H1