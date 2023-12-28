import { HiOutlineMail } from "react-icons/hi";
import { Button } from "../../common/button/button";
import teamImg from "/images/Desktop.png";
import logos from "/images/Logos.png";
import logos2 from "/public/images/logos 2.png"
export const Header = () => {
  return (
    <div className="sm:py-[48px] xl:py-[80px] xl:flex items-center justify-between">
      <div className="sm:w-[100%] xl:w-[600px]">
        <h1 className=" sm:text-[40px] sm:font-bold sm:leading-[44px]  text-black  xl:text-7xl xl:font-extrabold mb-[24px] ">
          Team projects, <br />
          done well
        </h1>
        <p className="sm:hidden xl:block text-grey text-lg ">
          The only platform that gives your team all the tools needed to work{" "}
          <br />
          together on their awesome projects.
        </p>
        <p className="xl:hidden text-black">
          Amet nunc diam orci duis ut sit diam arcu, nec. <br /> Eleifend proin massa
          tincidunt viverra lectus <br /> pulvinar. Nunc ipsum est pellentesque turpis <br />
          ultricies.
        </p>
        <div className="flex items-center sm:gap-[8px] xl:gap-[16px] mt-[24px] mb-[24px]">
          <div className="flex items-center gap-[8px] py-[12px] px-[16px] rounded-lg border border-grey-1 sm:w-[177px] xl:w-[410px]">
            <HiOutlineMail className="sm:hidden xl:block text-[24px] text-grey-2" />{" "}
            <input
              type="email"
              placeholder="Enter work email"
              className="placeholder:text-black text-base sm:w-[145px] xl:w-[100%] "></input>
          </div>
          <Button>
            <p className="px-[16px]">Sign Up Free </p>{" "}
          </Button>
        </div>
        <div className= "sm:hidden xl:block spx-[15px] py-[16px] bg-grey-3 rounded-lg">
          {" "}
          <img src={logos} alt="logos" />
        </div>
        <div className= " xl:hidden p-2 bg-grey-3 rounded-lg mb-[32px]">
          {" "}
          <img src={logos2} alt="logos" />
        </div>
      </div>
      <div>
        <img src={teamImg} alt="Image" className="w-[600px]" />
      </div>
    </div>
  );
};
