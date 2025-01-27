import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const MainLayout = () => {
  return (
    <div className="w-full">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout