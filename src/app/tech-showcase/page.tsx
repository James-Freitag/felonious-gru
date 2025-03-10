import Image from "next/image";
import React from "react";

const TechShowcase = () => {
  return (
    <section className="mx-auto min-h-screen max-w-[80%] flex-col items-center justify-center pt-24">
      <div className="py-8 text-center font-luckiest text-4xl">
        <h1>Meet Dr. Nefario & Explore Our Inventions</h1>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center py-16 font-fredoka lg:flex-row">
        <p className="max-h-fit w-full bg-gray-800 p-6 indent-4 text-lg text-minion-yellow lg:max-w-[75%] lg:rounded-full">
          I am Dr. Nefarious, the brilliant masterind behind the nost diabolical
          schemes the world has ever known. I take great pleasure in proving
          that intelligence, charisma and a bit of villainous flair can outwit
          even the most heroic adversaries. My genius knows no bounds. I have a
          few minor setbacks, but rest assured, they only make me more
          determined to succeed.
        </p>
        <Image
          src="/gru-images/dr-nefario.jpg"
          alt="Dr.Nefario"
          width={300}
          height={300}
        />
      </div>

      <h2 className="border-t-2 border-gray-800 px-4 pt-28 text-center font-luckiest text-2xl">
        Shrink Ray
      </h2>
      <div className="relative mx-auto flex items-center justify-center p-4">
        <Image
          src="/gru-images/grus-shrink-ray.webp"
          width={400}
          height={400}
          alt="shrink ray"
          className="w-fit"
        />

        <svg
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-full xl:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dimensional Energy Matrix */}
          <line
            x1="45%"
            y1="55%" /* Start point (part) */
            x2="30%"
            y2="65%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Entropy Stabilizer */}
          <line
            x1="40%"
            y1="45%" /* Start point (part) */
            x2="30%"
            y2="30%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Nano-Compression Gel line */}
          <line
            x1="52%"
            y1="45%" /* Start point (part) */
            x2="75%"
            y2="71%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Molecular Condenser */}
          <line
            x1="64%"
            y1="18%" /* Start point (part) */
            x2="75%"
            y2="8%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Cool Handle */}
          <line
            x1="40%"
            y1="83%" /* Start point (part) */
            x2="50%"
            y2="87%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
        </svg>

        {/* Labels */}
        <div className="absolute bottom-[30%] left-[20%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Dimensional Energy Matrix</span>
        </div>

        <div className="absolute left-[25%] top-[25%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Entropy Stabilizer</span>
        </div>
        <div className="absolute bottom-[22%] right-[20%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Nano-Compression Gel</span>
        </div>
        <div className="absolute bottom-[8%] left-[50%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Cool Handle</span>
        </div>
        <div className="absolute right-[15%] top-[2%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Molecular Condenser</span>
        </div>
      </div>

      <h2 className="border-t-2 border-gray-800 px-4 pt-28 text-center font-luckiest text-2xl">
        Freeze Ray
      </h2>
      <div className="relative mx-auto flex items-center justify-center p-4">
        <Image
          src="/gru-images/freeze-ray-whitebg.jpg"
          width={600}
          height={600}
          alt="freeze ray"
          className="w-fit"
        />

        <svg
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-full xl:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glacier induction */}
          <line
            x1="43%"
            y1="38%" /* Start point (part) */
            x2="35%"
            y2="65%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Permafrost Emission NOzzle */}
          <line
            x1="38.5%"
            y1="30%" /* Start point (part) */
            x2="25%"
            y2="14%" /* End point (label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Cryo Core */}
          <line
            x1="55%"
            y1="47%" /* Start point (part) */
            x2="75%"
            y2="71%" /* End point y axis(label) */
            stroke="black"
            strokeWidth="2"
          />
          {/* Thermal Fan */}
          <line
            x1="52%"
            y1="28%" /* Start point (part) */
            x2="60%"
            y2="20%" /* End point y axis(label) */
            stroke="black"
            strokeWidth="2"
          />
        </svg>

        {/* Labels */}
        <div className="absolute bottom-[30%] left-[30%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Glacier Induction Chamber</span>
        </div>
        <div className="absolute left-[20%] top-[5%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Permafrost Emission Nozzle</span>
        </div>
        <div className="absolute bottom-[22%] right-[20%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Cryo-Core Reactor</span>
        </div>
        <div className="absolute right-[30%] top-[15%] hidden bg-gray-800 p-1 px-2 text-minion-yellow xl:block">
          <span className="text-xs">Thermal Nullifier Fan</span>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
