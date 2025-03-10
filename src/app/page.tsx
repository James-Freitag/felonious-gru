import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6 py-24 pb-6 md:gap-20">
      <div className="flex flex-col px-4 pt-8 text-center font-luckiest text-6xl tracking-wide">
        <h1>Ah, Welcome!</h1>
        <p className="text-xl">
          come in come in...just don&apos;t touch anything!
        </p>
      </div>
      <div className="md:max-w-3/4 flex max-w-full items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 p-8 lg:min-h-[40rem]">
        <div className="flex h-auto items-center justify-center space-x-4 px-4">
          <Image
            width={350}
            height={350}
            src="/gru-images/Gru_with_his_freeze_ray.webp"
            alt="Gru with his freeze ray"
            className="lg-max-w-[400px] ml-8 w-full drop-shadow-[0_0_20px_#0074E4] md:max-w-[250px] lg:h-auto"
          />
          <ul className="flex flex-col justify-center space-y-4 font-luckiest text-xl tracking-wider text-minion-yellow md:text-3xl lg:text-6xl">
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
      <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-8 border-t-2 border-gray-900 py-6 md:max-w-[3/4] md:flex-row md:py-20">
        <p className="px-6 indent-4 font-fredoka text-lg md:max-w-[35%]">
          Welcome to my masterpiece of villainous{" "}
          <span className="font-semibold">brilliance</span>. I am Gru, the
          greatest supervillain of our time - don&apos;t argue, it&apos;s a
          fact. Over the years, I&apos;ve perfected the art of stealing the
          moon, building elaborate lairs, and of course—creating chaos. But
          let&apos;s not forget, I also design, innovate, and bring unthinkable
          ideas to life. Browse through - meet my family, view my work, and
          witness how even the most daring and mischievous plans can result in
          world-class results. Mwahahaha!
        </p>
        <Image
          src="/gru-images/moon-landing-image.jpg"
          alt="gru on tower with moon in background"
          width={500}
          height={500}
          className="px-4"
        />
      </div>
    </main>
  );
}
