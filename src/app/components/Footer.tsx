import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-blue-600 text-white py-6 px-4 font-fredoka">
      <div className="flex flex-col gap-4 justify-center items-center">
        <ul className="flex flex-col justify-center items-center text-md">
          <li>&copy;Gru Enterprises. All Rights Reserved</li>
          <li>Minions may not be used without explicit persmission</li>
        </ul>
        <ul className="flex justify-center items-center space-x-2 text-sm">
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
