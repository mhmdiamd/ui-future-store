"use client"
import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'

type RegisterProps = {
  children: React.ReactNode
}

const layout = ({children}: RegisterProps) => {
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