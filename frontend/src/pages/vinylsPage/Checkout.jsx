import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
import Swal from'sweetalert2';

const Checkout = () => {
    // Access cart items from Redux store
    const cartItems = useSelector(state => state.cart.cartItems);
    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    // Temporary user object (Replace with actual authentication
    const {currentUser} = useAuth(); 
     // Initialize form handling with react-hook-form
    const { register, handleSubmit, formState: { errors }} = useForm();

    const [createOrder, {isLoading}] = useCreateOrderMutation();
    const navigate =  useNavigate()

    // Checkbox state to enable 'Place an Order' button
    const [isChecked, setIsChecked] = useState(false);
    // Form submission handler
    const onSubmit = async (data) => {
        console.log(data)
        // Construct order details
        const newOrder = {
            name: data.name,
            email: currentUser.email,
            address: {
                city: data.city,
                country: data.country,
                zipcode: data.zipcode
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),// Extract product IDs
            totalPrice: totalPrice,
        };

        try {
            await createOrder(newOrder).unwrap();// Call the createOrder mutation and wait for it to finish

            // Show success alert on successful order placement
            Swal.fire({
                title: "Confirmed Order",
                text: "Your order placed successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
              });
              // Redirect user to the orders page
              navigate("/orders")
        } catch (error) {
              console.error("Error creating an order", error);
            alert("Failed to place an order")
        }
     };
     // Show loading indicator if order is being processed
     if(isLoading) return <div>Loading....</div>
  return (
    <section>
        <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-br from-[#851203] via-[#C5001A] to-[#031954]">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded shadow-lg p-2 px-4 md:p-8 mb-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-6">
                                {/* Left Section: Personal Details & Order Summary */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="font-medium text-lg">Personal Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-xl text-primary mb-2">Cash On Delivery</h2>
                                        <p className="mb-2">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>
                                        <p className="mb-2">Total Price: ${totalPrice}</p>
                                   </div>
                                </div>
                                {/* Right Section: Form Inputs */}
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        {/* Name Input */}
                                        <div className="md:col-span-3">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" {...register("name", { required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
                                            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                                        </div>
                                        {/* Phone Number Input */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="text" id="phone" {...register("phone", { required: true })}  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="+123 456 7890" />
                                            {errors.phone && <p className="text-red-500 text-sm">Phone is required</p>}
                                        </div>
                                         {/* Email Input (Disabled) */}
                                         <div className="md:col-span-3">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" id="email" {...register("email", { required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                disabled
                                                defaultValue={currentUser?.email}
                                                placeholder="email@domain.com" />
                                                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                                        </div>
                                        {/* Country Input */}
                                        <div className="md:col-span-2">
                                            <label htmlFor="country">Country</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input id="country" placeholder="Country" {...register("country", { required: true })} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"/>
                                                {errors.country && <p className="text-red-500 text-sm">Country is required</p>}
                                                <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                                <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Address Input */}
                                        <div className="md:col-span-3">
                                            <label htmlFor="address">Your Address</label>
                                            <input type="text" id="address" {...register("address", { required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
                                        </div>
                                         {/* City Input */}
                                         <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" {...register("city", { required: true })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""/>
                                            {errors.city && <p className="text-red-500 text-sm">City is required</p>}
                                        </div>
                                        {/* Terms & Conditions Checkbox */}
                                        <div className="md:col-span-4 mt-10">
                                            <div className="inline-flex items-center">
                                                <input onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                                <label htmlFor="billing_same" className="ml-2 ">I aggree with the <Link className='underline underline-offset-2 text-primary'>Terms & Conditions</Link> and <Link className='underline underline-offset-2 text-primary'>Shoping Policy.</Link></label>
                                            </div>
                                        </div>
                                        {/* Zip code */}
                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input type="text" id="zipcode" {...register("zipcode", { required: true })} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Zipcode"/>
                                            {errors.zipcode && <p className="text-red-500 text-sm">Zipcode is required</p>}
                                            
                                        </div>
                                        {/* Submit Button */}
                                        <div className="md:col-span-5 text-right mt-10">
                                            <div className="inline-flex items-end">
                                                <button 
                                                disabled={!isChecked}
                                                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Place an Order</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout