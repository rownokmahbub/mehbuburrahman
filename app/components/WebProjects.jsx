"use client";
import "animate.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import Shapes from "./Shapes";
export default function WebProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  const services = [
    {
      title: "Medical Appointment Booking",
      subtitle: "Website Design",
      icons: "/webmedical.png",
      href:'/web/projects/projectdetails'
    },
    {
      title: "ExoNext Digital Agency",
      subtitle: "Web Design agency",
      icons: "/exonextlight.png",
      href:'/web/projects/projectdetails'
    },
    {
      title: "ZipCodemy Online Learning Platform",
      subtitle: "UIUX  Design,Brand Design",
      icons: "/zipcodemy.png",
      href:'/web/projects/projectdetails'
    },
    
  ];
  return (
    <div
      className=" relative bg-slate-200 dark:bg-slate-900/20 flex flex-col justify-center items-center lg:py-2 px-4 lg:px-10 "
      id="service"
    >
    <Shapes/>
      <div ref={ref} className="container lg:mx-auto mt-5">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-4xl text-[#09215E] dark:text-white font-semibold"
          >
           Website Design Works
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-center mt-2 max-w-2xl w-full"
          >
            Here is all the design For Web App
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 items-center py-10">
          {services.map((service) => (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1 }}
              key={service.length}
              className="rounded-3xl group relative overflow-hidden"
            >
            <div className="overflow-hidden  rounded-xl">
            <Image
                  className="w-full h-[350px] max-h-96 group-hover:scale-110 transition duration-500 rounded-lg"
                  src={service.icons}
                  width={1200}
                  height={1000}
                />
            </div>
            <div className="absolute left-0 top-0 w-full block h-full bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-slate-900/0">
                  <div className="flex relative flex-col  justify-end rounded-2xl overflow-hidden items-start px-6 py-4 text-white w-full h-full">
                 
                    <div className="flex justify-between items-center w-full ">
                    <h3 className="text-xl  lg:text-xl  font-semibold">
                      {service.title}
                    </h3>
                    <Link href={service.href} className="block lg:hidden">
                      <GoArrowUpRight className="text-white text-2xl"/>
                    </Link>
                    </div>
               
                    <p className="text-xs  lg:text-sm ">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
       
               
                
                 
                    <Link href={service.href} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:group-hover:flex  p-12 bg-black/20 backdrop-blur-md dark:bg-slate-800/30 rounded-full  text-2xl  cursor-pointer">
                      <GoArrowUpRight className="text-white text-2xl"/>
                    </Link>
                
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
