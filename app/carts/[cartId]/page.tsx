"use client"

import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import Image from 'next/image'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

const page = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const { 
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }

   } = useForm<FieldValues>({
    defaultValues : {
      address1: "",
      address2: "",
      province : "",
      city: "",
      postal_code: "",
      country: "",
      phone: "",
    },
  })
  // Submit Handler
  const onSubmit : SubmitHandler<FieldValues> = (data) => {

  }

  return (
    <div className="flex flex-col w-5/6 ">
      {/* Table Section */}
      <div className="table w-full mt-5">
        <table className='table-fixed w-full text-left'>
          <thead>
            <tr className='font-normal'>
              <th className='font-normal text-xl text-gray-700'>Image</th>
              <th className='font-normal text-xl text-gray-700'>
                <div className="block">
                  Name & Seller
                </div>
              </th>
              <th className='font-normal text-xl text-gray-700'>
                <div className="block ps-10">
                  Price
                </div>
              </th>
              <th className='font-normal text-xl text-gray-700'>
                <div className="flex w-full justify-end">
                  <span className='block w-full max-w-[109px]'>Menu</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='relative block box-border mt-4 mb-2 h-[85px]'>
                <Image 
                  alt="product-photo"
                  fill
                  src={"/images/products/sofa.jpg"}
                  className='h-full rounded-md max-w-[160px]'
                />
              </td>

              <td className='h-ful'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4"
                >
                  <div className='block bg-none font-medium'>Sofa Feel Better</div>
                  <div className='text-sm text-gray-500'>Sofa Feel Better</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4
                  ps-10 
                  "
                >
                    <div className='block bg-none'>$29,112</div>
                    <div className='text-sm text-gray-500'>USD</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  items-center
                  justify-end
                  mt-4
                  w-full
                  "
                >
                  <Button 
                    danger={true}
                    onClick={() => {}}
                  >
                    Remove
                  </Button>
                </div>
              </td>
            </tr>

            <tr>
              <td className='relative block box-border mt-4 mb-2 h-[85px]'>
                <Image 
                  alt="product-photo"
                  fill
                  src={"/images/products/sofa.jpg"}
                  className='h-full rounded-md max-w-[160px]'
                />
              </td>

              <td className='h-ful'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4"
                >
                  <div className='block bg-none font-medium'>Sofa Feel Better</div>
                  <div className='text-sm text-gray-500'>Sofa Feel Better</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4
                  ps-10 
                  "
                >
                    <div className='block bg-none'>$29,112</div>
                    <div className='text-sm text-gray-500'>USD</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  items-center
                  justify-end
                  mt-4
                  w-full
                  "
                >
                  <Button 
                    danger={true}
                    onClick={() => {}}
                  >
                    Remove
                  </Button>
                </div>
              </td>
            </tr>

            <tr>
              <td className='relative block box-border mt-4 mb-2 h-[85px]'>
                <Image 
                  alt="product-photo"
                  fill
                  src={"/images/products/sofa.jpg"}
                  className='h-full rounded-md max-w-[160px]'
                />
              </td>

              <td className='h-ful'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4"
                >
                  <div className='block bg-none font-medium'>Sofa Feel Better</div>
                  <div className='text-sm text-gray-500'>Sofa Feel Better</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  h-full  
                  flex-col justify-center
                  mt-4
                  ps-10 
                  "
                >
                    <div className='block bg-none'>$29,112</div>
                    <div className='text-sm text-gray-500'>USD</div>
                </div>
              </td>

              <td className='h-full'>
                <div className="
                  flex 
                  items-center
                  justify-end
                  mt-4
                  w-full
                  "
                >
                  <Button 
                    danger={true}
                    onClick={() => {}}
                  >
                    Remove
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
      {/* End table Section */}

      {/* Form Shiiping address */}
      <div className="flex flex-col w-full mt-5">
        <form onSubmit={handleSubmit(onSubmit)}> 
          {/* address */}
          <div className="flex flex-col w-full">

            <div className="w-full flex ">
              <h2 className='font-semibold text-gray-900'>Shopping Details</h2>
            </div>

            <div className="w-full gap-5 flex mt-2">
              <div className="w-1/2">
                <Input
                  type='text'
                  disabled={isLoading}
                  label={"Address1"}
                  id={"address1"}
                  required
                  errors={errors}
                  register={register}
                />
                
              </div>
              <div className="w-1/2">
                <Input
                    type='text'
                    disabled={isLoading}
                    label={"Address2"}
                    id={"address2"}
                    required
                    errors={errors}
                    register={register}
                  />
              </div>
            </div>

            <div className="w-full gap-5 flex mt-5">
              <div className="w-1/3">
                <Input
                  type='text'
                  disabled={isLoading}
                  label={"Province"}
                  id={"provice"}
                  required
                  errors={errors}
                  register={register}
                />
              </div>
              <div className="w-1/3">
                <Input
                  type='text'
                  disabled={isLoading}
                  label={"City"}
                  id={"city"}
                  required
                  errors={errors}
                  register={register}
                />
              </div>
              <div className="w-1/3">
                <Input
                  type='number'
                  disabled={isLoading}
                  label={"Postral Code"}
                  id={"postal_code"}
                  required
                  errors={errors}
                  register={register}
                />
              </div>
            </div>

            <div className="w-full gap-5 flex mt-5">
              <div className="w-1/2">
                <Input
                  type='text'
                  disabled={isLoading}
                  label={"Country"}
                  id={"country"}
                  required
                  errors={errors}
                  register={register}
                />
              </div>

              <div className="w-1/2">
                <Input
                  type='number'
                  disabled={isLoading}
                  label={"Phone"}
                  id={"phone"}
                  required
                  errors={errors}
                  register={register}
                />
              </div>
            </div>

          </div>
          {/* End Address */}

          {/* Payment Information */}
          <div className="w-full mt-10 flex flex-col">

            <div className="w-full">
              <h2 className='text-base font-semibold'>Payment Informations</h2>
            </div>

            <div className="w-full flex justify-between mt-3">
              <div className="w-full flex flex-col">
                <span className='block text-base text-gray-900'>
                  $10
                </span>
                <span className='block text-sm text-gray-500 mt-1'>Country Tax</span>
              </div>
              <div className="w-full flex flex-col">
                <span className='block text-base text-gray-900'>
                  $280
                </span>
                <span className='block text-sm text-gray-500 mt-1'>Product insurance</span>
              </div>
              <div className="w-full flex flex-col">
                <span className='block text-base text-gray-900'>
                  $580
                </span>
                <span className='block text-sm text-gray-500 mt-1'>Ship to Jakarta</span>
              </div>
              <div className="w-full flex flex-col">
                <span className='block text-base text-emerald-500'>
                  $392,409
                </span>
                <span className='block text-sm text-gray-500 mt-1'>Total</span>
              </div>
              <div className="w-full flex flex-col">
                <Button
                  type='submit'
                >
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
          {/* End Payment Information */}
        </form>
      </div>
      {/* End Form Shiiping address */}

    </div>
  )
}

export default page