import React from 'react'

const H3 = ({text,  color ='black', textAlign='left'}) => {
  return (
    <h3 className={`font-semibold text-lg text-${color}  text-${textAlign} mt-5 mb-3 md:text-2xl xl:text-4xl`}>{text}</h3>
  )
}

export default H3