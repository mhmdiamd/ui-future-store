import React from 'react'

interface NavbarMenuProps {
  label: string
  href: string,
  active: string
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({
  label, 
  href, 
  active
}) => {
  return (
    <div>NavbarMenu</div>
  )
}

export default NavbarMenu