import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/homePage/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/vinylsPage/CartPage";
import Checkout from "../pages/vinylsPage/Checkout";
import SingleVinyl from "../pages/vinylsPage/SingleVinyl";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/vinylsPage/OrderPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
             path: "/",
             element:<Home/>,

        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
     },
     {
      path: "/cart",
      element: <CartPage />
     },
     {
      path: "/checkout",
      element: <PrivateRoute><Checkout/></PrivateRoute>
     },
     {
      path: "/vinyls/:id",
      element: <SingleVinyl/>
     }
      ]
 }
  ]);

  export default router;