import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-900 px-4 py-6 font-fredoka text-minion-yellow md:relative">
      <div className="flex flex-col items-center justify-center gap-2">
        <ul className="flex flex-col items-center justify-center text-center text-lg">
          <li>&copy;Gru Enterprises. All Rights Reserved</li>
          <li className="border-b-2 border-crimson-red pb-2">
            Minions may not be used without explicit persmission
          </li>
        </ul>
        <ul className="text-md flex items-center justify-center space-x-2">
          <li>Facebook</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="max-w-[400px] md:absolute md:bottom-0 md:right-0 lg:right-20">
        <Image
          src="/gru-images/gru-footer-image.png"
          alt="Gru peeking from manhole cover"
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
