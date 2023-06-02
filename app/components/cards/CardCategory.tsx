
import React from 'react'
import { IconType } from 'react-icons'

interface CardCategoryProps {
  icon: IconType
  name: string
}

const CardCategory: React.FC<CardCategoryProps> = ({
  icon: Icon,
  name
}) => {
  return (
    <div className="w-1/6 h-[155px] bg-gray-100 flex flex-col justify-center items-center rounded-md cursor-pointer">
      <div className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-200">
        <Icon className="text-gray-700" size={40} />
      </div>
      <span className="block mx-auto mt-2 text-gray-700 text-base font-medium">{name}</span>
    </div>
  )
}

export default CardCategory