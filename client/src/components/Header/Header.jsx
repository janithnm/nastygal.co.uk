
import { CircleX, Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { MainLogo } from '../MainLogo/MainLogo';
import { headerThirdBarContent, MenuItems } from '../../assets/assets';

const Header = () => {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className='w-full flex flex-col justify-center items-center '>
        {/* top */}
        <div className='container flex justify-between items-center py-4'>
          <div className=' flex justify-start items-center gap-3'>
            <button className=' flex xl:hidden'>
              <Menu />
            </button>
            <a href=""><MainLogo /></a>
          </div>

          <div className='bg-gray-100 flex py-3 px-6 rounded-full w-2xl'>
            <input type="text" className='w-full focus:outline-none' placeholder='Search Product and Brands' />
            <div className=' flex justify-end items-center gap-3'>
              <CircleX className=' text-white ' fill='#8f8f8f ' strokeWidth={1} />
              <Search strokeWidth={1} />
            </div>
          </div>

          <div className='flex justify-end items-center gap-3 '>
            <button>
              <Search strokeWidth={1} />
            </button>
            <button>
              <User strokeWidth={1} />
            </button>
            <button>
              <Heart strokeWidth={1} />
            </button>

            <button>
              <ShoppingBag strokeWidth={1} />
            </button>
          </div>

        </div>

        {/* 2nd */}
        <div className='hidden xl:flex bg-black-444 justify-center items-center w-full'>
          <div className='flex justify-center items-center'>
            {MenuItems.map((menuItem, index) => {
              return (
                <button key={index} className=' text-neutral-100 hover:text-black-444 hover:bg-neutral-100 font-bold p-2 '>
                  {menuItem.section}
                </button>
              )
            })}
          </div>
        </div>

        {/* 3rd */}
        <div className='w-full bg-gray-100'>
          <div className='container flex justify-center items-center mx-auto'>
            {headerThirdBarContent.map((headerThirdBarContentItem, index) => {
              return (
                <div key={index} className={`flex flex-col w-full h-fit justify-center items-center gap-0 p-2 cursor-pointer ${headerThirdBarContentItem.bachgroundColor}`}>
                  <p className='text-black font-semibold text-sm'>{headerThirdBarContentItem.mainText}</p>
                  <p className='text-black-444 font-light text-sm underline'>{headerThirdBarContentItem.subText}</p>
                </div>
              )
            })}

          </div>
        </div>

        {/* 4th */}
        <div className='flex bg-neutral-900 justify-center items-center w-full py-1 md:py-2'>
        <p className='text-white font-semibold text-sm'>Free Delivery On Orders Over £49</p>
        </div>

      </div>
    </div>
  )
}

export default Header