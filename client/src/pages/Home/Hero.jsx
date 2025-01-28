import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {

    // const [slider, setSlider] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         for (let i = 0; index < 4; index++) {
    //             setSlider(i)
    //         }
    //     }, 2000);
    // })

    return (
        <div className="w-full flex justify-center items-center my-5">
            <div className="container h-[600px] bg-red-300 relative">

                <Swiper
                    modules={[Autoplay]}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper w-full h-full ">
                    <SwiperSlide className='w-full h-full flex justify-center items-center'>Slide 1</SwiperSlide>
                    <SwiperSlide className='w-full h-full flex justify-center items-center'>Slide 2</SwiperSlide>
                    <SwiperSlide className='w-full h-full flex justify-center items-center'>Slide 3</SwiperSlide>
                    <SwiperSlide className='w-full h-full flex justify-center items-center'>Slide 4</SwiperSlide>
                </Swiper>

                <div className="absolute flex justify-between top-[270px] left-0 w-full px-2">
                    <button className='rounded-full bg-gray-100 text-black-444'><ChevronLeft strokeWidth={1} /></button>
                    <button className='rounded-full bg-gray-100 text-black-444'><ChevronRight strokeWidth={1} /></button>
                </div>

                <div className="absolute flex justify-center bottom-4 left-0 w-full px-2">
                    <div className='w-16 h-[2px] bg-neutral-500 flex justify-start items-center'>
                        <div className='w-1 h-full bg-neutral-50'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero