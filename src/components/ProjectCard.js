import React from 'react'
import H1 from './text/H1'
import H2 from './text/H2'
import H4 from './text/H4'
import H3 from './text/H3'

const ProjectCard = () => {
  return (
    <section className='bg-white h-[100vh] flex items-center '>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
            <div className="wrapper flex flex-col items-center">
                <H2 text={'Project Title'}/>
                <H4 text={'Description'} />
                <H3 text={'Technologies Used'} />
                <div className="wrapper flex gap-x-3">
                    <H4 text={'Skill'} />
                    <H4 text={'Skill 2'} />
                    <H4 text={'Skill 3'} />
                    <H4 text={'Skill 4'} />
                    <H4 text={'Skill 5'} />
                    <H4 text={'Skill 6'} />
                </div>
            </div>
            <div className="wrapper bg-customGreen text-white h-[50vh] flex items-center px-4">
                PROJECT SCREENSHOT HERE
            </div>
            
            <div className="wrapper w-[13rem]">
                <button className='w-full bg-customGreen py-5 text-white'>
                    Details
                </button>
            </div>
            
        </div>
        
    </section>
  )
}

export default ProjectCard