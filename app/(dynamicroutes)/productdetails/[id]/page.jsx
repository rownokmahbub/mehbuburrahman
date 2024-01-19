"use client";
import "animate.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import data from "@/app/lib/data.json";
import website from "@/app/lib/website.json";
import MainNav from "@/app/MainNav";
export default function page({ params }) {
  const { id } = params;
  const filteredData = data.find((item) => item.id === id);
  const filterWebsite = website.find((item) => item.id === id);
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
    <div className="relative bg-slate-50 dark:bg-slate-900/10  lg:py-2" ref={ref}>
      <MainNav />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className=" group relative overflow-hidden"
      >
        <div className="overflow-hidden md:h-[92vh] rounded-2xl">
          <Image
            className="w-full  transition duration-500 "
            src={filteredData?.product}
            width={1200}
            height={1000}
          />
        </div>
        <div className="absolute left-0 top-0 w-full block h-full bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-slate-900/0">
          <div className="flex relative flex-col  justify-end rounded-2xl overflow-hidden items-start px-6 py-4 text-white w-full h-full">
            <div className="flex justify-between items-center w-full ">
              <h3 className="text-xl  lg:text-7xl  font-semibold">
                {filteredData.title}
              </h3>
            </div>

            <p className="text-xs mt-5 lg:text-3xl ">{filteredData.subtitle}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold px-4 lg:px-28 my-10">Main Goal</h2>
        <h5 className="text-xl font-medium px-4 lg:px-28 my-10">{filteredData.description}</h5>
      
        
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10"
      >
         <Image
            className=" max-h-96 transition-all duration-500 h-full px-4 object-cover rounded-2xl hover:rounded-[40px]"
            src={filteredData?.ser1}
            width={1200}
            height={1000}
          />
            <Image
            className=" max-h-96 transition-all duration-500 h-full px-4 object-cover rounded-2xl hover:rounded-[40px]"
            src={filteredData?.ser2}
            width={1200}
            height={1000}
          />
             <Image
            className=" max-h-96 transition-all duration-500 h-full px-4 object-cover rounded-2xl hover:rounded-[40px]"
            src={filteredData?.ser3}
            width={1200}
            height={1000}
          />
             <Image
            className=" max-h-96 transition-all duration-500 h-full px-4 object-cover rounded-2xl hover:rounded-[40px]"
            src={filteredData?.ser4}
            width={1200}
            height={1000}
          />
             <Image
            className=" max-h-96 transition-all duration-500 h-full px-4 object-cover rounded-2xl hover:rounded-[40px]"
            src={filteredData?.ser5}
            width={1200}
            height={1000}
          />
        
      </motion.div>
  
    </div>
  );
}
