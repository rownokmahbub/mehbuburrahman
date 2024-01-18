"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { RiUserStarLine } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  const variant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      ref={ref}
      className="relative bg-[#FFFFFF] dark:dark-bg px-4 lg:px-10 py-10"
      id="hero"
    >
      <div className="absolute w-56 bottom-0 h-56 bg-gradient-to-l from-yellow-100 via-purple-100 to-teal-100 dark:dark-bg blur-3xl z-0 rounded-full"></div>

      <div className="container  lg:h-screen lg:mx-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-10 items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variant}
          transition={{ duration: 1 }}
          className="max-w-lg w-full z-10"
        >
          <Image
            className="w-full "
            src="/hero.svg"
            width={1200}
            height={900}
            alt="image"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
          className="flex z-20 flex-col gap-2 items-start max-w-xl w-full"
          data-aos="fade-right"
        >
          <h3 className="text-2xl text-secondary dark:text-white lg:text-5xl capitalize font-semibold my-3">
            Rownok Mahbub
          </h3>
          <h3 className="text-lg text-primary  lg:text-xl capitalize font-semibold mb-3">
            UI/UX Designer
          </h3>
          <div className=" w-full mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odit
            vitae corrupti! Commodi, suscipit! Veniam vitae fuga, molestiae
            repudiandae quasi accusamus corrupti magnam quae ab asperiores dolor
            laborum aliquam suscipit!
            <div className="w-full bg-slate-100 dark:bg-slate-800 mt-10 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center  rounded-2xl">
                <div className="flex gap-3 items-center">
                  <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full lg:p-2 dark:bg-slate-600">
                    <RiUserStarLine className="text-2xl text-primary dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm xl:text-base text-slate-500 dark:text-slate-300">
                      Experience
                    </p>
                    <p className="xl:text-lg font-medium">
                      More than 10 Years.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full lg:p-2 dark:bg-slate-600">
                    <IoMdCall className="text-2xl text-primary dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm xl:text-base text-slate-500 dark:text-slate-300">
                      What's app
                    </p>
                    <p className="xl:text-lg font-medium">+8801880741710</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-7 flex-col lg:flex-row gap-2 lg:items-center  rounded-2xl">
                <div className="flex gap-3 items-center">
                  <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full lg:p-2 dark:bg-slate-600">
                    <MdOutlineMarkEmailUnread className="text-2xl text-primary dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm xl:text-base text-slate-500 dark:text-slate-300">
                      Email
                    </p>
                    <p className="xl:text-lg font-medium">example@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full lg:p-2 dark:bg-slate-600">
                    <GrLinkedinOption className="text-2xl text-primary dark:text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm xl:text-base text-slate-500 dark:text-slate-300">
                      LinkedIn
                    </p>
                    <p className="xl:text-lg font-medium">
                      linkedin/Rownokmahbub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button color="primary" variant="shadow" size="lg">
            Download CV
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
