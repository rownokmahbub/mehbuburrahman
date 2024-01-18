"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium dark:text-white",

    indicator: "text-medium dark:text-white",
    content: "text-small px-2",
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="container mx-auto px-5 my-20">
      <h3 className="text-center text-2xl  lg:text-4xl font-semibold mb-10">
        Frequently Asked Questions
      </h3>
      <Accordion
        itemClasses={itemClasses}
        className="bg-slate-50 dark:bg-slate-700/80 my-2"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.15,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.25,
                },
              },
            },
          },
        }}
        variant="shadow"
      >
        <AccordionItem
          className=""
          key="1"
          aria-label="Accordion 1"
          title="Who We are ?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          className=""
          key="2"
          aria-label="Accordion 2"
          title="What is our Goal?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          className=""
          key="3"
          aria-label="Accordion 3"
          title="What you will get?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          className=""
          key="4"
          aria-label="Accordion 4"
          title="What is our Goal?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          className=""
          key="5"
          aria-label="Accordion 5"
          title="What you will get?"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
