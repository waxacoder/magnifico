import { IoIosArrowRoundForward } from "react-icons/io";
import chart from "/images/chart.png";
export const Solution = () => {
  return (
    <div className=" bg-background-image bg-purple-900 bg-opacity-75 bg-cover px-[24px] py-[48px] xl:px-[80px] xl:py-[95px] rounded-[30px] ">
      <div className=" flex items-center xl:justify-end">
        <div>
          <h2 className="text-white text-[40px] font-bold xl:text-[56px] xl:font-extrabold  mb-[24px] leading-[44px]  xl:leading-[61.60px]">
            Problems come and <br className="hidden xl:inline " /> get solved with ease
          </h2>
          <p className="text-base  xl:text-lg text-white mb-[24px]">
            Egestas fringilla aliquam leo, habitasse arcu <br className="xl:hidden" /> varius lorem elit. <br className="hidden xl:inline"/>
            Neque pellentesque donec et  tellus ac varius tortor, bibendum.
            <br className="hidden xl:inline" /> Nulla felis ac turpis at amet. Purus malesuada placerat arcu
            at <br className="hidden xl:inline"/> enim elit in accumsan.
          </p>
          <a
            href="#"
            className="text-white text-base font-medium tracking-wide flex gap-4">
            <p>Improve workflow</p>
            <IoIosArrowRoundForward className="text-[26px]" />
          </a>
        </div>
      </div>
    </div>
  );
};
