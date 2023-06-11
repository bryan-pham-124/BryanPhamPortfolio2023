import React from 'react'
import H2 from './text/H2'
import H3 from './text/H3'
import H4 from './text/H4'
import H1 from './text/H1'
import { forwardRef } from 'react';
import { animationValues } from '../data'
import HR from './HR'

const About = forwardRef(({header, description, currentVisible}, ref) => {


  return (
     <section 
            ref = {ref} 
            id="about" 
            className={`opacity-0 flex justify-center bg-white py-10  h-[90vh] lg:h-[100vh] flex items-center  
            ${animationValues(currentVisible, 'about')} `}
         >
        <div className="wrapper w-[50vw]">
            <H1  textAlign='center'  text={header}/>
            <HR color='black'   />
            <H3 textAlign='left' text={description}/>
        </div>
     </section>
  )
})

export default About