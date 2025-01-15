import { Link } from "react-router-dom"
import { BsFillVinylFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

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
      <div>Nav links</div>
    </nav>
   </header>
  )
}

export default Navbar