import React from "react";
import video from "/images/video.png";
import { IoIosArrowRoundForward } from "react-icons/io";
export const Workflow = () => {
  return (
    <div className="flex items-center py-[160px] justify-between">
      <div>
        <h2 className=" text-slate-900 text-[56px] font-extrabold  leading-[61px] mb-[24px]">
          Improve workflow
        </h2>
        <div className="flex border-[2px] border-grey-4 rounded-[8px] w-[606px] mb-[24px]">
          <div className="text-black text-base font-medium leading-[17px] p-4 w-[200px] flex justify-center bg-grey-3 rounded-l-[8px] border-r-[2px] border-grey-4">
            Research
          </div>
          <div className="text-black text-base font-medium leading-[17px] p-4 w-[200px] flex justify-center border-r-[2px] border-grey-4 ">
            Plan
          </div>
          <div className="text-black text-base font-medium leading-[17px] p-4 w-[200px] flex justify-center rounded-r-[8px]">
            Design
          </div>
        </div>
        <p className="mb-[24px]">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque{" "}
          <br />
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis <br />
          at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>

        <a href="#" className="text-blue flex items-center gap-4">
          <p>Check the tools</p>
          <IoIosArrowRoundForward className="text-[20px]"/>
        </a>
      </div>
      <div>
        <img src={video} alt="video" className="w-[600px]"/>
      </div>
    </div>
  );
};
