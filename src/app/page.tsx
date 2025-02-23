import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-3/4  min-h-[40rem] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="w-full h-full flex justify-center space-x-4">
          <Image
            width={250}
            height={350}
            src="/gru-images/Gru_with_his_freeze_ray.webp"
            alt="Gru with his freeze ray"
            className="ml-8 drop-shadow-[0_0_20px_#0074E4]"
          />
          <ul className="flex flex-col justify-center text-minion-yellow text-6xl space-y-4 font-luckiest tracking-wider">
            <li>
              Former{" "}
              <span className="drop-shadow-[0_0_20px_#0074E4]">
                Supervillain
              </span>
            </li>
            <li>
              Full-time{" "}
              <span className="drop-shadow-[0_0_20px_#0074E4]">Dad</span>
            </li>
            <li>
              Still{" "}
              <span className="drop-shadow-[0_0_20px_#0074E4]">Awesome</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
