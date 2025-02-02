import Categories from "../../components/Sections/Categories"
import Hero from "./Hero"
import ValentineSlider from "./ValentineSlider"

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Categories/>
      <Hero/>
      <ValentineSlider />
    </div>
  )
}

export default Home
