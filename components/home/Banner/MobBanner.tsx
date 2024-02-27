import Image from 'next/image'
import React from 'react'

const MobBanner = () => {
  return (
    <>
    <div className='w-full xs:hidden h-full overflow-hidden pt-8 block'>
        <Image src="/assets/images/mobbanner1.jpg" alt="banner1"  className='w-full h-full box-border object-cover' width={10000} height={10000}/>
    </div>
    </>
  )
}

export default MobBanner