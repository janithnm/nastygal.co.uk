import React from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

const ValentineSlider = () => {
  const slides = [
    {
      id: 1,
      content: "SteMe Swoon-worthy lingerie to crush hard on yourself in for February 14th and beyond.",
      imageUrl: "https://mediahub.debenhams.com/dbz_prod_Desktop_Upto70_UK_payday?qlt=80&w=1730&h=724&ttl=86400&dpr=1&fit=cvr"
    },
    {
      id: 2,
      content: "Shop Valentines collection.",
      imageUrl: "https://mediahub.debenhams.com/dbz_prod_Desktop_Valentines_UK?qlt=80&w=1730&h=724&ttl=86400&dpr=1&fit=cvr"
    },
    {
        id: 3,
        content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        imageUrl: "https://mediahub.debenhams.com/dbz_prod_Desktop_40DressesShoes_UK?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr"
      },
      {
        id: 4,
        content: "BBBBBBBBBBBBBBBBBB",
        imageUrl: "https://mediahub.debenhams.com/dbz_prod_Desktop_Upto70_Boohoo?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr"
      },
    // Add more slides as needed
  ];

  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center p-4">
              <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full h-64 object-cover" />
              <p className="mt-4 text-center">{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>

      {/* Progress bar */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ValentineSlider;