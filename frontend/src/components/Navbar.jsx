import { Link } from "react-router-dom"
import { BsFillVinylFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
   <header className="max-w-screen-xl mx-auto px-4 py-5">
    <nav className="flex justify-between items-center">
      {/*left_div*/}
      <div className="flex items-center md:12 gap-12"> 
        <Link to='/'>
        <BsFillVinylFill className="size-12"/>
        </Link>

        <div className="relative sm:w-70 w-50 space-x-1">
        <FiSearch  className="absolute inline-block left-4 inset-y-2"/> 
        <input type="text" placeholder="Search..." className="bg-[#EAEAEB] w-full py-1 md:px-8 px-8 rounded-lg focus:outline-none"/>
        </div>
        
      </div>

      {/*right_div*/}
      <div className="relative flex items-center md:space-x-3 space-x-2">
      <FaUser className="size-6"/>
      <Link to='/cart' className="bg-primary p-1 sm:px-6 px-2 py-1 flex items-center">
      <HiOutlineShoppingBag color="white" className="size-4"/>
      <span className="text-white px-1 text-sm font-bold sm:ml-1">0</span>
      </Link>
      </div>
    </nav>
   </header>
  )
}

export default Navbar