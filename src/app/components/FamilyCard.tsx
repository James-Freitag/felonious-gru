import Image from "next/image";
// Mock Data
import { familyData } from "./MockData";

type FamilyDataType = {
  id: number;
  image: string;
  text: string;
};

const FamilyCard = () => {
  const family: FamilyDataType[] = familyData;
  return (
    <>
      {family.map((person, index) => (
        <div
          key={person.id}
          className={`flex flex-col md:flex-row md:justify-evenly ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-4 border-b-2 border-gray-800 p-2 md:min-h-screen`}
        >
          <div className="flex min-h-96 w-full flex-col justify-center gap-4 bg-gray-800 p-4 font-fredoka text-lg text-minion-yellow md:max-w-[60%]">
            <p>{person.text}</p>
          </div>
          <Image
            src={person.image}
            alt="picture of family member"
            width={300}
            height={300}
            className="max-h-fit w-fit"
          />
        </div>
      ))}
    </>
  );
};

export default FamilyCard;
