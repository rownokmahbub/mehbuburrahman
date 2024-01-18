'use client'

import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { MdOutlineDesignServices } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { MdWeb } from "react-icons/md";
export default function WebService() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible'); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

    const services=[
        {
            title:'Graphics Design',
            subtitle:'To design a logo you need a graphics designer and here I can help you with that.we have 5+ years of experience in this field.',
            icons:<MdAutoGraph />,
            
        },
        {
          title:'UI/UX Design',
          subtitle:'Are you looking for ui/ux design then you come to the right place.just give your breaf ideas and you are good to go.',
          icons:<MdOutlineDesignServices />,
          
      },
      {
        title:'Website Design',
        subtitle:'There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into',
        icons:<MdWeb />,
       
    },
    {
      title:'Website Design',
      subtitle:'There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into',
      icons:<MdWeb />,
     
    },
    {
      title:'Graphics Design',
      subtitle:'To design a logo you need a graphics designer and here I can help you with that.we have 5+ years of experience in this field.',
      icons:<MdAutoGraph />,
 
  },
  {
    title:'UI/UX Design',
    subtitle:'Are you looking for ui/ux design then you come to the right place.just give your breaf ideas and you are good to go.',
    icons:<MdOutlineDesignServices />,
    
},

        
    ]
  return (
    <div ref={ref} className=" relative bg-white dark:main-dark py-10 lg:py-2 px-4 lg:px-10 " id="service">
    <div className="container lg:mx-auto mt-5">
    <div className="flex flex-col justify-center items-center">
    <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl text-secondary text-center dark:text-white font-semibold"
      >
      Our Services
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-center mt-2 max-w-2xl w-full"
      >
Get 20% discount on early purchase.
      </motion.h1>

    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7 items-center py-10">
      {services.map((service,i)=>(
        <motion.div  initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }} key={i} className="border-2 card-light dark:card-dark  relative border-slate-200  dark:border-[#282D45] px-4 py-3 md:px-5 md:py-5 flex justify-center h-full gap-3 min-w-fit items-start group rounded-xl">
        <div className="text-lg md:text-4xl w-10 h-10 md:w-16 md:h-16  group-hover:scale-90 transition duration-400 flex  items-center">
    {service.icons}
            </div>
            <div>
            <h3 className='text-base lg:text-2xl my-2  font-semibold'>{service.title}</h3>
            <p className='text-start mb-2 max-w-xs'>{service.subtitle}</p>
            </div>
       
       
        </motion.div>
      ))}
      
       
      </div>
    </div>
    </div>
  )
}
