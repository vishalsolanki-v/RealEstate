import Image from 'next/image'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DeskBanner = () => {
  return (
    <>
    <div className='w-full overflow-hidden xs:block h-full px-2 pt-8 hidden relative'>
        <Image src="/assets/images/banner1.jpg" alt="banner1"  className='w-full h-[100vh] box-border object-fill' width={10000} height={10000}/>
    <div className='content absolute text-center top-0 left-0 right-0 w-full h-full box-border flex-col flex-center'>
<p className='fontForBanners lg:text-5xl md:text-3xl text-2xl text-white capitalize !leading-snug '>Embark on the Path to Your Dream Home: <br/> A Trustworthy Expedition to Your Perfect Abode</p>
<p className='mt-2 sm:px-6 text-center text-white leading-snug '>Explore Your Dream Home with Confidence: <br /> Trust Our Expert Team to Navigate Every Step of Your Journey, Ensuring Your Destination is Perfectly Tailored to You.</p>
   
   <div className='filters w-2/3 flex-col md:flex-row flex bg-white'>
<div className="flex-1 h-10">
  <h6>something</h6>
  <Select>
  <SelectTrigger className="w-full border-none ">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

</div>
<div className="flex-1 h-10"></div>
<div className="flex-1 h-10"></div>
<div className='flex-1/2 h-10'>hello</div>
   </div>
    </div>
    </div>
    </>
  )
}

export default DeskBanner