import React from 'react'

const H3 = ({text,  color ='black', textAlign='left'}) => {
  return (
    <h3 className={`font-semibold text-lg text-${color}  text-${textAlign} my-7 md:text-2xl`}>{text}</h3>
  )
}

export default H3