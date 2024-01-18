'use client'
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaHospitalUser} from "react-icons/fa";
import {FaSchoolCircleCheck} from 'react-icons/fa6'
import {AiFillSchedule} from 'react-icons/ai'


export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible'); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  return (
    <div className="relative py-10 lg:py-2 bg-gradient-to-t from-slate-100 via-[#F4EEFB] to-slate-100 px-4 lg:px-10" id="aboutus">
      <div className="container lg:h-[80vh] lg:mx-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-10 items-center">
        <Image
          className="rounded-2xl max-w-xl w-full lg:h-96"
          src="/aboutus.png"
          width={1200}
          height={1200}
          alt="image"
        />
        <div ref={ref} className="flex flex-col items-start max-w-2xl w-full">
        <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-2xl lg:text-3xl font-bold  text-blue-800"
      >
        Care that propels life forward
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className=" text-blue-800"
      >
           3 Easy Steps to Home Care
      </motion.h1>
        
          <div className="group flex gap-3 items-start w-full mt-4">
            <div className="text-xl lg:text-3xl text-primary  flex-shrink-0 group-hover:text-white group-hover:border-none border border-primary rounded-full group-hover:bg-primary  w-16 h-16 flex justify-center items-center">
              <FaHospitalUser />
            </div>
            <div>
        
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-xl font-semibold"
      >
          Home Care Service
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-gray-500"
      >
            Care for where you are and want to go
Nurturing care for new or expectant moms
Alzheimer and memory care
Illness and cancer care
      </motion.h1>
            
            </div>
          </div>
          <div className="group flex gap-3 items-start w-full mt-4">
            <div className="text-xl lg:text-3xl text-primary  flex-shrink-0 group-hover:text-white group-hover:border-none border border-primary rounded-full group-hover:bg-primary  w-16 h-16 flex justify-center items-center">
              <AiFillSchedule />
            </div>
            <div>
            <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-xl font-semibold"
      >
         Schedule a home assessment
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-gray-500"
      >
           Friendly companionship
Communicate with family members
Customized to fit your needs
Errands, shopping, prescription drug pickups
      </motion.h1>
            
            </div>
          </div>
          <div className="group flex gap-3 items-start w-full mt-4">
            <div className="text-xl lg:text-3xl text-primary  flex-shrink-0 group-hover:text-white group-hover:border-none border border-primary rounded-full group-hover:bg-primary  w-16 h-16 flex justify-center items-center">
              <FaSchoolCircleCheck />
            </div>
            <div>
            <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-xl font-semibold"
      >
          Select the right caregiver
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-gray-500"
      >
           Refresh and recharge with a much-needed break
A few hours or a few days away whatever you choose
Peace of mind that your loved one is in good hand
      </motion.h1>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
