import Categories from "../../components/Sections/Categories"
import Hero from "./Hero"

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Categories/>
      <Hero/>
      
    </div>
  )
}

export default Home
