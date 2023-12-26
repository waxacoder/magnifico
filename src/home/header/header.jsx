import { HiOutlineMail } from "react-icons/hi";
import { Button } from "../../common/button/button";
import teamImg from "/images/Desktop.png";
import logos from "/images/Logos.png";
export const Header = () => {
  return (
    <div className=" py-[80px] flex items-center justify-between">
      <div className="w-[600px]">
        <h1 className="text-slate-900 text-7xl font-extrabold mb-[24px] ">
          Team projects, <br />
          done well
        </h1>
        <p className="text-grey text-lg mb">
          The only platform that gives your team all the tools needed to work{" "}
          <br />
          together on their awesome projects.
        </p>
        <div className="flex items-center gap-[16px] mt-[24px] mb-[24px]">
          <div className="flex items-center gap-[8px] py-[12px] px-[16px] rounded-lg border border-grey-1 w-[410px]">
            <HiOutlineMail className="text-[24px] text-grey-2" />{" "}
            <input
              type="email"
              placeholder="Enter work email"
              className="placeholder:text-black text-base "></input>
          </div>
          <Button>
            <p className="px-[16px]">Sign Up Free </p>{" "}
          </Button>
        </div>
        <div className="px-[15px] py-[16px] bg-grey-3 rounded-lg">
          {" "}
          <img src={logos} alt="logos" />
        </div>
      </div>
      <div>
        <img src={teamImg} alt="Image" className="w-[600px]" />
      </div>
    </div>
  );
};
