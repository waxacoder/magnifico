import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between xl:items-center py-[24px] xl:py-20 gap-4 xl:gap-2">
      <div className="flex  flex-col gap-4 xl:gap-2 xl:flex-row ">
        <h4 className="text-black text-lg font-medium  leading-tight">
          magnifico
        </h4>
        <p className="text-grey  leading-snug">@ 2023. All rights reserved.</p>
      </div>
      <ul className="flex gap-[26px] xl:gap-[24px] py-[12px]">
        <li className="text-grey leading-snug">Terms</li>
        <li className="text-grey leading-snug">Privacy</li>
        <li className="text-grey leading-snug">Support</li>
        <li className="text-grey leading-snug">About</li>
        <li className="text-grey leading-snug hidden xl:inline">Resources</li>
        <li className="text-grey leading-snug">Contact</li>
      </ul>
    </div>
  );
};
