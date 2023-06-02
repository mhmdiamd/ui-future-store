"use client"

import Button from '@/app/components/Button'
import Input from '@/app/components/forms/Input'
import Select from '@/app/components/forms/Select'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import SuccessRegister from './SuccessRegister'

type Props = {}

const InputForm = (props: Props) => {
  const [store, setStore] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)


  const {register, getValues ,setValue, handleSubmit, formState : {errors}} = useForm<FieldValues>({
    defaultValues : {
      name: "",
      email: "",
      password: "",
      store_name : "",
      category : "",
      is_seller : false
    }
  })

  if(isSuccess) {
    return (
      <SuccessRegister />
    )
  }

  
  return (
    <>     
      <div className="title text-center md:text-start mx-auto">
        <h1 className='text-3xl text-gray-900'>Start trading the latest way </h1>
      </div>
      <div>
        <form onSubmit={() => setIsSuccess(true)}>
          <div className="mt-3">
            <Input
              type='text'
              label='Fullname'
              id='name'
              required
              register={register}
              errors={errors}
            />
          </div>

          <div className="mt-3">
            <Input
              type='email'
              label='Email Address'
              id='email'
              required
              register={register}
              errors={errors}
            />
          </div>


          <div className="mt-3">
            <Input
              type='password'
              label='Password'
              id='password'
              required
              register={register}
              errors={errors}
            />
          </div>
          
          <div className="mt-3 flex flex-col">
            <label htmlFor="isSeller" className='text-sm text-gray-900 font-medium w-full'>Store</label>
            <span className='text-gray-500 text-sm mt-1 mb-1'>Do you want to open the store?</span>
            <div className="flex gap-3 mt-2">
              <div className="flex gap-1">
                <input type="radio" name="is_seller" value={"true"} className="radio radio-xl radio-success mr-1" />
                <span className='text-sm'>Yes, Sure</span>
              </div>
              <div className="flex gap-1">
                <input type="radio" name="is_seller" value={"false"} className="radio radio-success mr-1" />
                <span className='text-sm'>No, Thanks</span>
              </div>
            </div>
          </div>


          <div className="mt-3">
            <Input
              type='text'
              label='Store Name'
              id='store_name'
              required
              register={register}
              errors={errors}
            />
          </div>

          <div className="mt-3">
            <Select 
              id='category'
              label='Category'
              register={register}
              data={[{id: 1, name: "Ilham"}]}
            />
          </div>
      
          <div className="w-full mt-5">
              <Button type='submit' className='w-full'>Sign up Now</Button> 
          </div>
        </form>
        <Link 
          href={"/auth/login"}
          className='w-full 
            block mt-5 
            py-3 
            text-center 
            bg-gray-200 
            rounded-md 
            text-gray-400 
            hover:text-gray-800 
            hover:bg-gray-300'
        >Sign In</Link>
      </div>
    </>    
  )
}

export default InputForm