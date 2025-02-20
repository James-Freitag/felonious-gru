import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="bg-blue-600 flex justify-center items-center w-3/4  min-h-[40rem]">
        <div className="w-full h-full flex justify-center space-x-4">
          <Image
            width={250}
            height={350}
            src="/gru-images/Gru_with_his_freeze_ray.webp"
            alt="Gru with his freeze ray"
            className="ml-8"
          />
          <ul className="flex flex-col justify-center text-white text-6xl space-y-4 font-luckiest tracking-wider">
            <li>Former Supervillain</li>
            <li>Full-time Dad</li>
            <li>Still Awesome</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
