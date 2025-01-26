import { BsFillVinylFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-12">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="text-center">
        <div className="flex justify-center items-center md:12 gap-12"> 
        <Link to='/' className="flex items-center gap-2">
        <BsFillVinylFill className="size-12"/>
        <h1 className="font-primary font-extrabold text-2xl">Vinyl Store</h1>
        </Link>
      </div>
        </div>

        {/* Links and Subscribe container */}
        <div className="w-full flex flex-col md:flex-row justify-around items-center md:items-center space-y-6 md:space-y-0">
          {/* Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-gray-400">footerLink</a>
            <a href="/" className="hover:text-gray-400">footerLink</a>
            <a href="/" className="hover:text-gray-400">footerLink</a>
            <a href="/" className="hover:text-gray-400">footerLink</a>
          </div>

          {/* Subscribe Input */}
          <div className="flex items-center">
            <p className="mr-4 hidden md:block">Subscribe to our newsletter!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md text-black"
              />
              <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} made by bykruno.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
