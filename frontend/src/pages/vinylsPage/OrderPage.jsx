import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi"
import {useAuth} from "../../context/AuthContext"

const OrderPage = () => {
    const {currentUser} = useAuth()
    // fetch orders based on current user's email
    const { data: orders = [], isLoading, isError} = useGetOrderByEmailQuery(currentUser.email)
    // Loading and error states
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error geting orders data</div>
  return (
    <div className='container mx-auto p-6'>
                    <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                    {
                        orders.map((order, index) => (
                            <div key={order._id} className="border-b mb-4 pb-4">
                                <p className='p-2 bg-secondary text-white w-10 rounded mb-2'># {index + 1}</p>
                                <h2 className="font-bold mt-2">Order ID: {order._id}</h2>
                                <p className="text-gray-600">Name: {order.name}</p>
                                <p className="text-gray-600">Email: {order.email}</p>
                                <p className="text-gray-600">Phone: {order.phone}</p>
                                <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                                <h3 className="font-semibold mt-2">Address:</h3>
                                <p> {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                <h3 className="font-semibold mt-2">Products Id:</h3>
                                <ul>
                                    {order.productIds.map((productId) => (
                                        <li key={productId}>{productId}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>)
            }
    </div>
  )
}

export default OrderPage