"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class WebCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
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
              className="w-[600px] rounded-xl  flex justify-center items-center"
              src="/main/uiuxherolight.png"
              width={1000}
              height={100}
              alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-[700px] rounded-xl  flex justify-center items-center"
              src="/main/uiuxservicelight.png"
              width={700}
              height={100}
              alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-[700px] rounded-xl  flex justify-center items-center"
              src="/main/uiuxherodark.png"
              width={700}
              height={100}
              alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-[700px] rounded-xl  flex justify-center items-center"
              src="/main/uiuxexpdark.png"
              width={700}
              height={100}
              alt="image"
            />
          </div>

          <div className="px-3">
            <Image
              className="w-[700px] rounded-xl  flex justify-center items-center"
              src="/main/uiuxservicedark.png"
              width={700}
              height={100}
              alt="image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
