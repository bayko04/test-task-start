import React from "react";

const ProfileInput = ({
  label = "Full Name",
  placeholder = "Your First Name",
  handleChange,
  name,
}) => {
  return (
    <div className="">
      <label
        className="block font-[400] text-[16px] leading-[24px] text-[#000000] mb-[12px] mt-[24px]"
        htmlFor=""
      >
        {label}
      </label>
      <input
        onChange={handleChange}
        className="bg-[#F9F9F9] rounded-[8px] h-[52px] w-[100%] py-[14px] px-[20px]"
        type="text"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default ProfileInput;
