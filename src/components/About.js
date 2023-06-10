import React from 'react'
import H2 from './text/H2'
import H3 from './text/H3'
import H4 from './text/H4'
import H1 from './text/H1'
import { forwardRef } from 'react'

const About = forwardRef(({header, description, description2}, ref) => {
  return (
     <section ref = {ref} id="about" className='flex justify-center bg-white py-10 h-[100vh] flex items-center'>
        <div className="wrapper w-[50vw]">
            <H1  textAlign='center'  text={header}/>
            <hr className='border-black my-5' />
            <H3 textAlign='left' text={description}/>
        </div>
     </section>
  )
})

export default About