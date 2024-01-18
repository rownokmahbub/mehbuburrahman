"use client";
import Link from "next/link";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
export default function MobileDemos() {

  const services = [
    {
      title:'UI/UX Portfolio',
      images: "/main/uiuxmobile.jpg",
      href: "/uiux",
    },
    {
        title:'UI/UX Portfolio',
        images: "/main/uiuxmobile.jpg",
        href: "/uiux",
      },
      {
        title:'UI/UX Portfolio',
        images: "/main/uiuxmobile.jpg",
        href: "/uiux",
      },
  ];
  return (
    <div
      className=" relative bg-white dark:main-dark py-10 lg:py-2 px-4 lg:px-10 "
      id="service"
    >
      <div className="container lg:mx-auto mt-5">
        <div className="flex flex-col justify-center items-center">
          <h1
          
            className="text-2xl md:text-4xl text-secondary text-center dark:text-white font-semibold"
          >
          Mobile Responsive Demos
          </h1>
          <h1
        
            className="text-center mt-2 max-w-2xl w-full"
          >
            make early purchase to stand out.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-10 items-center py-10">
          {services.map((service, i) => (
            <div
              
              key={i}
              className="border-2 card-light dark:card-dark  relative border-slate-200  dark:border-[#282D45] px-4 py-3 md:px-5 md:py-5 flex flex-col justify-between md:justify-center items-center group rounded-xl"
            >
         
           <h3 className="text-base lg:text-xl font-semibold mb-5">
                {service.title}
              </h3>
         
             
             <div className="image-wrap rounded-2xl overflow-hidden">
             <Image className="" src={service.images} alt={service.title} width={1200} height={1200}/>
             </div>
             <Button className="mt-5" color="primary">
             <Link
                className=" flex items-center gap-3"
                href={service.href}
              >
                   Live Preview  <TbSquareRoundedArrowRightFilled />
              </Link>
    
              </Button>
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
