"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProductProps {
  src : string
  title: string
  price: string
}

const CardProduct: React.FC<CardProductProps> = ({
  src, title, price
}) => {
  return (
    <Link href="/" className="card w-1/4 h-[205px] rounded-md relative">
      <Image 
        alt={title}
        fill
        src={src}
        className="max-h-[140px] w-full rounded-md relative"
      />
      <div className="text-gray-900 absolute flex flex-col bottom-2">
        <span className="text-gray-900 font-medium text-base">{title}</span>
        <span className="mt-1 text-rose-800 font-medium text-sm">{price}</span>
      </div>
    </Link>
  )
}

export default CardProduct