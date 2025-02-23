import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";

const Register = () => {

      // State to store error messages
      const [message, setMessage] = useState("");
      // Destructuring authentication functions from context
      const {registerUser, signInWithGoogle} = useAuth();
      // Hook for programmatic navigation
      const navigate = useNavigate()
      // React Hook Form setup for handling form validation
      const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
  
        //register user
        const onSubmit = async (data) => {
            try {
                await registerUser(data.email, data.password);
                alert("User registered successfully!");
            } catch (error) {
                setMessage("Yor email and password are not valid") 
           console.error(error)
            }
        };

        // Function to handle Google sign-in
          const handleGoogleSignIn = async() => {
            try {
                await signInWithGoogle();
                alert("Successful login with Google!");
                navigate("/")
            } catch (error) {
                alert("Login with Google has failed");
                console.error(error)
            }
          }
        
  return (
    <div className='h-[calc(100vh-50px)] flex justify-center items-center bg-gradient-to-br from-[#851203] via-[#C5001A] to-[#031954]'>
         <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl flex justify-center font-semibold mb-6'>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-4 leading-snug focus:outline-none focus:shadow"/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                    <input  {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-4 leading-snug focus:outline-none focus:shadow"/>
                </div>
                {
                    message && <p className='text-red-400 text-sm italic mb-3'>{message}</p>
                }
                <div>
                    <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-8 rounded focus:outline-none">Register</button>
                </div>
            </form>
            <p className='align-baseline font-normal mt-8 mb-3 text-sm'>Have an account? Please Login <Link to="/login" className="text-red-800 hover:text-red-500 underline">here</Link> </p>

            {/* sign in with google*/}

            <div>
                <button onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-favorite hover:bg-secondary text-white font-bold py-3 px-3 rounded focus:outline-none'>
                <FcGoogle  className='mr-3'/> Sign in with Google account
                </button>
            </div>
         </div>
    </div>
  )
}

export default Register