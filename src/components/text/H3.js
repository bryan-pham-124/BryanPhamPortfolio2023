import React from 'react'

const H3 = ({text,  color ='black', textAlign='left'}) => {
  return (
    <h3 className={`font-medium text-2xl text-${color} my-3 text-${textAlign}`}>{text}</h3>
  )
}

export default H3