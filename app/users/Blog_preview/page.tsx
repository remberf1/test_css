
import {Inter} from 'next/font/google'
import Image from 'next/image'
import Card from '@/app/components/Card'

const text=['Github','Frontend Mentor','Linkedin','Twitter','Instagram']

const inter = Inter({ subsets: ['latin'] })
const Preview = () => {
  return (
        <div className={`${inter.className} bg-[var(--color-Grey-900)] min-h-screen py-5 flex justify-center`}>
  <div className="w-full max-w-sm px-8 py-10 flex flex-col items-center justify-center text-center rounded-xl bg-Grey-800 space-y-4">
    <Image src="/avatar-jessica.jpeg" height={80} width={80} alt="Avatar" className="rounded-full" />
    <div>
      <p className="text-White text-2xl mb-1">Jessica Randall</p>
      <p className="text-Green text-md">London, United Kingdom</p>
    </div>
    <p className="text-White">&quot;Front-end developer and avid reader&quot;</p>
    <div className="w-full">
      {text.map((item, index) => (
        <Card key={index} text={item} />
      ))}
    </div>
  </div>
</div>
  )
}
export default Preview