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
import DashboardLayout from "../pages/dashboardPage/DashboardLayout";
import DashboardHome from "../pages/dashboardPage/DashboardHome";
import ManageVinyls from "../pages/dashboardPage/manageVinyls/ManageVinyls";
import AddVinyl from "../pages/dashboardPage/addVinyl/addVinyl";
import UpdateVinyl from "../pages/dashboardPage/updateVinyl/UpdateVinyl";


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
     <DashboardLayout/>
  </AdminRoute>,
  children:[
    {
      path: "",
      element: <AdminRoute><DashboardHome/></AdminRoute>
    },
    {
      path: "add-new-vinyl",
      element: <AdminRoute>
         <AddVinyl />
      </AdminRoute>
    },
    {
      path: "edit-vinyl/:id",
      element: <AdminRoute>
          <UpdateVinyl/>
      </AdminRoute>
    },
    {
      path: "manage-vinyls",
      element: <AdminRoute>
        <ManageVinyls />
      </AdminRoute>
    }
  ]
}
]);

  export default router;