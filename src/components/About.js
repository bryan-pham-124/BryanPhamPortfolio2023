import React from 'react'
import H2 from './text/H2'
import H3 from './text/H3'
import H4 from './text/H4'
import H1 from './text/H1'
import HR from './HR'

const About = ({header, description}) => {
  return (
     <section className='flex justify-center bg-white py-10 lg:h-[100vh] items-center'>
        <div className="wrapper w-[50vw]">
            <H1 textAlign='center' text={header} marginY={10}/>
            <HR color='black'/>
            <H3 text={description} marginY={10}/>
        </div>
     </section>
  )
}

export default About