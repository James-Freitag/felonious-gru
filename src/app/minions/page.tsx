import Image from "next/image";
import React from "react";

const Minions = () => {
  return (
    <section className="flex min-h-screen max-w-[3/4] flex-col items-center justify-center px-4 pb-6 pt-24">
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1 className="text-center font-luckiest text-4xl">
            Bello!! Ha Hah Ha
          </h1>
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
      <div className="flex flex-col items-center justify-center py-10 md:max-w-[80%] md:flex-row md:py-0">
        <p className="indent-4 font-fredoka text-lg font-semibold md:max-w-[35%]">
          Bellow!! Poopay, ba-ba-ba! Tulaliloo ti amo! Me want banana, papoy!
          Bello, me want to go boom-boom! Ba ba doo, me no like dodo! Meee-haha,
          ba-na-na! Poo-ya, la la la! Poochie-papoi! Me find banana! Toodaloo,
          la-la-la!
        </p>
        <Image
          src="/gru-images/minion-tower.jpg"
          alt="minions in a tower"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center justify-center py-10 md:max-w-[80%] md:flex-row md:pt-40">
        <Image
          src="/gru-images/minion-bananas.jpg"
          alt="minions with bananas"
          width={500}
          height={500}
        />
        <p className="bg-gray-800 p-8 indent-4 font-fredoka text-lg text-minion-yellow md:max-w-[35%]">
          Banan-nana, me love! Ba-ba-ba, papoi! Nananana, banana! Hee-hee!
          Banan-nana, mmm, so yummyyy! Poopay, me need banana, no stop!
          Ba-na-na! Meeeee-haha! Tulaliloo, me dance for banana! Poochie-papoi,
          banana, banana, banana! Banan-nana, me happy, me smile, me giggle!
          Oooo, mmm, banana Hee-hee!
        </p>
      </div>
      <div className="flex items-center justify-between border-r-2 border-gray-900 md:max-w-[80%] md:border-x-2 lg:mt-40">
        <Image
          src="/gru-images/minion-left-side.png"
          alt="minion-left-side"
          width={200}
          height={200}
          className="hidden md:block"
        />
        <div className="max-w-[50%] font-fredoka text-lg font-semibold">
          <p className="indent-4">
            kay, okay... <span className="text-xl font-bold">listen</span>!
            Me... serious face... we need to... fix-da-thing! No more fun! We
            must... go-to-da-moon... but also... BAAA-nana! Im-poh-tant! Me no
            kiddin&apos;! Me se-ri-ous! We need... work-together! Uh-oh, maybe
            me no serious... but... me mean-it! Me have plan, we go boom-boom,
            then banana! Yup! Me promise, hehe!
          </p>
        </div>
        <Image
          src="/gru-images/minion-right-side.jpg"
          alt="minions in a tower"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center justify-center pt-40 md:max-w-[80%]">
        <div className="relative">
          <Image
            src="/gru-images/minions-raygun.jpg"
            alt="minions with ray gun"
            width={700}
            height={700}
            className=""
          />
          <p className="absolute bottom-16 left-5 font-fredoka font-semibold text-crimson-red md:bottom-24 md:left-12">
            Eeeek..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Minions;
