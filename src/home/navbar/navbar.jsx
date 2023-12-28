import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../common/button/button";
import { BurgerMenu } from "../../common/burger/buregerMenu";

export const Navbar = () => {
  return (
    <nav className="px-[24px] py-[24px] text-black flex items-center justify-between border-b-[1px] border-grey-1">
      <h3 className="text-black text-[32px] font-bold leading-9">magnifico</h3>
      <ul className="sm:hidden xl:flex items-center gap-[8px]">
        <li className="flex items-center gap-[8px]">
          <p className="font-medium">Products</p>
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-[8px]">
          <p className="font-medium">Solutions</p>
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-[8px]">
          <p className="font-medium">Services</p>
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-[8px]">
          <p className="font-medium">Help Center</p>
          <IoIosArrowDown />
        </li>
        <li>
          <p className="font-medium">Pricing</p>
        </li>
      </ul>

      <div className="sm:hidden xl:flex items-center gap-[16px]">
        <a href="#" className="text-blue text-base font-medium  tracking-wide">
          Log In
        </a>
        <Button>
          <p className="px-[16px]">Sign Up Free </p>{" "}
        </Button>
      </div>
      <BurgerMenu />
    </nav>
  );
};
