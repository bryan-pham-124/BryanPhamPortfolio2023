import React from 'react'
import H1 from './text/H1'
import H3 from './text/H3'
import H4 from './text/H4'
import H2 from './text/H2'
import HR from './HR'

const Splash = ({header, description}) => {
  return (
    <header className='w-full flex justify-center items-center h-[100vh] bg-customGreen py-3 lg:py-0'>
        <div className='wrapper w-[80vw] lg:w-[50vw]'>
            <H1 textAlign={'center'} text={header} color={'white'} marginY={10}/>
            <HR color ='white' marginY='20' />
            <H3  textAlign='left' text={description} color={'white'} marginY={10}/>
        </div>
    </header>
  )
}

export default Splash