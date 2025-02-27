"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleNavClose = () => {
    setNavToggle(false);
  };

  const pathName = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-gray-900 px-6 py-4 font-fredoka">
      <div className="rounded-full bg-black p-2">
        <Image
          src="/gru-images/gru-logo.jpg"
          width={35}
          height={35}
          alt="Gru G Symbol"
        />
      </div>

      {navToggle && (
        <div>
          <ul className="absolute right-0 top-20 flex min-h-screen w-[60%] flex-col items-center space-y-8 bg-gray-900 py-6 font-fredoka text-xl uppercase text-minion-yellow md:hidden">
            <li
              className={
                pathName === "/"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/">
                Home
              </Link>
            </li>
            <li
              className={
                pathName === "/about"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/about">
                About
              </Link>
            </li>
            <li
              className={
                pathName === "/family"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/family">
                Family
              </Link>
            </li>
            <li
              className={
                pathName === "/minions"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/minions">
                Minions
              </Link>
            </li>
            <li
              className={
                pathName === "/tech-showcase"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/tech-showcase">
                Tech
              </Link>
            </li>
            <li
              className={
                pathName === "/contact"
                  ? "text-xl font-semibold text-electric-blue"
                  : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
              }
            >
              <Link onClick={handleNavClose} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/*------------------------------------- Full Nav ------------------------------------- */}
      <div>
        <button
          onClick={handleNavToggle}
          className="font-luckiest text-lg text-minion-yellow md:hidden"
        >
          {navToggle ? "Abort" : "Menu"}
        </button>
        <ul className="hidden items-center space-x-4 text-lg uppercase text-minion-yellow md:flex">
          <li
            className={
              pathName === "/"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathName === "/about"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              pathName === "/family"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
            }
          >
            <Link href="/family">Family</Link>
          </li>
          <li
            className={
              pathName === "/minions"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
            }
          >
            <Link href="/minions">Minions</Link>
          </li>
          <li
            className={
              pathName === "/tech-showcase"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
            }
          >
            <Link href="/tech-showcase">Tech</Link>
          </li>
          <li
            className={
              pathName === "/contact"
                ? "text-xl font-semibold text-electric-blue"
                : "neon-glow rounded-lg px-4 py-1 text-minion-yellow transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg"
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
