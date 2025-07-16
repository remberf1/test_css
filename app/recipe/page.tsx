import Image from "next/image"
import {Young_Serif,Outfit} from 'next/font/google';

const young = Young_Serif({
    weight: '400',
    subsets: ['latin'],
})
const outfit = Outfit({
    weight: ['400','600', '700'],
    subsets: ['latin'],
})


const Recipe = () => {
  return (
    <div className="lg:bg-Stone-100 min-h-screen lg:py-8 flex justify-center">

    <div className="lg:px-12 lg:max-w-6xl lg:bg-white lg:rounded-2xl ">

    <div className={`${outfit.className} lg:py-15`}>
    <div className="relative w-full h-[300px] sm:h-[500px] md:h-[400px]">
  <Image
    src="/assets/image-omelette.jpeg"
    alt="recipe"
    fill
    className="object-cover rounded-lg"
    priority
  />
</div>
<div className="px-12 lg:px-0">
    <div className="py-8">
    <p className={`${young.className} text-Stone-900  max-w-sm text-4xl l lg:text-6xl lg:max-w-6xl`}>
    Simple Omelette Recipe
    </p>
    <p className={ `text-Gray-500 py-4 lg:max-w-[940px] lg:text-2xl`}> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.
</p>
    <div className="bg-Rose-50 rounded-xl p-4">
        <p className="text-Rose-800 font-semibold py-4 text-2xl">  Preparation time</p>
       <ul className="space-y-2 max-w-[210px] text-Stone-600 lg:max-w-md">
  <li className="flex  items-center ">
    <span className="text-2xl pl-2 text-rose-800 mr-6">•</span>
    <span> <span className="font-semibold"> Total:</span> Approximately 10 minutes</span>
  </li>
  <li className="flex items-center">
    <span className="text-2xl text-Rose-800 pl-2 mr-6">•</span>
    <span> <span className="font-semibold">Preparation: </span> 5 minutes</span>
  </li>
  <li className="flex items-start">
    <span className=" text-2xl text-Rose-800 pl-2 mr-6 mb-1">•</span>
    <span> <span className="font-semibold"> Cooking:</span>  5 minutes</span>
  </li>
</ul>
    </div>
    </div>
     <div className=" border-b-2 border-Stone-100 w-full ">
        <p className={`${young.className}  py-4 text-3xl text-Brown-800`}>Ingredients</p>
        <ul className="text-Gray-500 ml-10 text-md list-disc max-w-[190px] space-y-2 mb-6 marker:text-Brown-800 lg:max-w-md">
                <li className="-ml-4 pl-3"> 2-3 large eggs </li>
                <li className="-ml-4 pl-3">Salt, to taste</li>
                <li className="-ml-4 pl-3">Pepper, to taste</li>
                <li className="-ml-4 pl-3">1 tablespoon of butter or oil</li>
                <li className="-ml-4 pl-3">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
    </div>
    <div className={`border-b-2 border-Stone-100  py-4 `}>
        <p className={`text-3xl text-Brown-800 py-4 ${young.className}`}>Instructions</p>
        <div className="flex flex-col text-Gray-500 text-lg space-y-2">
            <div className="flex ">
            <p className="ml-2 mr-4">1.</p> <p>
           <span className="font-semibold">Beat the eggs: </span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
            You can add a tablespoon of water or milk for a fluffier texture.
            </p>
            </div>
            <div className="flex">
            <p className="ml-2 mr-4">2.</p> <p> <span className="font-semibold">Heat the pan:</span>  Place a non-stick frying pan over medium heat and add butter or oil.</p>
      </div>
      <div className="flex">
        <p className="ml-2 mr-4">3.</p> <p> <span className="font-semibold">Cook the omelette:</span>  Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
            the eggs evenly coat the surface.</p>
      </div>
      <div className="flex">
        <p className="ml-2 mr-4">4.</p> <p> <span className="font-semibold">Add fillings (optional):</span>  When the eggs begin to set at the edges but are still slightly runny in the 
        middle, sprinkle your chosen fillings over one half of the omelette.  </p> 
      </div>
      <div className="flex">
        <p className="ml-2 mr-4">5.</p> <p> <span className="font-semibold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the 
          fillings. Let it cook for another minute, then slide it onto a plate.</p>
      </div>
      <div className="flex">
        <p className="ml-2 mr-4">6.</p> <p> <span className="font-semibold">Enjoy: </span>   Serve hot, with additional salt and pepper if needed.</p>
      </div>
          </div>
          
    </div>
    <div className={` py-8`}>
                <p className={ ` ${young.className} text-3xl text-Brown-800`}>Nutrition</p>

                <p className=" max-w-[350px] text-Gray-500 text-lg  mt-4 lg:max-w-2xl">  The table below shows nutritional values per serving without the additional fillings.</p> 
                    <div className="grid grid-cols-1 pr-20 ">
                    <div className="mt-4 flex justify-between px-10 lg:justify-items-normal 5 border-b-2 border-Stone-100">
                      <p className="">Calories</p>
                      <span className="font-semibold text-Brown-800 pr-6 lg:pr-125">277kcal</span>
                    </div>  
                    <div className="mt-4 flex justify-between px-10 border-b-2 border-Stone-100">
                      <p>Carbs</p>
                      <span className="font-semibold text-Brown-800 pr-14 lg:pr-125">0g</span>
                    </div>
                    <div className="mt-4 flex justify-between px-10 border-b-2 border-Stone-100">
                      <p>Protein</p>
                      <span className="font-semibold text-Brown-800 pr-12 lg:pr-125">20g</span>
                    </div>
                    <div className="mt-4 flex justify-between px-10 border-b-2 border-Stone-100">
                      <p>Fats</p>
                      <span className="font-semibold text-Brown-800 pr-12 lg:pr-125">22g</span>
                    </div>
                  </div>

                  </div>
                </div>
                    </div>
    </div>
    </div>
  )
}
export default Recipe