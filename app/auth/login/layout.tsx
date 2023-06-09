import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-full'>
      <Navbar />
      <div className="h-full">
        {children}
      </div>
    </div>
  )
}

export default layout