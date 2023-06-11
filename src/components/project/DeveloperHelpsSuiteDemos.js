import React from 'react'
 
import H2 from '../text/H2'
import Demo from './Demo'
import { features } from '../../data'
import { useMediaQuery } from 'react-responsive';
import H4 from '../text/H4';
import ProjectsHeader from './ProjectHeader';
import BigP from '../text/BigP';
import MediumSubtitle from '../text/MediumSubtitle';


const DeveloperHelpsSuiteDemos = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 49rem)` });


  return (
     <>
        
        <H2 textAlign='center' text="Demos"/>

        {
            features.map(feature => (
                <section className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[100vh] items-center justify-items-center my-12 px-5">
                    <div className="wrapper px-9">
                        <MediumSubtitle text={feature.title} />
                        <Demo details={feature.details} />
                    </div>
                     
                    { 
                        
                        isMobile 
                        
                        ? 
            
                              <H4  textAlign="center" text={ `Embed vidoes not work well on mobile please go here:  ${feature.link}` } /> 
                                          
                
                        

                        : 
                        
                        <iframe  className='w-full h-full my-5 md:h-full'src={feature.link}></iframe>
                     
                     }
                    
                   
                </section>
            ))
        }   
        
     </>
  )
}

export default DeveloperHelpsSuiteDemos