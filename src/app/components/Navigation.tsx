"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="flex z-50 justify-between items-center px-6 py-4 bg-gray-900 font-fredoka">
      <div className="p-2 bg-black rounded-full">
        <Image
          src="/gru-images/gru-logo.jpg"
          width={35}
          height={35}
          alt="Gru G Symbol"
        />
      </div>
      <div>
        <ul className="flex space-x-4 items-center text-lg text-minion-yellow uppercase">
          <li
            className={
              pathName === "/"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg px-4 py-1"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathName === "/about"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg  px-4 py-1"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              pathName === "/family"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg  px-4 py-1"
            }
          >
            <Link href="/family">Family</Link>
          </li>
          <li
            className={
              pathName === "/minions"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg  px-4 py-1"
            }
          >
            <Link href="/minions">Minions</Link>
          </li>
          <li
            className={
              pathName === "/tech-showcase"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg  px-4 py-1"
            }
          >
            <Link href="/tech-showcase">Tech</Link>
          </li>
          <li
            className={
              pathName === "/contact"
                ? "font-semibold text-electric-blue text-xl"
                : "text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow rounded-lg  px-4 py-1"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
