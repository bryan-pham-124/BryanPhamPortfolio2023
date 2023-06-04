import React from 'react'
import H1 from './text/H1'
import H3 from './text/H3'
import H4 from './text/H4'
import H2 from './text/H2'

const Splash = ({header, description}) => {
  return (
    <header className='flex justify-center items-center h-[100vh] bg-customGreen py-3 lg:py-0'>
        <div className='wrapper w-[80vw] lg:w-[50vw]'>
            <H2 textAlign={'center'} text={header} color={'white'}/>
            <hr className='my-5'/>
            <H3  textAlign='left' text={description} color={'white'}/>
        </div>
    </header>
  )
}

export default Splash