// components/Card.tsx

interface CardProps {
  text: string;  
}

export default function Card({ text }: CardProps) {
  return (
    <div className="p-3 font-bold bg-Grey-700 text-white rounded-lg shadow hover:cursor-pointer hover:bg-Green hover:text-Grey-700 mb-4">
      <p>{text}</p>
    </div>
  );
}
