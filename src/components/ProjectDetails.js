import React from 'react'
import { useParams } from 'react-router-dom'
import H1 from './text/H1';
import H2 from './text/H2';
import { projects } from '../data';
import H4 from './text/H4';
import H3 from './text/H3';

const ProjectDetails = () => {


  const {title} = useParams();


  return (

    <section className='text-black text-4xl h-[100vh] py-5'>
        
        {
          /*

            Format of stuff

            Title

            Picture


             Description

            Tech Used

           

            Features

          */
        }


        <H2 color='white' text={"Title"} />

        <figure className="wrapper flex justify-center ">
           <img src={`../${projects[0].screenshotLink}`} alt ="Project Img" className='w-[80vw] md:w-[50vw]' />
        </figure>

        

        <H3 
            color="white"
            text ={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, harum! Maxime incidunt, reiciendis fugiat iure consequatur ad eligendi. "}

        />
            
        {
          // REPLACE ALL H4 WITH P TAGS FOR SEMANTIC HTML
          // REWORK TEXT  --> TOO CONFUSING
        }
       

       
    </section>
  )
}

export default ProjectDetails