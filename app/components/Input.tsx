"use client"

import clsx from 'clsx'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string
  id: string
  type: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors,
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled
}) => {

  return (
    <div className='w-full'>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >{label}</label>
      <div>
          <input
            id={id}
            type={type}
            disabled={disabled}
            autoComplete={id}
            {...register(id, { required: required })}
            className={clsx(`
              mt-1
              w-full
              py-2
              bg-gray-200
              rounded-md
              block
              placeholder:text-gray-600
              sm:text-base
              sm:leading-6
              px-3
              outline-0
            `,
              errors[0] && "focus:ring-rose-500",
              disabled && "opacity-50"
            )}
          />
        </div>
    </div>
  )
}

export default Input