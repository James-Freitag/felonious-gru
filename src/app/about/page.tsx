import React from "react";

const About = () => {
  return (
    <section className="min-h-screen px-4 pb-6 pt-24">
      <div className="p-4 pt-6">
        <h1 className="text-center font-luckiest text-5xl">Gru</h1>
      </div>
      <div
        className="relative mx-auto w-full bg-cover bg-center bg-no-repeat p-6 font-fredoka text-xl text-minion-yellow md:max-w-2xl lg:min-h-[500px] lg:max-w-4xl"
        style={{ backgroundImage: "url('/gru-images/gru-moon-behind.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 flex flex-col justify-end gap-2 p-4 text-minion-yellow">
          <p>
            I am Gru. I used to be the greatest villain the world had ever seen.
            I stole the moon, I made evil plans, and I was unstoppable! But
            then, things changed. I adopted three little girls, and now I&apos;m
            trying to figure out how to be a good guy. I still have my minions,
            of course, they&apos;re loyal - sometimes <strong>too</strong> loyal
            - and very helpful, even though they can be a bit...chaotic.
          </p>
          <p>
            I&apos;ve given up on world domination for the most part, but
            don&apos;t think for a second I don&apos;t have some tricks up my
            sleeve. Family is important, and I will do anything to protect mine.
            Even if it means going up against a villain or two. But hey,
            I&apos;m Gru. What do you expect?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
