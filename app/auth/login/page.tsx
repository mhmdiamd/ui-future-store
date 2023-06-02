"use client"

import Button from '@/app/components/Button'
import Input from '@/app/components/forms/Input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'


const page = () => {

  const [isLoading, setIsLoading] =  useState(false)

  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues : {
      email: "",
      password: ""
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    // do The logic here

    setIsLoading(false)
  }

  return (
    <div className='w-full  h-full lg:max-w-3xl xl:max-w-4xl mx-auto '>
      <div className="w-full h-full flex justify-center items-center ">
        
        <div className="h-max flex gap-24">
          {/* Left Side */}
          <div className="relative w-max">
            <div className='w-[296px] h-[396px] border-2 border-gray-300 rounded-bl-3xl absolute top-7 right-7'></div>
            <Image 
              alt='login-images'
              height={396}
              width={296}
              src={'/images/login.jpg'}
              className='relative'
            />
          </div>
          {/* End Left Side */}

          {/* Right Side */}
          <div className="relative h-full">
            <div className='w-full h-full max-w-md'>
              <h1 className='text-gray-900 text-3xl leading-10'>Shopping for basic necessities, becoming cheaper</h1>
            </div>
            
            <div className="mt-6 w-full md:w-2/3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                  <Input 
                    type='email'
                    id='email'
                    label='Email Address'
                    register={register}
                    required={true}
                    errors={errors}
                    disabled={isLoading}
                  />
                  
                  <Input 
                    type='password'
                    id='password'
                    label='Password'
                    register={register}
                    required={true}
                    errors={errors}
                    disabled={isLoading}
                  />
                </div>

                <Button className='w-full block mt-6'>
                  Sign in to My Account
                </Button>
              </form>

              <Link 
                  href={"/auth/register"}
                  className='w-full 
                    block mt-5 
                    py-3 
                    text-center 
                    bg-gray-200 
                    rounded-md 
                    text-gray-400 
                    hover:text-gray-800 
                    hover:bg-gray-300'
                >Sign Up</Link>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </div>
  )
}

export default page