import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../utils/baseUrl";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { MdIncompleteCircle } from "react-icons/md";
import ChartRevenue from "./ChartRevenue";

const DashboardHome = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({}); // State for holding fetched data
    // console.log(data)

    const navigate = useNavigate();

    const [isDescending, setIsDescending] = useState(true); // State to handle sorting order
    const [users, setUsers] = useState([ // Initial sample users
        { id: 1, name: 'Maria Smith', score: 9.1, avatar: 'https://randomuser.me/api/portraits/women/82.jpg' },
        { id: 2, name: 'Mark Murphy', score: 8.4, avatar: 'https://randomuser.me/api/portraits/men/81.jpg' },
        { id: 3, name: 'Paul Sampson', score: 9.2, avatar: 'https://randomuser.me/api/portraits/men/80.jpg' },
        { id: 4, name: 'Richard Torp', score: 7.2, avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
        { id: 5, name: 'Jane Lewis', score: 8.2, avatar: 'https://randomuser.me/api/portraits/women/78.jpg' },
        { id: 6, name: 'Emma Richards', score: 7.4, avatar: 'https://randomuser.me/api/portraits/women/77.jpg' },
        { id: 7, name: 'Scot Paterson', score: 7.7, avatar: 'https://randomuser.me/api/portraits/men/76.jpg' },
        { id: 8, name: 'Oscar Da Silva', score: 7.8, avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
      ]);

      // Function to handle sorting of users based on their scores
      const handleSortToggle = () => {
        const sortedUsers = [...users].sort((a, b) => {
          if (isDescending) {
            return a.score - b.score; // Ascending
          } else {
            return b.score - a.score; // Descending
          }
        });
    
        setUsers(sortedUsers); // Update users state with sorted data
        setIsDescending(!isDescending); // Toggle the sorting order
      };
    

    // useEffect hook to fetch data from the backend API when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(`${BASE_URL()}/api/admin`, { // API request to fetch data from the backend
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                })

                setData(response.data);// Set the fetched data in state
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures this effect runs only once, on mount
    console.log(data)

    if(loading) return <Loading/>
  return (
    <>
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-orange-600 bg-orange-100 rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalVinyls}</span>
                  <span className="block text-gray-500">Vinyls</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">${data?.totalSales}</span>
                  <span className="block text-gray-500">Total Sales</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{data?.trendingVinyls}</span>
                  <span className="inline-block text-xl text-gray-500 font-semibold">(7%)</span>
                  <span className="block text-gray-500">Trending Vinyls</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <MdIncompleteCircle className='size-6'/>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalOrders}</span>
                  <span className="block text-gray-500">Total Orders</span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-8 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  <ChartRevenue />
                  </div>
                </div>
              </div>
              <div className="flex flex-col row-span-2 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Users by average order</span>
                  <button           type="button"
          onClick={handleSortToggle}
          className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
        >
          {isDescending ? 'Descending' : 'Ascending'}
          <svg
            className="-mr-1 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
                  </button>
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                <ul className="p-6 space-y-6">
          {users.map((user) => (
            <li key={user.id} className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img src={user.avatar} alt={`${user.name} profile`} />
              </div>
              <span className="text-gray-600">{user.name}</span>
              <span className="ml-auto font-semibold">{user.score}</span>
            </li>
          ))}
        </ul>
                </div>
              </div>
              <div className="flex flex-col row-span-2 gap-6 rounded-lg">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    </div>
                <div>
                  <span className="block text-2xl font-bold">4</span>
                  <span className="block text-gray-500">Orders pending</span>
                </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">68</span>
                  <span className="block text-gray-500">Daily website visits</span>
                </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default DashboardHome