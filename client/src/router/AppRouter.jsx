import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "shop",
        children: [
          {
            index:true,
            element: <Shop />,
          },
        ],
      },
    ],
  },
]);


const AppRouter = ()=>{
    return(<RouterProvider router={router} />) 
}

export default AppRouter;