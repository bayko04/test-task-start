import React, { useState } from "react";
import ProfileInput from "../../components/ProfileInput/ProfileInput";
import ProfileSelect from "../../components/ProfileSelect/ProfileSelect";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    select: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <div className="h-[856px] w-full bg-[white] rounded-[10px] relative">
      <div className="bg-[url('/src/images/bg.jfif')] bg-no-repeat bg-cover bg-center w-full h-[100px] rounded-tl-[10px] rounded-tr-[10px] "></div>

      <div className="content p-[32px] max-sm:p-[10px]">
        <div className="flex max-sm:block justify-between text-black items-center">
          <div className="flex gap-[24px] items-center ]">
            <div className="w-[100px] h-[100px] bg-black rounded-[50%]">
              <img src="" alt="" />
            </div>

            <div className="">
              <h3 className="font-[500] text-[20px] leading-[30px] text-[#000000]">
                Alexa Rawles
              </h3>
              <p className="font-[400] text-[16px] leading-[30px] text-[silver]">
                alexarawles@gmail.com
              </p>
            </div>
          </div>

          <div className="text-end max-sm:mt-[20px]">
            <button className="text-white bg-[#4182F9] rounded-[8px] py-[10px] pr-[21px] pl-[32px] max-sm:w-full">
              Save
            </button>
          </div>
        </div>

        <form className="mt-[32px]" action="">
          <div className="flex gap-[32px] max-sm:flex-col">
            {/* left inputs */}
            <div className="flex-1">
              <ProfileInput
                handleChange={handleChange}
                label="Full Name"
                placeholder="Your First Name"
                name="fullName"
              />
              <ProfileSelect label="Gender" />
              <ProfileSelect
                handleChange={handleChange}
                label="Language"
                name="select"
              />
            </div>

            {/* right inputs */}
            <div className="flex-1">
              <ProfileInput
                handleChange={handleChange}
                label="Email"
                placeholder="Your Email"
                name="email"
              />
              <ProfileSelect label="Country" />
              <ProfileSelect label="Time Zone" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
