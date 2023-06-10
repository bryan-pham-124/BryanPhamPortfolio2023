import React from 'react'
import H3 from './text/H3'
import H2 from './text/H2'
import HR from './HR'
import H4 from './text/H4'
import { forwardRef } from 'react'

const Footer = forwardRef(({}, ref) => {
  return (
    <footer ref={ref} id="footer" className='flex flex-col items-center justify-center bg-customBlack py-4 h-[60vh]'> 
        <H2 color={'white'} text={'Ready to work togethor?'} />
        <H4 color='white' text={'Contact me at: bryanpham124@gmail.com'} />
    </footer>
  )
})

export default Footer