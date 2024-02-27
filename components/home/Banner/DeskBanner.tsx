import Image from 'next/image'
import React from 'react'

const DeskBanner = () => {
  return (
    <>
    <div className='w-full overflow-hidden xs:block h-full px-2 pt-8 hidden'>
        <Image src="/assets/images/banner1.jpg" alt="banner1"  className='w-full h-full box-border object-cover' width={10000} height={10000}/>
    </div>
    </>
  )
}

export default DeskBanner