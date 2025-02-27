import Image from "next/image";
import FamilyCard from "../components/FamilyCard";

const Family = () => {
  return (
    <>
      <section className="mx-auto flex min-h-screen max-w-[80%] flex-col items-center justify-center gap-4 p-4 pt-24">
        <div className="flex w-full flex-col items-center justify-center border-b-2 border-gray-800 py-8 md:min-h-screen md:py-0">
          <h2 className="text-center font-luckiest text-2xl">
            My Family <span className="font-fredoka text-sm">...and Kyle</span>
          </h2>
          <Image
            src="/gru-images/gru-family-photo.png"
            alt="gru and the girls"
            width={800}
            height={800}
          />
        </div>
        <FamilyCard />
      </section>
      <div className="flex items-center">
        <Image
          src="/gru-images/minion-left-side.png"
          width={200}
          height={200}
          alt="minion peaking from the left side of the screen"
        />
        <p className="font-fredoka text-lg font-semibold">
          Bello!! Wot bout us?!
        </p>
      </div>
    </>
  );
};

export default Family;
