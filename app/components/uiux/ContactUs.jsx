'use client'

import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation(); // Initialize controls using useAnimation hook

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  const variant = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  }; 

  useEffect(() => {
    if (inView) {
      controls.start('visible'); // Use controls from useAnimation hook
    }
  }, [inView, controls]);

  return (
    <div ref={ref}
      className=" relative lg:bg-slate-100 lg:dark:bg-slate-900 py-10 px-4 lg:px-10 "
      id="contactus"
    >
      <div className="container lg:mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
      
        <motion.div initial="hidden"
        animate={controls}
        variants={variant}
        transition={{ duration: 1 }} className=" max-w-3xl w-full shadow-3xl dark:shadow-slate-800 shadow-slate-50 border dark:border-slate-500 bg-white dark:bg-slate-800 rounded-xl px-3 lg:px-10 py-10 my-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl lg:text-4xl text-secondary dark:text-white text-center font-semibold">
            Get a free quote now
            </h2>
            <p className="text-center text-sm lg:text-base mt-2">
              Fill Up the form if you have any Query.We would love to hear your
              Thought
            </p>
          </div>
          <div className="grid grid-cols-1  gap-5 lg:gap-6 items-center pt-10 pb-5">
            <Input isRequired type="text" size="sm" label="Your Name" variant="bordered" />
            <Input isRequired
              type="text"
              size="sm"
              label="Your Email"
              variant="bordered"
            />
            <Input
              type="text"
              size="sm"
              label="Your Subject"
              variant="bordered"
            />
          </div>
          <Textarea
            variant="bordered"
            label="Description"
            labelPlacement="inside"
            placeholder=" your Message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
          <div className="flex justify-end mt-2">
            <Button color="primary" variant="shadow">
              Send Message
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
