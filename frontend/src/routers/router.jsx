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
import AdminLogin from "../components/AdminLogin";
import AdminRoute from "./AdminRoute";


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
     },
  ]
},
{
  path: "/admin",
  element: <AdminLogin/>
},
{
  path: "/dashboard",
  element: <AdminRoute>
     <div>Dashboard</div>
  </AdminRoute>,
  children:[
    {
      path: "",
      element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
    },
    {
      path: "add-new-vinyl",
      element: <AdminRoute>
         <div>Add New Vinyl</div>
      </AdminRoute>
    },
    {
      path: "edit-vinyl/:id",
      element: <AdminRoute>
         <div>Edit Vinyl</div>
      </AdminRoute>
    },
    {
      path: "manage-vinyls",
      element: <AdminRoute>
        <div>Manage Vinyls</div>
      </AdminRoute>
    }
  ]
}
]);

  export default router;