"use client";
import "animate.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import Shapes from "./Shapes";
import data from '../lib/data.json'
export default function MobileAppsProjects() {
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
    <div
      className="relative  flex flex-col justify-center items-center px-4 lg:px-10 py-10"
      id="service"
    >
     <Shapes/>
      <div ref={ref} className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
      
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
            These are my all works that I have done
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 items-center py-10">
          {data.map((service) => (
            <div
             
              key={service.length}
              className="rounded-2xl shadow-2xl shadow-slate-200 border-2 dark:shadow-slate-600 h-96 transition duration-500 overflow-hidden"
            >
              <div className="text-3xl rounded-2xl overflow-hidden relative group flex  justify-center items-center ">
                <Image
                  className="w-full h-96 object-cover"
                  src={service.icons}
                  width={1200}
                  height={1200}
                />
                <div className="absolute left-0 top-0 w-full lg:hidden lg:group-hover:block h-full bg-slate-900/60">
                  <div className="flex relative flex-col gap-2 justify-end rounded-2xl overflow-hidden items-start px-6 py-6 text-white w-full h-full">
                    <Link href={`/productdetails/${service.id}`} className="absolute top-10 right-10 p-2 bg-slate-900/30 border rounded-full hover:border-none hover:bg-primary text-4xl animate__animated animate__slideInUp animate__delay-.3s cursor-pointer">
                      <GoArrowUpRight />
                    </Link>

                    <h3 className="text-xl animate__animated animate__slideInUp animate__delay-.3s lg:text-2xl  font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-xs animate__animated animate__slideInUp animate__delay-.3s lg:text-base ">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
