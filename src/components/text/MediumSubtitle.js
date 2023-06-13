import React from 'react'

const MediumSubtitle = ({text, color ='black', textAlign='left'}) => {
  return (
    <h2 className={`font-semibold text-${color} text-2xl md:text-4xl text-${textAlign} my-6 xl:text-6xl`}>{text}</h2>
  )
}

export default  MediumSubtitle 