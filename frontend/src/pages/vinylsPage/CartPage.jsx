import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import GetImgUrl from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/counter/counterSlice";

const CartPage = () => {

    // Access cart items from Redux store
    const cartItems = useSelector(state => state.cart.cartItems);
    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const dispatch = useDispatch()
    // Function to remove an item from the cart
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    // Function to clear all items from the cart
    const handleClearCart = () => {
        dispatch(clearCart())
    } 

  return (
    <div className="mx-auto max-w-3xl flex mt-12 h-full flex-col overflow-hidden bg-white shadow-2xl rounded-lg">
     {/* Cart Items Section */}
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between">
        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
        <div className="ml-3 flex h-7 items-center ">
          {/* Clear Cart Button */}
          <button onClick={handleClearCart}
            type="button"
            className="relative m-2 py-1 px-2 bg-primary text-white text-sm rounded-md hover:bg-secondary transition-all duration-200"
          >
            <span className="">Clear Cart</span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flow-root">
            {/* Conditional Rendering: Check if the cart has items */}
            {
                cartItems.length > 0 ? ( <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {/* Map through cart items and display them */}
                    {
                      cartItems.map((product) => (
                            <li key={product.id} className="flex py-6">
                                {/* Product Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={`${GetImgUrl(product?.coverImage)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      {/* Product Details */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                                {/* Link to Product (Currently linking to home) */}
                              <Link to='/'>{product?.title}</Link>
                            </h3>
                            <p className="sm:ml-4">${product?.newPrice}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Genre: </strong>{product?.genre}</p>
                        </div>
                        {/* Quantity and Remove Button */}
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500"><strong>Quantity:</strong> 1</p>
    
                          <div className="flex">
                            {/* Remove item button */}
                            <button onClick={() => handleRemoveFromCart(product)}
                            type="button" className="font-medium text-red-500 hover:text-red-400">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
              
                        ))
                    }
                </ul>) : (<p>No vinyls found</p>)
            }
        </div>
      </div>
    </div>
    {/* Checkout and Summary Section */}
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        {/* Subtotal Display */}
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${totalPrice ? totalPrice:0}</p>
      </div>
      <p className="mt-0.5 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
      {/* Checkout Button */}
      <div className="mt-6">
        <Link
          to="/checkout"
          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary"
        >
          Checkout
        </Link>
      </div>
      {/* Continue Shopping Button */}
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <Link to="/">
          or 
          <button
            type="button"

            className="font-medium text-slate-700 hover:text-slate-500 ml-1"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CartPage