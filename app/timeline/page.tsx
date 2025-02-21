import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";
import { Iceland } from "next/font/google"; // Import Iceland font

const iceland = Iceland({ subsets: ["latin"], weight: "400" }); // Initialize font

const data = [
  {
    title: (
      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
        March 1st
      </span>
    ),
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 text-xs md:text-md lg:text-lg ${iceland.className} mb-8`}>
          Start of Registration for Hackathon
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src="/image.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        April 4th
      </span>
    ),
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 md:text-md lg:text-lg ${iceland.className} mb-8`}>
          Day 1 of Hackathon at Chandigarh University
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src="/image.png"
              alt="presentation template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        April 5th
      </span>
    ),
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 text-xs md:text-md lg:text-lg ${iceland.className} mb-4`}>
          Day 2 of Hackathon at Chandigarh University
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src="/image.png"
              alt="event template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          ))}
        </div>
      </div>
    ),
  },
];

const HackathonTimeline = () => {
  return (
    <div className={iceland.className}>
      <Timeline data={data} />
    </div>
  );
};

export default HackathonTimeline;
