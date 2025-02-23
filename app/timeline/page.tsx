import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Iceland } from "next/font/google"; // Import Iceland font

const iceland = Iceland({ subsets: ["latin"], weight: "400" }); // Initialize font

const data = [
  {
    title: "March 1st",
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 text-xs md:text-md lg:text-lg ${iceland.className} mb-8`}>
          Start of Registration for Hackathon
        </p>
        <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Registration Start Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                March 1st 2025
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Registration End Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                March 31st 2025
              </div>
            </CardContent>
            </Card>
        </div>
      </div>
    ),
  },
  {
    title:
        "April 4th",
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 md:text-md lg:text-lg ${iceland.className} mb-8`}>
          Morning Session- Lunch Break at 1 PM
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Participants Reporting & Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                8 AM to 9 AM
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Opening Ceremony</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                9.30 AM to 10.30 AM
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Hackathon Begins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                11 AM Onwards
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Experts Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                12 PM to 1 PM
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),    
  },
  {
    title:
        "April 4th",
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 md:text-md lg:text-lg ${iceland.className} mb-8`}>
          Evening Session
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Idea Presentation Round</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                2.30 PM Onwards
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Technical Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                5 PM to 6 PM
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Fun Activites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                6.30 PM Onwards
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Dinner Break</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                7.30 PM 
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title:
        "April 5th",
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 text-xs md:text-md lg:text-lg ${iceland.className} mb-4`}>
          Morning Session
        </p>
        <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Prototyping & Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                12.30 AM Onwards
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Breakfast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                8 Am to 9 AM 
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Final Presentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                11 AM Onwards
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Lunch Break</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                1 PM to 2 PM
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title:
        "April 5th",
    content: (
      <div>
        <p className={`text-neutral-800 dark:text-neutral-200 text-xs md:text-md lg:text-lg ${iceland.className} mb-4`}>
          Afternoon Session
        </p>
        <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[linear-gradient(to_bottom_right,rgba(99,33,130,0.2),rgba(234,98,62,0.2),rgba(147,77,118,0.2))] border border-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-center">Closing Ceremony</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 text-white text-lg md:text-md text-center px-4 py-2 rounded-lg">
                2.30 PM Onwards 
              </div>
            </CardContent>
          </Card>
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
