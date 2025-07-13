import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function Card2({ title, description, image, color }: CardProps) {
  return (
    <div className="flex  gap-4  ">
      <div className={`border-t-[6px] rounded-lg bg-white py-10  p-4 px-10 text-left justify-end shadow-md shadow-Grey-500 `}
       style={{ borderTopColor: `var(${color})` }}
      >
        <p className="font-bold mt-3 pb-4 text-2xl text-Grey-500">{title}</p>
        <p className="text-Grey-400 text-lg">{description}</p>
      <div>
        <Image
          src={image}
          alt="Avatar"
          width={80}
          height={80}
          className="mt-10 ml-70"
          />
      </div>
    </div>
          </div>
  );
}