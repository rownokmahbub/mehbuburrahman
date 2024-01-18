'use client'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function ResumeDetails() {
  let tabs = [
    {
      id: "experience",
      label: "Experience",
      content: <Experience/>
    },
    {
      id: "education",
      label: "Education",
      content: <Education/>
    },
   
    {
      id: "skills",
      label: "Relevant Skills",
      content: <Skills/>
    }
  ];

  return (
    <div className="flex flex-col my-10  mx-auto justify-center container px-5 md:px-0">
    <h2 className="text-4xl font-semibold capitalize my-10">Let's Talk about my experience</h2>
   <div className="flex min-w-lg  w-full r flex-col">
      <Tabs   classNames={{
          tabList: "bg-white dark:bg-slate-900/50 border px-4 py-2 border-slate-200 dark:border-slate-700",
          tab: "flex justify-center items-center md:h-12",
        }} size="lg" radius="lg" color="primary" aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab  key={item.id} title={item.label}>
            <Card>
              <CardBody className="bg-white dark:bg-slate-800 text-black dark:text-white w-full">
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
    </div>
 
  );
}
