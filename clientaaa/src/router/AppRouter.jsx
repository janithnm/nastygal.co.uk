import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
    ],
  },
]);


const AppRouter = ()=>{
    return(<RouterProvider router={router} />) 
}

export default AppRouter;