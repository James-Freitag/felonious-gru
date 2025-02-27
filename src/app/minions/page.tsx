import Image from "next/image";
import React from "react";

const Minions = () => {
  return (
    <section className="flex min-h-screen max-w-[3/4] flex-col items-center justify-center px-4 pb-6 pt-24">
      <div className="mx-auto flex flex-col">
        <div>
          <h1 className="text-center font-luckiest text-4xl">Bello!!</h1>
        </div>
        <div>
          <Image
            src="/gru-images/minions-butts.jpg"
            alt="minions butts"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Minions;
