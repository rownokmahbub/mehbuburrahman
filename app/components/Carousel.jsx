"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
    
      arrows:false,
    
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className=" md:dark:bg-slate-900 pb-16 -mt-28">
        <Slider {...settings}>
          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/web/zipcodemy.png"
              width={1000}
              height={100}
              sizes="(max-width: 768px)
100vw, (max-width: 1200px)
50vw, 33vw" alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/main/amaxweb1.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/main/tab1.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/casestudy/bookingappmain.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/web/exonext.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>
          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/casestudy/impactify.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>
          <div className="px-3">
            <Image
              className="w-full md:w-[600px] h-36 md:h-72  rounded-xl  flex justify-center items-center"
              src="/web/medicalbooking.png"
                 loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
