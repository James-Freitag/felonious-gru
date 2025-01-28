"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between items-center px-6 py-8 bg-blue-600">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul className="flex space-x-4 items-center text-lg">
          <li
            className={
              pathName === "/"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathName === "/about"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              pathName === "/family"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
            }
          >
            <Link href="/family">Family</Link>
          </li>
          <li
            className={
              pathName === "/minions"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
            }
          >
            <Link href="/minions">Minions</Link>
          </li>
          <li
            className={
              pathName === "/tech-showcase"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
            }
          >
            <Link href="/tech-showcase">Tech</Link>
          </li>
          <li
            className={
              pathName === "/contact"
                ? "font-semibold text-white text-xl underline"
                : "text-neutral-200"
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
