
import React from 'react'
import InputForm from './components/InputForm'
import SuccessRegister from './components/SuccessRegister'

type Props = {}

const page = (props: Props) => {


  return (
    <div className='w-full h-full lg:max-w-3xl xl:max-w-4xl mx-auto '>
      <div className="w-full h-full flex justify-center items-center ">
       
          <div className="flex flex-col mx-auto w-full md:max-w-[350px]">
            <div className="mt-4">
              <InputForm />
            </div>
          </div>
      </div>
    </div>
  )
}

export default page