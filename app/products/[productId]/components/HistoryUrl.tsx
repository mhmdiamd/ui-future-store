"use client"

import { useGetPathName } from '@/app/hooks/useGetPathname'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface  HistoryUrlProps {}

const HistoryUrl:React.FC<HistoryUrlProps> = () => {

  const pathname = useGetPathName()

  return (
    <div className='flex gap-2'>
      {pathname?.map(path => (
        <Link
          href={path.href}
          key={path.label}
          className={clsx("font-medium", 
            path?.isActive ? "text-black" : "text-gray-400"
          )}  
        >/ {path.label}
        </Link>
      ))}
    </div>
  )
}

export default HistoryUrl