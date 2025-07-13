import { Poppins } from 'next/font/google';
import Card2 from '../components/Card2';

const pop = Poppins({
  weight: ['100', '500', '700'],
  subsets: ['latin'],
});

const Four = () => {
  return (
    <div className={`${pop.className} px-7 min-h-screen py-15 bg-gray-200`}>
      <div className="flex flex-col text-center ">
        <p className="text-gray-500 text-2xl md:text-3xl font-thin mb-4 ">
          Reliable, efficient delivery
        </p>
        <p className="md:text-3xl text-2xl font-bold text-gray-500 mb-6">
          Powered by Technology
        </p>
        <p className="text-gray-400 text-xl mb-5 max-w-2xl mx-auto">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:grid-rows-2 max-w-6xl mx-auto mt-10">
        {/* 1. Supervisor (left column, 2 rows) */}
        <div className="md:row-span-2 md:flex md:items-center md:h-full">
          <Card2
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            image="/images2/icon-supervisor.svg"
            colorClass="border-t-cyan-500"
          />
        </div>

        {/* 2. Team Builder (middle, row 1) */}
        <div className="md:col-start-2 md:row-start-1">
          <Card2
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            image="/images2/icon-team-builder.svg"
            colorClass="border-t-red-400"
          />
        </div>

        {/* 3. Karma (middle, row 2) */}
        <div className="md:col-start-2 md:row-start-2">
          <Card2
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            image="/images2/icon-karma.svg"
            colorClass="border-t-yellow-400"
          />
        </div>

        {/* 4. Calculator (right column, 2 rows) */}
        <div className="md:row-span-2 md:flex md:items-center md:h-full md:col-start-3">
          <Card2
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            image="/images2/icon-calculator.svg"
            colorClass="border-t-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Four;
