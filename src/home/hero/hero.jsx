import img1 from "/images/Picture.png";
import img2 from "/images/Picture 2.png";
import img3 from "/images/Picture 3.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import chart from "/images/chart.png";
export const Hero = () => {
  return (
    <div>
      <div className="py-[80px] flex items-center justify-between">
        <div className="flex gap-4">
          <div className="pt-[80px]">
            <img className="w-[189px]" src={img1} alt="image 1" />
          </div>
          <div className="pb-[80px]">
            <img className="w-[189px]" src={img2} alt="image 2" />
          </div>
          <div className="py-[40px]">
            <img className="w-[189px]" src={img3} alt="image 3" />
          </div>
        </div>

        <div>
          <h2 className="text-black text-[56px] font-extrabold mb-[24px] leading-[61.60px]">
            Enjoy your time <br /> working
          </h2>
          <p className="text-lg text-grey mb-[24px]">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed.{" "}
            <br />
            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus
            quis <br />
            massa tellus imperdiet aenean nulla id.
          </p>
          <a
            href="#"
            className="text-blue-600 text-base font-medium tracking-wide flex gap-4">
            <p>See how it helped others</p>
            <IoIosArrowRoundForward className="text-[26px]" />
          </a>
        </div>
      </div>

      <div className="py-[80px] flex items-center justify-between">
        <div>
          <h2 className="text-black text-[56px] font-extrabold mb-[24px] leading-[61.60px]">
            Get all the tools your <br /> team needs
          </h2>
          <p className="text-lg text-grey mb-[24px]">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque <br /> donec et tellus ac varius tortor,
            bibendum. Nulla felis ac turpis at amet. Purus <br /> malesuada
            placerat arcu at enim elit in accumsan.
          </p>
          <a
            href="#"
            className="text-blue-600 text-base font-medium tracking-wide flex gap-4">
            <p>Check the tools</p>
            <IoIosArrowRoundForward className="text-[26px]" />
          </a>
        </div>
        <div>
          <img src={chart} alt="chart image" className="w-[412px]" />
        </div>
      </div>
    </div>
  );
};
