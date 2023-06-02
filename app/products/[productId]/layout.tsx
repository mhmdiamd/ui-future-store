import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'

interface ProductDetailLayoutProps {
  children : React.ReactNode
}

const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
  children
}) => {

  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}

export default ProductDetailLayout