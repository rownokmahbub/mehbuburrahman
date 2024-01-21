"use client";
import "animate.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import Shapes from "./Shapes";
import data from "../lib/data.json";
export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  return (
    <div className="relative  w-full  py-10" id="service">
      <div ref={ref} className="">
        <div className="flex flex-col justify-center items-center w-full">
          <Shapes />
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-4xl text-[#09215E] dark:text-white font-semibold"
          >
            Mobile Apps Project
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-center mt-2 max-w-2xl w-full"
          >
            Our Service Will Provide You Best Quality.
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 items-center mt-28">
          {data.map((service, index) => (
            <div
              key={index}
              className="app-light dark:app-dark dark:hover:app-hover hover:app-hover transition-all px-4 relative group duration-700"
            >
           
              <div className="overflow-hidden rounded-2xl transition-all group-hover:duration-1000 relative  flex flex-col md:flex-row md:h-72 ">
                <div className="flex relative flex-col gap-2 justify-end md:justify-center rounded-2xl  items-start md:px-6 py-6 text-white md:text-slate-300 group-hover:text-white w-full h-full">
               
                <div className="flex justify-between items-center w-full">
                <h3 className="text-xl lg:text-7xl flex flex-wrap md:uppercase font-semibold">
                    {service.title}
                  </h3>
                <Link href={`/productdetails/${service.id}`}  className="px-4 md:hidden py-2 flex justify-center items-center bg-primary rounded-full text-xs">
                    
                      <GoArrowUpRight className="text-white text-lg"/>
                    </Link>
                </div>
                
                  <div className="flex items-center  flex-wrap  w-full transition-all duration-1000 md:mt-5 gap-2 md:gap-5">
                    {service.subtitle.split(",").map((data) => (
                      <p className="text-xs bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 md:px-4 md:py-3">
                        {data}
                     
                      </p>
                    ))}
                  
                  </div>
         
                </div>
                <div className=" hidden md:flex relative rounded-2xl">
                <Link href={`/productdetails/${service.id}`}  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:flex z-20 p-12 bg-black/20 backdrop-blur-md dark:bg-slate-800/30 rounded-full  text-2xl  cursor-pointer">
                      <GoArrowUpRight className="text-white text-2xl"/>
                    </Link>
                
                  <Image
                    className="w-full h-full group-hover:scale-110 transition duration-500 rounded-2xl"
                    src={service.icons}
                    width={1200}
                    height={1000}
                  />
                </div>
                <div className=" md:hidden relative rounded-2xl">
                <Link href={`/productdetails/${service.id}`}  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:flex z-20 p-12 bg-black/20 backdrop-blur-md dark:bg-slate-800/30 rounded-full  text-2xl  cursor-pointer">
                      <GoArrowUpRight className="text-white text-2xl"/>
                    </Link>
                
                  <Image
                    className="w-full h-full group-hover:scale-110 transition duration-500 rounded-2xl"
                    src={service.icons}
                    width={1200}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}