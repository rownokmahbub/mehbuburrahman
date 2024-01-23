"use client";
import "animate.css";
import { FaBehance } from "react-icons/fa";
import Image from "next/image";
import data from "@/app/lib/data.json";
import { FaDribbble } from "react-icons/fa";
import MainNav from "@/app/MainNav";
import Shapes from "@/app/components/Shapes";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Footer from "@/app/Footer";
export default function page({ params }) {
  const { id } = params;
  const filteredData = data.find((item) => item.id === id);

  return (
    <div className="relative bg-slate-50 dark:bg-slate-900/10  lg:py-2">
      <MainNav />
      <div className=" group relative overflow-hidden">
        <div className="overflow-hidden rounded-2xl">
          <Image
            className="w-full h-full transition duration-500 "
            src={filteredData?.product}
            width={1200}
            height={1000}
          />
        </div>
        <div className="absolute left-0 top-0 w-full block h-full bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-slate-900/0">
          <div className="flex relative flex-col  justify-end rounded-2xl overflow-hidden items-start px-6 py-4 text-white w-full h-full">
            <div className="flex justify-between items-center w-full ">
              <h3 className="text-xl  lg:text-7xl  font-semibold">
                {filteredData.title}
              </h3>
            </div>

            <p className="text-xs mt-5 lg:text-3xl ">{filteredData.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative flex flex-col px-4 lg:px-28 justify-center items-start">
        <Shapes />
        <h2 className="text-xl md:text-3xl font-bold  my-10 text-start">Main Goal</h2>
        <div className="flex items-center gap-6">
        <Link href={filteredData.href}>
          <Button color="primary" variant="shadow" size="md">
           Live on 
            <FaBehance className="text-xl"/>
          </Button>
        </Link>
        <Link href={filteredData.href}>
          <Button color="primary" variant="shadow" size="md">
           View on 
            <FaDribbble className="text-xl"/>
          </Button>
        </Link>
        </div>
      
        <h5 className="text-xl font-medium  my-10">
          {filteredData.description}
        </h5>
      </div>
      {filteredData?.images?.map((item) => (
        <Image className=" w-full" src={item}   loading="lazy"  objectFit="cover" objectPosition="center" width={1000} height={1000} alt="ki" />
      ))}
      <Footer/>
    </div>
  );
}
