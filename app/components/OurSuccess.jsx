'use client'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineFileDone } from "react-icons/ai";
const OurSuccess = () => {
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
          controls.start('visible'); // Use controls from useAnimation hook
        }
      }, [inView, controls]);
    
    const popularCategory= [
        {
            
            title:'Next Js',
            des:'The React Framework for the Web.Build with next js app route with latest technologies.',
            exp:'Latest'
        },
        {
            
            title:'Tailwind CSS',
            des:'A utility-first CSS framework packed with classes.Its a CSS Framework.',
            exp:'Latest'
        },
      
        {
            
            title:'Next UI',
            des:'NextUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.',
            exp:'Latest'
        },
        {
            
            title:'Framer Motion',
            des:'Complete documentation of the Framer Motion animation library. A production-ready motion library for React.',
            exp:'Latest'
        },
        {
            
          title:'Built in Components',
          des:'We have provided a lot of useful build in components to make it easy for customers. Also ReUsable',
          exp:'Reuse'
      },
      {
            
        title:'Elite Author Support',
        des:'We can assure you the proper Elite Author support and faster response for our products.',
        exp:'24/7'
    },
    {
            
      title:'Fast Performance',
      des:'Optimized for a smaller build size, faster dev compilation and dozens of other improvements.',
      exp:'Fast'
  },
  {
            
    title:'Well Documentation',
    des:'We Provide well documentation with good comment and tutorials and also help support if needed.',
    exp:'Good'
},
    ]
  return (
    <div ref={ref} className='bg-slate-100 dark:bg-slate-900' id='features'>
       <div className='container px-4 lg:px-0 mx-auto  flex flex-col justify-center items-center '>
     
       <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl capitalize font-semibold text-center mt-10 mb-5"
      >
 Our Awesome Features
      </motion.h1>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 py-10 w-full">

    {
        popularCategory.map((ctg,i)=>{
            return(
                <motion.div  initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }} key={i} className="rounded-lg bg-slate-50 dark:bg-slate-800 flex gap-3 flex-col  w-full group overflow-hidden transition duration-400 shadow-xl shadow-slate-100 dark:shadow-slate-800 border-2 border-primary dark:border-slate-600">
           
        <p className='text-lg font-semibold text-center bg-primary dark:bg-gray-900  text-white px-4 pb-10 pt-10'>{ctg.title}</p>
        <p className='mx-auto flex justify-center items-end -mt-14 bg-primary dark:bg-gray-900 px-4 py-4 rounded-full w-20 h-20 text-sm font-semibold text-white'>{ctg.exp}</p>
        <div className="w-full px-4 pt-2 pb-4">
            <p className='text-center'>{ctg.des}</p>
           
        </div>
        </motion.div>
            )
        })
    }
       
    </div>
       </div>
     
    </div>
  )
}

export default OurSuccess