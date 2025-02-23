import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-minion-yellow py-6 px-4 font-fredoka">
      <div className="flex flex-col gap-2 justify-center items-center">
        <ul className="flex flex-col justify-center items-center text-lg">
          <li>&copy;Gru Enterprises. All Rights Reserved</li>
          <li className=" border-b-2 border-crimson-red pb-2">
            Minions may not be used without explicit persmission
          </li>
        </ul>
        <ul className="flex justify-center items-center space-x-2 text-md">
          <li>Facebook</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="absolute bottom-0 right-20">
        <Image
          src="/gru-images/gru-footer-nobg.png"
          alt="Gru peeking from manhole cover"
          width={400}
          height={200}
        />
      </div>
    </footer>
  );
};

export default Footer;
