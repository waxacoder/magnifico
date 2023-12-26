import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center py-20">
      <div className="flex gap-2 ">
        <h4 className="text-black text-lg font-medium  leading-tight">
          magnifico
        </h4>
        <p className="text-grey  leading-snug">@ 2023. All rights reserved.</p>
      </div>
      <ul className="flex gap-[24px] py-[12px]">
        <li className="text-grey leading-snug">Terms</li>
        <li className="text-grey leading-snug">Privacy</li>
        <li className="text-grey leading-snug">Support</li>
        <li className="text-grey leading-snug">About</li>
        <li className="text-grey leading-snug">Resources</li>
        <li className="text-grey leading-snug">Contact</li>
      </ul>
    </div>
  );
};
