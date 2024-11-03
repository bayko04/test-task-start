import React from "react";
import arrowImg from "../../images/svg/arrow.svg";

const ProfileSelect = ({ label = "Your First Name", handleChange, name }) => {
  return (
    <div>
      <label
        className="block font-[400] text-[16px] leading-[24px] text-[#000000] mb-[12px] mt-[24px]"
        htmlFor=""
      >
        {label}
      </label>
      <div class="relative w-full">
        <select
          onChange={handleChange}
          name={name}
          class="bg-[#F9F9F9] rounded-[8px] text-[#888] h-[52px] w-[100%] py-[14px] px-[20px] block appearance-none w-full"
        >
          <option value="0">Your First Name</option>
          <option value="1">Your Second Name</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-[24px] flex items-center px-2 text-gray-700">
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSelect;
