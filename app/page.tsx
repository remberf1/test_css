import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-slate-300 flex items-center justify-center">
        <div className="bg-white py-4 px-4 rounded-xl shadow-lg max-w-xs flex flex-col items-center text-center">
          <Image
            priority
            src="/image-qr-code.png"
            alt="QR Code"
            width={300}
            height={300}
            className="rounded-lg mb-6"
          />
          <p className="text-xl font-bold mb-4 text-slate-900 px-2">
            Improve your front-end skills by building projects
          </p>
          <p className="text-slate-500 text-sm pb-5 px-5 font-semibold">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
