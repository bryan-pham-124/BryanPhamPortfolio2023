import React from 'react'
import H1 from './text/H1'
import H3 from './text/H3'

const Splash = ({header, description}) => {
  return (
    <header className='flex justify-center items-center h-[100vh] bg-customGreen py-3 lg:py-0'>
        <div className='wrapper'>
            <H1 text={header} color={'white'}/>
            <H3 text={description} color={'white'}/>
        </div>
    </header>
  )
}

export default Splash