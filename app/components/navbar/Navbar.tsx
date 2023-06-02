"use client"

import page from '@/app/carts/[cartId]/page'
import useRoutes from '@/app/hooks/useRoutes'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({

}) => {
  const pathname = usePathname()

  const btnDisabledHandler = useCallback((urlPath : string): boolean => {
    if(pathname.toLowerCase() == "/auth/login" || pathname.toLowerCase() == "/auth/register"){
      if(urlPath.toLowerCase() == "/auth/register" || urlPath.toLowerCase() == "/auth/login"){
        return true
      } 
    }
    return false 
  }, [pathname])

  const routes = useRoutes()

  return (
    <header className='bg-white'>
      <nav className='mx-auto flex lg:max-w-4xl xl:max-w-5xl justify-between py-6 px-10 lg:px-0'>
        {/* Start Company Logo */}
        <div className="flex lg:flex-1">
          <a className='' href="">
            <span className='sr-only'>Company Logo</span>
            <Image 
              alt='logo'
              width={41}
              height={51}
              src={"/images/logo.png"}
            />
          </a>
        </div>
        {/* End Company Logo */}

        {/* Start Navbar Menu */}
        <div className="flex pl-4 gap-7 items-center">
          <ul className='w-full flex gap-9 items-center'>
            {routes?.map((route) => 
              !btnDisabledHandler(route.href) && (
              <li 
                className={clsx("py-1",
                  route.label == "Sign In" ? "bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md" : "hover:text-rose-500",
                  route.active && "text-rose-700"
                )}
                key={route.label}
              >
                <Link 
                  className='w-full h-full block'
                  href={route.href}
                >
                  {route.label}
                </Link> 
              </li>
            ))}
          </ul>
        </div>
        {/* End Navbar Menu */}
      </nav>
    </header>
  )
}

export default Navbar