import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='h-[calc(100vh-50px)] flex justify-center items-center bg-gradient-to-br from-[#851203] via-[#C5001A] to-[#031954]'>
         <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl flex justify-center font-semibold mb-6'>Login</h2>
            <form>
                <div className="mb-5">
                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-4 leading-snug focus:outline-none focus:shadow"/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-4 leading-snug focus:outline-none focus:shadow"/>
                </div>
                <div>
                    <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-8 rounded focus:outline-none">Login</button>
                </div>
            </form>
            <p className='align-baseline font-normal mt-3 text-sm'>Don't have an account yet? Register <Link to="/register" className="text-red-800 hover:text-red-500 underline">here</Link> </p>
         </div>
    </div>
  )
}

export default Login