"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';

const cities = [
  { id: 1, name: "اسطنبول", trips: 1500, url: "/Image/slider/istanbul-img.png" },
  { id: 2, name: "القاهرة", trips: 1700, url: "/Image/slider/cairo-img.png" },
  { id: 3, name: "دبي", trips: 2500, url: "/Image/slider/dubai-img.png" },
  { id: 4, name: "اسطنبول", trips: 1500, url: "/Image/slider/istanbul-img.png" },
  { id: 5, name: "القاهرة", trips: 1700, url: "/Image/slider/cairo-img.png" },
  { id: 6, name: "دبي", trips: 2500, url: "/Image/slider/dubai-img.png" },
];

const CitySlider = () => {
  return (
    <div className="w-full p-10">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cities.map(city => (
          <SwiperSlide key={city.id}>
            <div
              style={{ backgroundImage: `url(${city.url})` }}
              className="relative w-full h-[450px]  bg-cover rounded-2xl justify-center flex items-end"
            >
              {/* معلومات المدينة */}
              <div className="relative z-10 bg-white/90 w-full p-4 rounded-xl mb-2">
                <h2 className="font-bold text-lg">{city.name}</h2>
                <p className="text-gray-700 text-sm">رحلاتك: {city.trips}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CitySlider;
