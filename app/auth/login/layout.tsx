import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      {children}
    </div>
  )
}

export default layout