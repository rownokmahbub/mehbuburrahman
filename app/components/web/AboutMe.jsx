import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="container mx-auto py-10 px-5 md:px-0">
    <h1 className="text-xl md:text-5xl text-secondary dark:text-white font-semibold text-center my-10">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
            <div className="md:col-span-2 rounded-2xl overflow-hidden flex flex-col gap-5 bg-white dark:bg-slate-800">
                   
                    <div className="px-5 py-9">
                        
                        <p className="text-slate-500 dark:text-slate-300 text-base md:text-lg">I'm Rownok Mahbub <br /> <br />
                        A creative developer with a passion for design and development.
From concept to launch, I am involved in every step of the process. <br /> <br />
User experience, visually striking design, engaging interactions
and impeccable typography are my top priorities.
                        </p>
                    </div>
            </div>
            <div className=" rounded-2xl overflow-hidden flex justify-center items-center p-6 bg-white dark:bg-slate-800">
                    <Image className=" object-cover w-56 h-56 rounded-full" src='/web/user.png' alt="user" width={1200} height={1200}/>
                  
            </div>
         
        </div>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-5 md:gap-6 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-6 items-center">
                 <div className="bg-white dark:bg-slate-800 h-full p-7 flex flex-col rounded-2xl justify-center items-center">
                    <h2 className="text-3xl font-semibold">150+</h2>
                    <p className="text-base text-center">Completed Projects</p>
                 </div>
                 <div className="bg-white dark:bg-slate-800 h-full p-7 flex flex-col rounded-2xl justify-center items-center">
                    <h2 className="text-3xl font-semibold">4+</h2>
                    <p className="text-base text-center">Freelance Years</p>
                 </div>
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden flex flex-col gap-5 bg-white dark:bg-slate-800">
                   
                    <div className="px-5 py-9">
                        
                        <p className="text-slate-500 dark:text-slate-300 text-base md:text-lg">
                        Helping Startups, B2B services, small businesses and creatives
with customized design solutions that include landing pages &
website creation. <br /> <br /> User experience, visually striking design, engaging interactions and impeccable typography are my
top priorities.
                        </p>
                    </div>
            </div>
          
         
        </div>
    </div>
  )
}
