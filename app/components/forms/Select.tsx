"use client"

import clsx from 'clsx'
import React from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

type SelectProps = {
  label: string
  id: string
  register: UseFormRegister<FieldValues>
  errors?: FieldError ,
  disabled?: boolean
  required?: boolean
  data: any[]
}


const Select: React.FC<SelectProps> = ({
  label, id, errors, register, disabled, data, required
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >{label}</label>

      <select 
        id={id}
        {...register(id, { required: required })}
        className={clsx(`
          select
          bg-gray-100
          w-full
          outline-none
          py-3 px-2
          rounded-md
          text-gray-700
        `, 
        )}
      >
        {data?.map((item, i) => (
          <option className='px-2 py-3 bg-white focus:bg-white' key={i} value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
)
    
}

export default Select