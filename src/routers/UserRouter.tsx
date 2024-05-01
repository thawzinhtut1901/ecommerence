import { RouteObject } from "react-router-dom";
import { Home, ProductDetails } from "../pages";


const UserRouter: RouteObject[] = [
    
  {
      path: "/",
      element: <Home/>
      // children: [
      //     {
      //         index: true,
      //         element: <Navigate to={"home"}/>,
      //     },
      // ]
  },

  {
    path: "/product/:id",
    element: <ProductDetails/>
  }
]

export default UserRouter;