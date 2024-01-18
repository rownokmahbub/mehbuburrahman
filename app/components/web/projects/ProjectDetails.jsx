'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
export default function ProjectDetails() {
  return (
    <div className='my-20 md:mt-28 container mx-auto px-5 md:px-0 flex flex-col md:justify-center md:items-center'>
        <h1 className='text-2xl lg:text-6xl font-bold'>Foodepi Food Delivery/Order</h1>
        <h1 className='text-2xl lg:text-6xl text-slate-500 font-bold mt-4'>Web App</h1>
        <p className='text-xs md:text-lg font-medium md:text-center text-gray-500 dark:text-gray-400 max-w-3xl mt-5 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptates quos, consequatur labore eaque accusamus ex officia corporis quo reiciendis autem quas dolores consectetur ipsam nam. Obcaecati ut vero quibusdam!</p>
        <Button className='mt-8' color='primary' size='md' variant='shadow'>
        <Link className='flex items-center gap-3' href='#'>
         Live Demo
         <GoProjectSymlink className='text-xl'/>
        </Link>
      </Button>
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center mt-20 md:mt-20">
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold mb-3'>About Project</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>2 Weeks / April, 2022 / Software Engineer Portfolio</h6>
            
          </div>
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold my-3'>Framworks</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>React Js, Next Js, Tailwind CSS, Next UI,Mongodb</h6>
           
          </div>
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold my-3'>My Role</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>Front End Development , Back End Development</h6>
         
          </div>
        </div>
        <Image className='mt-20 mx-auto rounded-xl shadow-2xl shadow-slate-400 dark:shadow-slate-700' src='/projectdetails.svg' width={1200} height={1200} alt='hero'/>
      
       
     
   
 
       
    </div>
  )
}
