'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function ProjectHero() {
  return (
    <div className='my-20 md:mt-28 container mx-auto px-5 md:px-0'>
        <h1 className='text-2xl lg:text-6xl font-bold'>Foodepi Food Delivery/Order</h1>
        <h1 className='text-2xl lg:text-6xl text-slate-500 font-bold mt-4'>Mobile App</h1>
        <Button className='mt-8' color='primary' size='lg' variant='shadow'>
        <Link className='flex items-center gap-3' href='/uiuxcasestudy.pdf'>
         Case Study
        <FaCloudDownloadAlt className='text-xl'/>
        </Link>
      </Button>
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 md:mt-28">
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold mb-3'>About Project</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>2 Weeks / April, 2022 / Software Engineer Portfolio</h6>
            
          </div>
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold my-3'>Deliverables</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>Wireframe, Design System, Dark & Light mode UI design</h6>
           
          </div>
          <div className='max-w-xs w-full'>
            <h3 className='text-lg md:text-2xl  font-bold my-3'>My Role</h3>
            <h6 className='text-base md:text-lg font-semibold text-slate-500 dark:text-slate-300'>UX/UI, copywriting, iconography,typography</h6>
         
          </div>
        </div>
        <Image className='mt-20 mx-auto rounded-xl shadow-2xl shadow-slate-400 dark:shadow-slate-700' src='/projectdetails.svg' width={1200} height={1200} alt='hero'/>
        <h1 className='text-3xl lg:text-6xl font-bold mt-20'>See the Full Projects</h1>
        <h1 className='text-3xl lg:text-6xl text-blue-500 font-bold md:mt-4'>On Behance</h1>
        <h3 className='text-lg md:text-2xl font-medium my-3'>Here You wil find the whole case Studies on behance</h3>
     
        <div className='google-maps mt-10'>
        <iframe src="https://www.behance.net/embed/project/154860839?ilo0=1" height="806" width="1200" allowfullscreen  frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
 
       
    </div>
  )
}
