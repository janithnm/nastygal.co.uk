import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import { MainLogo } from '../MainLogo/MainLogo';

const Header = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className='w-full flex flex-col'>
        {/* top */}
        <div className='w-full flex justify-between items-center'>
          <div className='flex justify-start items-center gap-3 p-32'>
            <button>
              <Menu />
            </button>
            <a href=""><MainLogo /></a>
          </div>

          <div className='bg-gray-100 flex'>
            <input type="text" />
            <Search />
          </div>

          <div className='flex justify-end items-center gap-3 '>
            <button>
              <Search /> </button>
            <button>
              <User />
            </button>
            <button>
              <Heart />
            </button>

            <button>
              <ShoppingBag />
            </button>
          </div>

        </div>

        {/* 2nd */}
        <div className='hidden lg:flex bg-neutral-900 justify-center items-center'>
        <div className='flex bg-neutral-900 justify-center items-center '>
          <button className='px-11 py-32 text-neutral-200 hover:text-neutral-900 hover:bg-neutral-200 font-bold p-20'>a</button>
        </div>
        </div>

        {/* 3rd */}
        <div className=''>
        </div>

        {/* 4th */}
        <div className=''>
        </div>

      </div>
    </div>
  )
}

export default Header