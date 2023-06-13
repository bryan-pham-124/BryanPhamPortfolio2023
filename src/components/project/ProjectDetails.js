import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import H2 from '../text/H2';
import { projects } from '../../data';
import H3 from '../text/H3';
import H4 from '../text/H4';
import ProjectSection from './ProjectSection';
import { projectDetails } from '../../data';
import H1 from '../text/H1';
import DeveloperHelpsSuiteDemos from './DeveloperHelpsSuiteDemos';

const ProjectDetails = () => {


  const {title} = useParams();

  const projectDetail = projectDetails.find(project => project.title === title);

  const textColor = "black";

  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 

  return (

    <section className='opacity-0 text-black text-4xl  py-14 animate-fadeIn'>

        <div className="wrapper mb-14">
            <Link to="/" className='px-5 py-4 bg-customGreen text-white'> Home </Link>
        </div>
       
        <H2 color={textColor} text={title} textAlign='center' marginY={'14'} />

        { title === 'Developer Help Suite' && <H3 textAlign='center' text={"(Video Demos Below After Details)"}/>}

        <div className="h-full w-full  flex flex-col items-center px-14 ">
 

            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-x-9">

                <figure className="wrapper flex justify-center my-4 border border-customBlack">
                    <img src={`../${projectDetail.screenshotLink}`} alt ="Project Img" className='h-auto' />
                </figure>

              
                <ProjectSection header={projectDetail.details[0].header} text={projectDetail.details[0].value} textColor={textColor} />


            </div>
           

            <section className='w-full gap-x-8 gap-y-3 justify-items-center grid grid-cols-1 sm:grid-cols-3'>

                {
                 projectDetail.details.map(elm => (
                    
                    typeof elm.value === 'string' 
                    
                    ?   
                      
                    ''

                    :

                    <ProjectSection header={elm.header}  inputArray={elm.value} textColor={textColor} />

                  ))
                }
             
            </section>
  
        </div>

        { title === 'Developer Help Suite' && <DeveloperHelpsSuiteDemos />}

        

    </section>
  )
}

export default ProjectDetails