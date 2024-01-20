"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Button } from "@nextui-org/react";

import Shapes from "./Shapes";

export default function WebHero() {
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
      ref={ref}
      className="relative main-light pt-10 pb-44  dark:main-dark md:border-b  dark:border-slate-500 px-4 lg:px-40"
      id="hero"
    >
      <div className="absolute w-56 top-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl rounded-full"></div>

      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-center  w-full"
          data-aos="fade-right"
        >
          <div className="flex relative justify-center items-center gap-3 bg-[#0066FF]/5 dark:bg-slate-800 px-6 py-2 rounded-full">
            <span class="hidden absolute lg:left-4 lg:top-3 lg:flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <p className="text-sm ml-3 text-secondary dark:text-white capitalize font-medium">
              🙋🏼‍♂️ Hi - I'm Mehbubur Rahman
            </p>
          </div>
          <Shapes />
        
            <Image
              className="w-28 h-28 mt-5 object-cover rounded-full block group-hover:hidden"
              src="/web/user.png"
              width={1200}
              height={1200}
              alt="users"
            />
        
         

          <div className="text-2xl text-secondary text-center dark:text-white flex flex-col justify-center items-center lg:text-6xl  font-bold  py-3 w-full">
            <div className="flex gap-2 my-5 overflow-hidden">
              Intuitive Design
              <div className="overflow-hidden ">
              <Image
                className="w-10 md:w-20 rounded-full  hover:scale-150 hover:rounded-full transition duration-1000"
                src="/main/tab1.png"
                width={700}
                height={100}
                alt="image"
              />
          </div>
           
              Speaks
            </div>
            <div className="flex gap-2">
              Louder Than a
              <div className="overflow-hidden ">
              <Image
                className="w-10 md:w-20 rounded-full  hover:scale-150 hover:rounded-lg transition duration-1000"
                src="/casestudy/bookingappmain.png"
                width={700}
                height={100}
                alt="image"
              />
          </div>
              Thousand
            </div>
            Words
          </div>
          <div className="max-w-lg text-center text-sm mb-6 md:text-base w-full">
            Designing and developing visually stunning and technically
            proficient websites for clients worldwide.
          </div>
          <Button color="primary" size="lg" variant="shadow">
            Hire Me
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
