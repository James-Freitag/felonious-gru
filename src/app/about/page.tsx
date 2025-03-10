"use client";
import { evilPlans } from "../lib/types/data";
import { useState } from "react";
import { useForm } from "react-hook-form";

type PlanFormType = {
  name: string;
  item: string;
};

const About = () => {
  const [plan, setPlan] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanFormType>();

  function getRandomPlan(name: string, item: string): string {
    const randomIndex = Math.floor(Math.random() * evilPlans.length);
    const temp = evilPlans[randomIndex].plan;

    return temp.replace(/\${name}/g, name).replace(/\${item}/g, item);
  }

  const onSubmit = (data: PlanFormType) => {
    const planFinished = getRandomPlan(data.name, data.item);
    setPlan(planFinished);
    reset();
  };

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
      <div className="flex w-full flex-col items-center justify-center pt-12">
        <h2 className="pt-12 font-luckiest text-2xl tracking-wide">
          Generate A Diabolical Plan!!
        </h2>
        <p className="font-fredoka text-lg">By yours truly...</p>
        <p className="pb-12 font-fredoka text-lg">Me...Gru..obviously.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-fit w-full flex-col bg-gray-800 p-6 font-fredoka uppercase text-minion-yellow md:max-w-[35%]"
        >
          <label className="text-lg">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="p-1 text-black"
            placeholder="Enter name"
          />
          {errors.name && (
            <p className="text-crimson-red">{errors.name.message}</p>
          )}
          <label className="pt-4 text-lg">Item to steal</label>
          <input
            type="text"
            {...register("item", {
              required: "An item is required",
              pattern: {
                value: /^[^\s]+$/,
                message: "Enter one word",
              },
            })}
            className="p-1 text-black"
            placeholder="Enter an item"
          />

          {errors.item && (
            <p className="text-crimson-red">{errors.item.message}</p>
          )}
          <button
            type="submit"
            className="mt-4 bg-minion-yellow py-4 text-black hover:bg-minion-yellow/90"
          >
            Get Gru&apos;s Plan
          </button>
        </form>
        <aside className="mx-auto flex items-center justify-center px-4 py-6">
          {plan && (
            <div className="relative flex min-h-fit w-full items-center justify-center border-2 border-dashed border-blue-200 bg-blue-900 p-6 font-mono text-blue-300 shadow-lg md:max-w-[60%] lg:min-h-[500px]">
              <div className="pointer-events-none absolute inset-0 bg-[url('/gru-images/blueprint-bg.jpg')] bg-cover opacity-20"></div>

              <p className="drop-shadow-glow relative indent-4 leading-10 md:text-lg lg:text-xl">
                {plan}
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default About;
