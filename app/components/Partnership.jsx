'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import {AiTwotoneStar} from 'react-icons/ai'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Partnership extends Component {
  render() {
    const settings = {
      
      
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className='my-28'>
      <h2 className='text-center text-[#09215E] dark:text-white text-xl lg:text-4xl font-semibold'>Nos Partenaires</h2>
      <p className='text-center text-sm lg:text-base  mb-20 mt-5'>Nous avons accompagnés des clients dans tous les domaines d'activités</p>

        <Slider {...settings}>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s1.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s10.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s3.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s4.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s5.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s6.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>

          <div className=" px-2 md:px-0">
     
        <Image
          className="w-32 h-full flex justify-center items-center"
          src="/s7.png"
          width={300}
          height={50}
          alt="image"
        />
          </div>
       
        </Slider>
      </div>
    );
  }
}