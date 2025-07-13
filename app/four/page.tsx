import {Poppins} from 'next/font/google'
import Card2 from '../components/Card2'
const pop = Poppins({
   weight: ['100', '500', '700'],
    subsets: ['latin'],
})
const Four = () => {
  return (
    <div className={`${pop.className}  px-7  min-h-screen py-10`}>
        <div className='flex flex-col  text-center  '>
        <p className='text-Grey-500 text-3xl font-thin mb-1 mt-14'>Reliable, efficient delivery</p>
        <p className='text-3xl font-bold text-Grey-500 mb-6'>Powered by Technology</p>
        <p className='text-Grey-400 text-xl mb-15'> Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful</p>
        </div>
        <div className='flex flex-col  gap-y-4'>
        <Card2 title="Supervisor" description="Monitors activity to identify project roadblocks" image="/images2/icon-supervisor.svg" color="--color-Cyan"/>
        <Card2 title="Team Builder" description="Scans our talent network to create the optimal team for your project" image="/images2/icon-team-builder.svg" color="--color-Red"/>
        <Card2 title="Karma" description="Regularly evaluates our talent to ensure quality" image="/images2/icon-karma.svg" color="--color-Orange"/>
        <Card2 title="Calculator" description="Uses data from past projects to provide better delivery estimates" image="/images2/icon-calculator.svg" color="--color-Blue"/>
        </div>
    </div>
  )
}
export default Four