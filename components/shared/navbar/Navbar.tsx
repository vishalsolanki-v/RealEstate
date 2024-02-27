import React from 'react'
import Desktopnav from './Desktopnav'
import Mobilenav from './Mobilenav'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between'>
        <div className="gap-2 flex-center">
          <Image
            src="/assets/images/logo.jpg"
            alt="logo"
            width={70}
            height={70}
          />
          <h2 className="mt-4">Vishal Eastate</h2>
        </div>
        
        <Desktopnav/>
    <Mobilenav/>
    </div>
  )
}

export default Navbar