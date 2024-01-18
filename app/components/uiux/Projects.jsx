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
      subtitle: "App Development, Product Design",
      icons: "/service1.jpg",
      href:'/uiux/projects/projectdetails'
    },
    {
      title: "Web Design In Figma",
      subtitle: "Web Design, Figma Design",
      icons: "/service2.jpg",
      href:'/uiux/projects/projectdetails'
    },
    {
      title: "Adobe Illustrator",
      subtitle: "Design, App Design",
      icons: "/service3.jpg",
      href:'/uiux/projects/projectdetails'
    },
    
  ];
  return (
    <div
      className=" relative bg-white dark:bg-slate-900/20  lg:py-2 px-4 lg:px-10 "
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-center py-10">
          {services.map((service) => (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1 }}
              key={service.length}
              className="rounded-3xl h-96 transition duration-500 overflow-hidden"
            >
              <div className="text-3xl relative group flex max-h-96 justify-center items-center">
                <Image
                  className="w-full h-96 group-hover:scale-110 "
                  src={service.icons}
                  width={1200}
                  height={100}
                />
                <div className="absolute left-0 top-0 w-full rounded-3xl lg:hidden lg:group-hover:block h-full bg-slate-900/60">
                  <div className="flex relative flex-col gap-2 justify-end items-start px-6 py-6 text-white w-full h-full">
                    <Link href={service.href} className="absolute top-10 right-10 p-2 bg-slate-900/30 border rounded-full hover:border-none hover:bg-primary text-4xl animate__animated animate__slideInUp animate__delay-.5s cursor-pointer">
                      <GoArrowUpRight />
                    </Link>

                    <h3 className="text-xl animate__animated animate__slideInUp animate__delay-.5s lg:text-2xl  font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-xs animate__animated animate__slideInUp animate__delay-.5s lg:text-base ">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
