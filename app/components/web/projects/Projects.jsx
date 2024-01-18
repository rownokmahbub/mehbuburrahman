"use client";
import "animate.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
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
      title: "Creative Business Solution",
      subtitle: "App Development",
      icons: "/service1.jpg",
      href:'/web/projects/projectdetails'
    },
    {
      title: "Web Design In Figma",
      subtitle: "Web Design",
      icons: "/service2.jpg",
      href:'/web/projects/projectdetails'
    },
    {
      title: "Adobe Illustrator",
      subtitle: "Design",
      icons: "/service3.jpg",
      href:'/web/projects/projectdetails'
    },
    
  ];
  return (
    <div
      className=" relative bg-slate-200 dark:bg-slate-900/20  lg:py-2 px-4 lg:px-10 "
      id="service"
    >
      <div ref={ref} className="container lg:mx-auto mt-5">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1 }}
            className="text-4xl text-[#09215E] dark:text-white font-semibold"
          >
            Our Create Work
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 items-center py-10">
          {services.map((service) => (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1 }}
              key={service.length}
              className="rounded-3xl group relative overflow-hidden px-5 py-5 bg-white dark:bg-slate-800"
            >
            <div className="overflow-hidden rounded-xl">
            <Image
                  className="w-full h-72 group-hover:scale-110 transition duration-500 rounded-lg"
                  src={service.icons}
                  width={1200}
                  height={100}
                />
            </div>
          
                  <h3 className="text-xl mt-2 lg:text-2xl font-semibold">
                      {service.title}
                    </h3>
                    <div className="flex justify-between items-center">
                    <p className="text-xs lg:text-base ">
                      {service.subtitle}
                    </p>
                    <Link href={service.href} className="block md:hidden bg-white/50 backdrop-blur-md dark:bg-slate-800  text-2xl  cursor-pointer">
                      <GoArrowUpRight />
                    </Link>
                    </div>
                 
                    <Link href={service.href} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex  p-12 bg-white/20 backdrop-blur-md dark:bg-slate-800/30 rounded-full  text-2xl  cursor-pointer">
                      <GoArrowUpRight className="text-white text-2xl"/>
                    </Link>
                
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
