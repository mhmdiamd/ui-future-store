import React from 'react'
import HistoryUrl from './components/HistoryUrl'
import Image from 'next/image'

type Props = {}

const page = () => {

  return (
    <div className="w-full flex flex-col lg:max-w-4xl px-10 lg:px-0 xl:max-w-5xl mx-auto">
      <HistoryUrl />

      {/* Image Section */}
      <div className="w-full md:w-5/6 flex mt-6 rounded-md gap-4">
        <div className="w-full md:w-4/5 xl:h-[400px]  relative">
          <Image
            fill
            alt='main-pict'
            src={"/images/product-detail/1.jpg"}
            className='w-full h-full'
          />
        </div>

        <div className="w-1/5 flex flex-col justify-between gap-y-4">
          <Image
            width={160}
            height={40}
            alt="product-img"
            src={'/images/product-detail/1.jpg'}
            className='block max-h-[85px] rounded-lg'
          />

          <Image
            width={160}
            height={40}
            alt="product-img"
            src={'/images/product-detail/2.png'}
            className='block max-h-[85px] rounded-lg'
          />

          <Image
            width={160}
            height={40}
            alt="product-img"
            src={'/images/product-detail/3.jpg'}
            className='block max-h-[85px] rounded-lg'
          />

          <Image
            width={160}
            height={40}
            alt="product-img"
            src={'/images/product-detail/4.jpg'}
            className='block max-h-[85px] rounded-lg'
          />

        </div>
      </div>
      {/* End Image Section */}

      {/* Title section */}
      <div className="
        w-full 
        md:w-5/6 
        mt-5 flex 
        justify-between
        items-start
      ">
        <div className="title flex flex-col justify-start">
          <span className='text-xl font-semibold text-gray-900'>Sofa Feel Better</span>
          <span className='block text-gray-500 text-sm tracking-wide'>By Toko Cahaya</span>
          <span className='block mt-1 text-rose-700 text-base tracking-wide'>$1,409</span>
        </div>
        
        <button 
          className='px-16 bg-emerald-500 text-white hover:bg-emerald-600 py-2 rounded-md text-sm font-medium  mt-1'
        >Add to Cart</button>
      </div>
      {/* End Title section */}

      {/* Description section */}
      <div className="w-full max-w-xl mt-3 text-gray-700">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sit architecto enim tempore ratione debitis minus provident quidem officia quos nisi eius vero numquam, necessitatibus quis dolor, repellat magni similique. Cupiditate labore reiciendis velit iure aliquam consequatur sequi minus commodi</p>

        <p className='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sit architecto enim tempore ratione debitis minus provident quidem officia quos nisi eius vero numquam, necessitatibus quis dolor, repellat magni similique. Cupiditate labore reiciendis velit iure aliquam consequatur sequi minus commodi</p>
      </div>
      {/* End Description section */}

      <div className="flex flex-col w-full">
        <div className="w-full py-6">
          <h1 className='font-medium text-base'>Customer Review(3)</h1>
        </div>
        <div className="w-full flex flex-column gap-y-4">
          <Image 
            alt='foto-profile'
            width={56}
            height={56}
            src={"/images/profile/profile.png"}
            className='rounded-full max-h-[56px]'
          />
          <div className="comment flex flex-col w-full md:max-w-xl">
            <div className="name pl-5 h-[56px] flex items-center">
              <span className='font-medium text-gray-900'>Saikonah Maimunah</span>
            </div>
            <div className="comment-body pl-5 w-full max-w-xl text-gray-700">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed soluta voluptatum iusto eum numquam sit aut incidunt eligendi</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-column gap-y-4">
          <Image 
            alt='foto-profile'
            width={56}
            height={56}
            src={"/images/profile/profile.png"}
            className='rounded-full max-h-[56px]'
          />
          <div className="comment flex flex-col w-full md:max-w-xl">
            <div className="name pl-5 h-[56px] flex items-center">
              <span className='font-medium text-gray-900'>Saikonah Maimunah</span>
            </div>
            <div className="comment-body pl-5 w-full max-w-xl text-gray-700">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed soluta voluptatum iusto eum numquam sit aut incidunt eligendi</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-column gap-y-4">
          <Image 
            alt='foto-profile'
            width={56}
            height={56}
            src={"/images/profile/profile.png"}
            className='rounded-full max-h-[56px]'
          />
          <div className="comment flex flex-col w-full md:max-w-xl">
            <div className="name pl-5 h-[56px] flex items-center">
              <span className='font-medium text-gray-900'>Saikonah Maimunah</span>
            </div>
            <div className="comment-body pl-5 w-full max-w-xl text-gray-700">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed soluta voluptatum iusto eum numquam sit aut incidunt eligendi</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page