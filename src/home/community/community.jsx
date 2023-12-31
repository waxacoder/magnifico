import React from "react";
import { Button } from "../../common/button/button";

export const Community = () => {
  return (
    <div className="py-[48px] px-[16px] xl:p-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-fuchsia-900 rounded-[30px]  flex flex-col gap-[24px]">
      <h2 className="text-center text-white text-[40px] font-bold  leading-[44px] xl:text-[56px] xl:font-extrabold xl:leading-[61.60px]">
        Join the community today
      </h2>
      <p className="text-center  text-white xl:text-lg  leading-[28.80px]">
        Egestas fringilla aliquam leo, habitasse arcu varius  lorem elit. Neque
        pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac{" "}
        <br />
        turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
      </p>
      <div className="flex justify-center">
        <Button>
          <span className="px-[34px]">Sign Up Free</span>
        </Button>
      </div>
    </div>
  );
};
