import React, { forwardRef } from 'react'
import H1 from './text/H1'
import H3 from './text/H3'
import HR from './HR'
import { animationValues } from '../data'

const Splash = forwardRef(({header, description, currentVisible, lastVisible}, ref) => {

  return (
    <header ref={ref} 
            id='splash' 
            className={`w-full flex justify-center items-center  h-[100vh]  bg-customGreen py-3 lg:py-0 
            ${animationValues(currentVisible,  'splash')}`
        }>
        <div className='wrapper w-[80vw] lg:w-[50vw]'>
            <H1 textAlign={'left'} text={header} color={'white'} marginY={10}/>
            <HR color ='white' marginY='20' />
            <H3  textAlign='left' text={description} color={'white'} marginY={10}/>
        </div>
    </header>
  )
})

export default Splash