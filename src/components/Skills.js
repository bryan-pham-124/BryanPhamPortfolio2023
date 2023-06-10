import { faCode, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import H3 from './text/H3'
import H2 from './text/H2'
import H4 from './text/H4'
import HR from './HR'
import { forwardRef } from 'react'



const designTextColor = 'white';
const frontEndColor = "white"


// const About = forwardRef(({header, description, description2}, ref) => {

const Skills = forwardRef(({designSkills, designTools, techSkills, techTools}, ref) => {
  return (
    <section  ref={ref} id="skills" className='wrapper bg-white flex justify-center items-center'>

        <div className="wrapper flex flex-col  justify-center w-full md:flex-row md:w-full">
             
            <div className="wrapper bg-customGreen py-12  px-9 w-full min-w-[17rem]">

                <div className='wrapper w-full text-custom'>

                    <FontAwesomeIcon className='text-7xl mb-6 text-customGreen  bg-white py-7 px-10' icon={faPen}/>
                    <H2 textAlign='center' text = {'Design'}  color={designTextColor} />
                    <HR color ='white'/>

                </div>

                <div className="grid  grid-cols-1 lg:grid-cols-2">

                    <div className='wrapper border-white'>
                        <H3 textAlign='center' text={'Skills'}   color={designTextColor} />
                        <div className="wrapper flex  justify-center">
                            <ul>
                                {
                                    designSkills.map((skill, i ) => (
                                            <li key ={i} className={`text-${designTextColor}`}><H4 color='white' textAlign='center' text={skill}/> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='wrapper border-white  '>
                        <H3 textAlign='center' text={'Tools'}    color={designTextColor} />
                        <div className="wrapper flex  justify-center">
                            <ul>
                                {
                                    designTools.map((tool, i ) => (
                                            <li key ={i} className={`text-${designTextColor}`}><H4 color='white' textAlign='center' text={tool}/> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                
            </div>

            <div className="wrapper bg-customBlack py-12 px-9 w-full min-w-[17rem]">

                <div className='wrapper'>
                    <FontAwesomeIcon className='text-7xl mb-6  bg-white py-7 px-10' icon={faCode}/>
                    <H2  textAlign='center' text = {'Tech Stack'} color={frontEndColor } />
                    <HR color ='white'/>
                </div>
            
                <div className="grid  grid-cols-1 lg:grid-cols-2">

                    <div className='wrapper border-white  '>
                        <H3 textAlign='center' text={'Skills'} color={designTextColor} />
                        <div className="wrapper flex  justify-center">
                            <ul>
                                {
                                    techSkills.map((skill, i) => (
                                            <li key={i} className={`text-${designTextColor}`}><H4 color='white' textAlign='center' text={skill}/> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='wrapper border-white  '>
                        <H3 textAlign='center' text={'Tools'} color={designTextColor} />
                        <div className="wrapper flex  justify-center">
                            <ul >
                                {
                                    techTools.map((tool, i) => (
                                            <li key = {i} className={`text-${designTextColor}`}><H4 color='white' textAlign='center' text={tool}/> </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>

    </section>
  )
})

export default Skills