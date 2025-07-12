import {Figtree} from 'next/font/google';
import Image from "next/image"
const fig = Figtree({
    weight: [ '500', '900'],
    subsets: ['latin'],
})
const Blog = () => {
  return (
    <div className={`${fig.className} bg-Yellow h-screen  flex flex-col  justify-center items-center p-12 `}>
        <div className='bg-White p-4 rounded-xl border-2 border-Black shadow-right-bottom max-w-xs'>

        <div className='flex flex-col items-center pb-4'>
            < Image src="/assets/images/illustration-article.svg"
            className='rounded-xl'
             alt="working" width={500} height={500} />
        </div>
        <div>
            <p className='p-2 bg-Yellow flex max-w-[100px] rounded-md mb-3 font-bold items-center justify-center'>Learning</p>
            <p className='pb-3'>Published 21 Dec 2023</p>
            <p className='font-bold text-xl mb-3'>HTML AND CSS foundations</p>
        </div>
        <div>
            <p className='mb-4 text-Gray-500'> These langauages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div className='flex items-center'>
            <Image 
            className='mr-4'
            src="/assets/images/image-avatar.webp" alt="arrow" width={40} height={40} />
            <p className='font-bold'>Greg Hooper</p>
        </div>
        </div>
    </div>
  )
}
export default Blog