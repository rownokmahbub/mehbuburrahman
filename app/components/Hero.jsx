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
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative  md:h-screen pt-6  mb-36 md:mb-0"
      id="hero"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="flex z-20 flex-col backdrop-blur-3xl pb-12 gap-2 items-center  md:h-screen"
        data-aos="fade-right"
      >
        <div className="flex relative justify-center items-center gap-3 bg-[#0066FF]/5 dark:bg-slate-800 px-6 py-2 mt-10 rounded-full">
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
          loading="lazy"
          objectFit="cover"
          objectPosition="center"
          width={1000}
          height={1000}
          alt="users"
        />

        <div className="text-2xl text-secondary text-center dark:text-white flex flex-col justify-center items-center lg:text-6xl  font-bold  py-3 w-full">
          <div className="flex gap-2 my-5">
            Intuitive Design
            <div className="overflow-hidden ">
              <Image
                className="w-10 md:w-20 rounded-full  hover:scale-150 hover:rounded-full transition duration-1000"
                src="/main/tab1.png"
                loading="lazy"
                objectFit="cover"
                objectPosition="center"
                width={1000}
                height={1000}
                alt="image"
              />
            </div>
            Speaks
          </div>
          <div className="flex gap-2">
            Louder Than
            <div className="overflow-hidden ">
              <Image
                className="w-10 md:w-20 rounded-full  hover:scale-150 hover:rounded-lg transition duration-1000"
                src="/casestudy/bookingappmain.png"
                loading="lazy"
                objectFit="cover"
                objectPosition="center"
                width={100}
                height={100}
                alt="image"
              />
            </div>
            a Thousand
          </div>
          Words
        </div>
        <div className="max-w-lg text-center text-sm mb-6 md:text-base w-full">
          Designing and developing visually stunning and technically proficient
          websites for clients worldwide.
        </div>
        <Button color="primary" size="lg" variant="shadow">
          Hire Me
        </Button>
      </motion.div>
    </div>
  );
}
