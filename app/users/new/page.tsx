import Image from "next/image"
import {Fraunces} from 'next/font/google'
import {Montserrat} from 'next/font/google'
import  cart from '../../../public/images/icon-cart.svg'

const fran = Fraunces({
  weight: '700',
  subsets: ['latin'],
})
 
const mont = Montserrat({
  weight: '600',
  subsets: ['latin'],
})
const responsive = () => {
  return (
      <>
      <div className="bg-Cream flex justify-center items-center px-4 py-6 lg:h-screen">
      <div className="  flex flex-col items-center lg:flex-row ">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/image-product-desktop.jpg" />
            <source media="(min-width: 375px)" srcSet="/images/image-product-mobile.jpg" />
            <Image
            className="rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
            src="/images/image-product-mobile.jpg" 
            width={375} height={250}  alt="perfume" />
          </picture>

        </div>
        <div className={`py-6 px-4 bg-white max-w-[375px] rounded-b-lg lg:rounded-b-none lg:rounded-r-lg lg:min-h-[563px] ${fran.className} lg:px-8`}>
          <p className={`text-xs text-Grey py-2 tracking-[5px]  ${mont.className}`}>PERFUME</p>
          <div className="">
          <p className="font-bold text-black text-3xl py-2 text-wrap lg:text-5xl lg:pb-6">Gabrielle Essence Eau De Parfum</p>
          </div>
          <div className="py-2 pb-4 lg:pb-10">
            <p className="text-md text-Grey leading-6 lg:text-lg lg:leading-7">
              A floral, solar and voluptuous interpretation 
              Composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="flex flex-row items-center pb-4 lg:pb-10"><p className="pr-4 text-Green-500 font-bold text-4xl">$149.99</p><p className="text-xs text-Grey line-through">$169.99</p></div>
          <div className=" px-2">
            <button className=" bg-Green-500 hover:cursor-pointer hover:bg-Green-700 text-white font-bold py-3 lg:py-4  rounded w-full flex items-center justify-center">
              <Image src={cart} className="mr-3" alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
            </div>
      </>
  )
}
export default responsive