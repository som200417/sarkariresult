import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-container">
      <div className="bg-[#1e1e1e] text-gray-300 flex flex-col-reverse items-center gap-4 justify-evenly md:flex-row py-4">

        {/* Left Side */}
        <p className="text-sm font-medium text-center md:text-left lg:text-base">
          Copyright © 2026{" "}
          <Link href="/" className="hover:text-[#D8372C]">
            sarkariresult6.com
          </Link>
        </p>

        {/* Right Side Links */}
        <div className="flex flex-row flex-wrap justify-center gap-2 text-xs font-medium md:gap-4 md:text-base lg:gap-6">
          <Link
            href="/blog"
            className="transition duration-300 hover:text-[#D8372C]"
          >
            Blog
          </Link>

          <Link
            href="/disclaimer"
            className="transition duration-300 hover:text-[#D8372C]"
          >
            Disclaimer
          </Link>

          <Link
            href="/privacy-policy"
            className="transition duration-300 hover:text-[#D8372C]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/contact"
            className="transition duration-300 hover:text-[#D8372C]"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="transition duration-300 hover:text-[#D8372C]"
          >
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;