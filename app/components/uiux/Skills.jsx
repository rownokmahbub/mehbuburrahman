import Image from "next/image";
import {CircularProgress} from "@nextui-org/react";
export default function Skills() {
  return (
    <div className="p-2 w-full">
      <div className="flex flex-col md:flex-row md:justify-between gap-3 md:items-center border border-slate-200 dark:border-slate-700 px-5 py-5 rounded-lg">
        <div>
          <h2 className="text-lg font-medium">Graphic Arts Institute</h2>
          <p className="text-gray-500 dark:text-gray-400">
            MS • Information Design & Technology
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            2020 – 2023
          </p>
        </div>
       <div className="">
       <CircularProgress
          classNames={{
            svg: "w-12 h-12 md:w-14 md:h-14  drop-shadow-md",
            indicator: "stroke-green-300 dark:stroke-green-300",
            track: "stroke-black/20 dark:stroke-white/10",
            value: "text-[10px] md:text-xs font-semibold ",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
          label='Accuracy'
        />
       </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-3 md:items-center border border-slate-200 dark:border-slate-700 px-5 py-5 rounded-lg mt-5">
        <div>
          <h2 className="text-lg font-medium">Graphic Arts Institute</h2>
          <p className="text-gray-500 dark:text-gray-400">
            MS • Information Design & Technology
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            2020 – 2023
          </p>
        </div>
        <div className="">
       <CircularProgress
          classNames={{
            svg: "w-12 h-12 md:w-14 md:h-14  drop-shadow-md",
            indicator: "stroke-blue-300 dark:stroke-blue-300",
            track: "stroke-black/20 dark:stroke-white/10",
            value: "text-[10px] md:text-xs font-semibold ",
          }}
          value={80}
          strokeWidth={6}
          showValueLabel={true}
          label='Accuracy'
        />
       </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-3 md:items-center border border-slate-200 dark:border-slate-700 px-5 py-5 rounded-lg mt-5">
        <div>
          <h2 className="text-lg font-medium">Graphic Arts Institute</h2>
          <p className="text-gray-500 dark:text-gray-400">
            MS • Information Design & Technology
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            2020 – 2023
          </p>
        </div>
        <div className="">
       <CircularProgress
          classNames={{
            svg: "w-12 h-12 md:w-14 md:h-14  drop-shadow-md",
            indicator: "stroke-purple-300 dark:stroke-purple-300",
            track: "stroke-black/20 dark:stroke-white/10",
            value: "text-[10px] md:text-xs font-semibold ",
          }}
          value={90}
          strokeWidth={4}
          showValueLabel={true}
          label='Accuracy'
        />
       </div>
      </div>
    </div>
  );
}

