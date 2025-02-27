"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>();

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-24">
      <h1 className="px-2 pb-2 pt-4 text-center font-luckiest text-5xl uppercase tracking-wider">
        Contact <span className="text-crimson-red line-through">Gru</span>{" "}
        Minions
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-4 border-[1px] border-black bg-gray-900 p-4 font-fredoka uppercase text-minion-yellow md:max-w-[50%] lg:max-w-[30%]"
      >
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border-[1px] border-black p-1 text-black focus:border-minion-yellow"
          />
          {errors.name && (
            <p className="text-crimson-red">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className="border-[1px] border-black p-1 text-black"
          />
          {errors.email && (
            <p className="text-crimson-red">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Message</label>
          <textarea
            {...register("message")}
            rows={6}
            className="border-[1px] border-black p-1 text-black"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full border-[1px] border-black bg-minion-yellow px-4 py-2 font-fredoka text-lg uppercase text-black"
          >
            Submit
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="flex max-w-[500px]">
          <Image
            src="/gru-images/minions-phone-whitebg.jpeg"
            alt="minions on the phone"
            layout="intrinsic"
            width={500}
            height={500}
            className="h-auto w-full max-w-[500px]"
          />
          <p className="py-4 font-luckiest text-xl">Bello, Papoy!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
