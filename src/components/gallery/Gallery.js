import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { Gdata } from './Gdata';
import './gallery.css';

const Gallery = () => {
  return (
    <section className='gallery container section' id='gallery'>
        <h2 className='section__title'>Gallery</h2>
        <span className='section__subtitle'>Testament</span>
        
      
      <Swiper className='gallery_container'
      loop={true}
      grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
            {Gdata.map(({id, image}) => {
                return (
                    <SwiperSlide className='gallery_card' key={id}>
                        <img src={image} alt="" 
                        className='gallery_img' />
                    </SwiperSlide>
                );
            })}
      </Swiper>
    </section>
  )
}

export default Gallery;
