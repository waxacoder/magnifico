import React from "react";
import {IoIosArrowRoundForward} from "react-icons/io";
export const Button = ({ children }) => {
  return <button className="bg-blue text-white text-base font-medium   flex items-center rounded-lg  px-[12px] py-[12px]">{children}<IoIosArrowRoundForward className="text-[26px]" /> </button>;
};
