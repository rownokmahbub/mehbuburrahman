import Image from "next/image";
import React from "react";

export default function Education() {
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
        <Image
          className="w-28"
          src="/google.png"
          width={1200}
          height={1200}
          alt="company images"
        />
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
        <Image
          className="w-28"
          src="/google.png"
          width={1200}
          height={1200}
          alt="company images"
        />
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
        <Image
          className="w-28"
          src="/google.png"
          width={1200}
          height={1200}
          alt="company images"
        />
      </div>
    </div>
  );
}
