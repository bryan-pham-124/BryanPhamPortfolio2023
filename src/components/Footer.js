import React from 'react'
import H2 from './text/H2'
import BigP from './text/BigP'

const Footer =  ( ) => {
  return (
    <footer id="footer" className='flex flex-col items-center justify-center bg-customBlack py-4 h-[60vh]'> 
        <H2 color={'white'} text={'Ready to work togethor?'} />
        <BigP color='white' text={'Contact me at: bryanpham124@gmail.com'} />
    </footer>
  )
} 

export default Footer