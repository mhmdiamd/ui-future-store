import Image from "next/image";
import { TbArmchair, TbDeviceLaptop, TbShirt } from "react-icons/tb"
import { MdSoupKitchen } from "react-icons/md"
import { CgToolbox } from "react-icons/cg"
import { GiNecklace } from "react-icons/gi"
import CardCategory from "./components/cards/CardCategory";
import { products } from "./dummy/products";
import CardProduct from "./components/cards/CardProduct";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto px-10 lg:px-0">

        {/* Jumbotron */}
        <div className="
          relative 
          mx-auto 
          lg:max-w-4xl 
          xl:max-w-5xl 
          overflow-hidden 
          w-full 
          max-w-7xl
          h-[260px] 
          md:h-[360px] 
          rounded-md flex"
        >

          <div className="absolute w-full h-full overflow-hidden bg-sky-900">
            <Image
              alt="image"
              fill
              src={"/images/bg-home.png"}
              className="rounded-md w-full"
            />
          </div>

          <div className="
            flex 
            h-full 
            pl-10 
            w-full 
            bg-danger 
            flex-col 
            z-10 
            relative top-10 md:top-20"
          >
            <h2 className="
              text-2xl
              md:text-4xl 
              font-medium 
              text-amber-900"
            >Discount 50% Off
              <span className="block">All Members</span>
            </h2>
            <p className="text-sm mt-2 text-amber-900">Included tax pricing for U.S citizen or <span className="block mt-1">other countries</span></p>
          </div>

        </div>
        {/* EndJumbotron */}

        {/* Categories */}
        <div className="w-full lg:max-w-4xl xl:max-w-5xl mx-auto mt-6">
          <div className="w-full">
            <h2 className="font-medium text-gray-900 text-xl">Trend Categories</h2>
          </div>
          <div className="w-full mt-3">
            <div className="w-full">
              <div className="flex justify-between gap-7">
                <CardCategory icon={TbArmchair} name="Furniture" />
                <CardCategory icon={TbDeviceLaptop} name="Gadgets" />
                <CardCategory icon={GiNecklace} name="Make Up" />
                <CardCategory icon={TbShirt} name="Fashion" />
                <CardCategory icon={CgToolbox} name="Tools" />
                <CardCategory icon={MdSoupKitchen} name="Kitchen" />
              </div>
            </div>
          </div>
        </div>
        {/* End Categories */}

        {/* Product List */}
        <div className="w-full lg:max-w-4xl xl:max-w-5xl mx-auto mt-6">
          <div className="w-full">
            <h2 className="text-xl font-medium">Trending Products</h2>
          </div>
          <div className="w-full flex gap-7 mt-3">

            {products?.map((product, i) => (
              <CardProduct 
                key={i}
                src={product.src}
                title={product.title}
                price={product.price}
              />
            ))}
            
          </div>

          <div className="w-full flex gap-7 mt-3">
          
            {products?.map((product, i) => (
                <CardProduct 
                  key={i}
                  src={product.src}
                  title={product.title}
                  price={product.price}
                />
              ))}

            </div>
        </div>
      </div>
    </>
  )
}
