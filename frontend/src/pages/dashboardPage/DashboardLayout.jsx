import { Link, Outlet } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import { BsFillVinylFill } from "react-icons/bs";


const DashboardLayout = () => {

// Function to handle logout, removes token from localStorage and navigates to home page
   const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
      }

    return (
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden"> 
        <aside className="hidden sm:flex sm:flex-col">
          <a href="/" className="inline-flex items-center justify-center h-20 w-20 bg-secondary hover:bg-primary focus:bg-red-500">
            <BsFillVinylFill className="size-10"/>
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Dashboard</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </Link>
              <Link to="/dashboard/add-new-vinyl" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Add Vinyl</span>
                <HiViewGridAdd className="h-6 w-6"/>
              </Link>
              <Link to="/dashboard/manage-vinyls" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Documents</span>
                <MdOutlineManageHistory className="h-6 w-6"/>
              </Link>
            </nav>
          </div>
        </aside>
        <div className="flex-grow text-gray-800">
          <header className="flex items-center justify-between w-full h-20 px-6 sm:px-10 bg-white">
           
            <h1 className="text-4xl font-semibold mb-2 ">Vinyl Store Inventory</h1>
            <div className="absolute w-full max-w-md sm:-ml-auto right-10">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-2 border-secondary focus:border-red-500 focus:outline-none placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
            </div>
            <div className="flex flex-shrink-0 items-center ml-auto">
            </div>
          </header>
          <main className="p-6 sm:p-10 space-y-6 ">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h2 className="text-primary text-4xl font-semibold ml-0.5">Dashboard</h2>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                <Link to="/dashboard/manage-vinyls" className="inline-flex px-5 py-3 text-secondary hover:text-primary hover:bg-white border border-secondary rounded-md mb-3">
                  Manage Vinyls
                </Link>
                <Link to="/dashboard/add-new-vinyl" className="inline-flex px-5 py-3 text-white hover:text-primary bg-secondary hover:bg-white border-secondary rounded-md ml-6 mb-3">
                  Add New Vinyl
                </Link>
              </div>
            </div>
           <Outlet/>
          </main>
        </div>
      </section>
      )
    }
    

export default DashboardLayout