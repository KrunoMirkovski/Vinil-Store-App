import { Link } from "react-router-dom"
import { BsFillVinylFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import avatar from "../assets/avatar.png"
import { useState } from "react";

const dropdownMenu = [
  {name: "Dashboard", href:"/dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Shopping Cart", href:"/shoppingcart"},
  {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {

  const currentUser = false;
  const [dropDownOpen, setDropDownOpen] = useState(false)
  {/*console.log(dropDownOpen)*/}

  return (
   <header className="max-w-screen-2xl mx-auto px-16 py-4 border-b-2 border-red-600">
    <nav className="flex justify-between items-center">
      {/*left_div*/}
      <div className="flex justify-center items-center md:12 gap-12"> 
        <Link to='/' className="flex items-center gap-2">
        <BsFillVinylFill className="size-12"/>
        <h1 className="font-primary font-extrabold text-2xl">Vinyl Store</h1>
        </Link>
      </div>

       {/*center_div*/}
       <div>
          <div className="relative sm:w-60 w-50 space-x-1">
            <FiSearch  className="absolute inline-block left-4 inset-y-2"/> 
            <input type="text" placeholder="Search..." className="bg-[#EAEAEB] w-full py-1 md:px-8 px-8 rounded-lg focus:outline-none"/>
            </div>
       </div>
      {/*right_div*/}
      <div className="relative flex items-center md:space-x-3 space-x-2">

        {/*checking if user is available*/}
        <div>
          {
            currentUser ?<>
            <button onClick={() => setDropDownOpen(!dropDownOpen)}>
              <img src={avatar} alt="user avatar" className={'size-7 h-full pt-2'}/>
            </button>
            {/*show dropdown menu*/}
            {
              dropDownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                        {
                            dropdownMenu.map((item) => (
                                <li key={item.name} onClick={() => setDropDownOpen(false)}>
                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
            }
              </> : <Link to='/login'><FaUser className="size-6"/></Link>
          }
        </div>

      {/* <FaUser className="size-6"/> */}
      <Link to='/cart' className="bg-secondary p-1 sm:px-6 px-2 py-1 flex items-center">
      <HiOutlineShoppingBag color="white" className="size-4"/>
      <span className="text-white px-1 text-sm font-bold sm:ml-1">0</span>
      </Link>
      </div>
    </nav>
   </header>
  )
}

export default Navbar