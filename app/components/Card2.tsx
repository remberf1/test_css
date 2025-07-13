import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  colorClass: string; // changed from "color"
}

export default function Card2({ title, description, image, colorClass }: CardProps) {
  return (
    <div className={`rounded-lg bg-white py-10 px-8 text-left shadow-lg ${colorClass} border-t-[6px]`}>
      <p className="font-bold mt-3 pb-4 text-2xl text-gray-700">{title}</p>
      <p className="text-gray-500 text-lg">{description}</p>
      <div className="mt-10 flex justify-end">
        <Image
          src={image}
          alt={`${title} icon`}
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
