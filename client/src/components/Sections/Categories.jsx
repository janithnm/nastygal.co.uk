import { Main_Menu_Items } from "../../assets/assets"

const Categories = () => {
    return (
        <div className="w-full flex justify-center items-center overflow-y-scroll my-5 scrollbar-x-hide">
            <div className="container flex justify-start lg:justify-center items-center gap-2 ">

                {Main_Menu_Items.map((menuItem, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 justify-center items-center ">
                            <div className="w-24 h-24 rounded-full">
                                <img src={menuItem.image} alt={menuItem.name}
                                className="cursor-pointer" srcSet="" />
                            </div>
                            <p className="cursor-pointer text-black44. font-semibold text-sm">{menuItem.name}</p>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Categories