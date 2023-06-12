import React from 'react'
 
import H2 from '../text/H2'
import Demo from './Demo'
import { features } from '../../data'
import { useMediaQuery } from 'react-responsive';
import MediumSubtitle from '../text/MediumSubtitle';
import H3 from '../text/H3';


const DeveloperHelpsSuiteDemos = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 49rem)` });


  return (
     <>
        
        <H2 textAlign='center' text="Demos"/>
        <H3 textAlign='center' text={'Fullscreen is available on video controls'}/>

        {
            features.map(feature => (
                <section className="grid grid-cols-1 lg:grid-cols-2 h-full items-center  px-12 my-14">

                    <div className="wrapper px-9">
                        <MediumSubtitle text={feature.title} />
                        <Demo details={feature.details} />
                    </div>
                     
                    <div className="wrapper flex justify-center">
                        <video className='w-9/12 h-auto' controls>
                            <source src={feature.link} type="video/mp4"/>
                        </video>
                    </div>
                    
                </section>
            ))
        }   
        
     </>
  )
}

export default DeveloperHelpsSuiteDemos