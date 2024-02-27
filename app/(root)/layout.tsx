import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='p-6 overflow-hidden'>{children}</main>
  )
}

export default Layout;