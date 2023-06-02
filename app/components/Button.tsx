"use client"

import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  danger?: boolean
  secondary?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  danger, secondary, onClick, children, className, type = "button"
}) => {

  const clickHandler = (): void => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      onClick={clickHandler}
      type={type}
      className={clsx(`
        px-6
        py-3
        rounded-md
        bg-emerald-500
        hover:bg-emerald-600
        text-white
      `,
        className && `${className}`,
        danger && "bg-rose-500 hover:bg-rose-600 font-medium text-white",
        secondary && "bg-transparent text-gray-500"
      )}
    >{children}</button>
  )
}

export default Button