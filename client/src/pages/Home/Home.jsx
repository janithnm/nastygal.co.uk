import Categories from "../../components/Sections/Categories"

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Categories/>
      <p>Home</p>
      <button className="p-10 bg-red-400 text-white font-bold">Home</button>
    </div>
  )
}

export default Home
