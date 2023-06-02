import React, { ReactNode } from 'react'
import HistoryUrl from '../../products/[productId]/components/HistoryUrl'
import Navbar from '@/app/components/navbar/Navbar'

interface CartDetailLayoutProps {
  children : ReactNode
}

const CartDetailLayout:React.FC<CartDetailLayoutProps> = ({
  children
}) => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="w-full mx-auto lg:max-w-4xl xl:max-w-5xl ">
        <HistoryUrl />
        {children}
      </div>
    </div>
  )
}

export default CartDetailLayout