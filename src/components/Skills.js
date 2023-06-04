import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
 import H3 from './text/H3'
import H2 from './text/H2'
import H4 from './text/H4'

const Skills = () => {
  return (
    <section className='wrapper bg-white  py-12 flex justify-center items-center'>

        <div className="wrapper flex flex-col  justify-center gap-x-9 gap-y-10 w-full mx-10 md:mx-0  md:flex-row md:w-[50vw]">
             
            <div className="wrapper bg-customGreen py-10 px-9 w-full min-w-[17rem]">
                <div className='wrapper'>
                    <FontAwesomeIcon className='text-7xl mb-6 text-customGreen bg-white py-7 px-14' icon={faPen}/>
                    <H2 text = {'Title'} color={'white'} />
                </div>
                <div className='wrapper'>
                    <H3  text={'Skills'} color={'white'} />
                    <H4  text={'Skill 1, Skill 2, Skill 3, Skill 4'} color={'white'} />
                </div>
                <div className='wrapper'>
                    <H3 text={'Tools'} color={'white'} />
                    <H4  text={'Tool 1, Tool 2, Tool 3, Tool 4'} color={'white'} />
                </div>
            </div>

            <div className="wrapper bg-customGreen py-10 px-9 w-full min-w-[17rem]">
                <div className='wrapper'>
                    <FontAwesomeIcon className='text-7xl mb-6 text-customGreen bg-white py-7 px-14' icon={faPen}/>
                    <H2  text = {'Title'} color={'white'} />
                </div>
                <div className='wrapper'>
                    <H3  text={'Skills'} color={'white'} />
                    <H4  text={'Skill 1, Skill 2, Skill 3, Skill 4'} color={'white'} />
                </div>
                <div className='wrapper'>
                    <H3  text={'Tools'} color={'white'} />
                    <H4  text={'Tool 1, Tool 2, Tool 3, Tool 4'} color={'white'} />
                </div>
            </div>

            
        </div>

    </section>
  )
}

export default Skills