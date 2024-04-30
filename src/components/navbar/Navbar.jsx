/* eslint-disable react/prop-types */

import { FaAngleDown } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center w-full h-[80px] px-4 bg-[var(--globalColor)] text-white">
      <IoReorderThreeOutline
        className="text-4xl mt-2  rounded-full cursor-pointer"
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-3 pr-4 text-gray-500">
        <img src="/dp.webp" alt="" className="rounded-full w-10" />
        <h1 className="text-xl font-semibold ">Royal</h1>
        <FaAngleDown className="mt-1" />
      </div>
    </div>
  );
};

export default Navbar;
