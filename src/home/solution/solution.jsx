import { IoIosArrowRoundForward } from "react-icons/io";
import chart from "/images/chart.png";
export const Solution = () => {
  return (
    <div className=" bg-background-image bg-cover  px-[80px] py-[95px] rounded-[30px] ">
      <div className=" flex items-center justify-end">
        <div>
          <h2 className="text-white text-[56px] font-extrabold mb-[24px] leading-[61.60px]">
            Problems come and <br /> get solved with ease
          </h2>
          <p className="text-lg text-white mb-[24px]">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. <br />
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
            <br /> Nulla felis ac turpis at amet. Purus malesuada placerat arcu
            at <br /> enim elit in accumsan.
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
