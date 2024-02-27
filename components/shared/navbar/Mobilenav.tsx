import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
  
const Mobilenav = () => {
  return (
    <>
    <div className='flex md:hidden'>
    <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="left" className=''>

  <Link href='/' className='flex-center gap-1 p-4'>
                    <p className='navbar-button w-full text-center '>
                        About Us</p>
                </Link>
                <Link href='/' className='flex-center gap-1 p-4'>
                    <p className='navbar-button w-full text-center '>
                       Property</p>
                </Link> <Link href='/' className='flex-center gap-1 p-4'>
                    <p className='navbar-button w-full text-center '>
                        Agent</p>
                </Link> <Link href='/' className='flex-center gap-1 p-4'>
                    <p className='navbar-button w-full text-center '>
                        Contact Us</p>
                </Link>
  </SheetContent>
</Sheet>
</div>
</>
  )
}

export default Mobilenav