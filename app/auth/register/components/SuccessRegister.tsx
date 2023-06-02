import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SuccessRegister = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <div className="flex flex-col relative mx-auto w-[121px] h-[110px]"> 
        <Image 
          alt='bag-photo'
          fill
          src={"/images/bag.png"}
          className='absolute left-1/2'
        />
      </div>

      <h1 className='text-black text-2xl text-center mt-6'>Welcome to Store</h1>
      <div className="statement space-y-2 mt-4">
        <span className='block text-sm text-center text-gray-700'>Kamu sudah berhasil terdaftar</span>
        <span className='block text-sm text-center text-gray-700'>Bersama kami, Let&apos;s Grow up now.</span>
      </div>

      <div className="mt-16 flex flex-col gap-4 mx-auto">
        <Link 
          href={`/profile/dashboard`}
          className='rounded-md mx-auto w-[180px] py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-center'
        >My Dashboard</Link>

        <Link 
          href={`/profile/dashboard`}
          className='rounded-md mx-auto w-[180px] py-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-600 text-gray-400 font-medium text-center'
        >Go to shoping</Link>
      </div>
    </div>
  )
}

export default SuccessRegister