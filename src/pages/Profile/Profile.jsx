import React, { useState } from "react";
import * as yup from "yup";
import ProfileInput from "../../components/ProfileInput/ProfileInput";
import ProfileSelect from "../../components/ProfileSelect/ProfileSelect";
import profileImg from "../../images/profile.png";
import { setEmail, setFullName } from "../../store/reducers/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  fullName: yup.string().required("Это поле обязательное"),
  email: yup
    .string()
    .email("Пожалуйста, введите корректный адрес электронной почты")
    .required("Это поле обязательное"),
  select: yup.string().required("Это поле обязательное"),
});

const Profile = () => {
  const { fullName, email } = useSelector((state) => state.profile);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    select: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(setFullName(formData.fullName));
      dispatch(setEmail(formData.email));
      setErrors({});
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="h-[856px] max-sm:h-[auto] max-sm:pb-[50px] w-full bg-[white] rounded-[10px] relative">
      <div className="bg-[url('/src/images/bg.jfif')] bg-no-repeat bg-cover bg-center w-full h-[100px] rounded-tl-[10px] rounded-tr-[10px] "></div>

      <div className="content p-[32px] max-sm:p-[10px]">
        <div className="flex max-sm:block justify-between text-black items-center">
          <div className="flex gap-[24px] items-center ]">
            <div className="w-[100px] h-[100px] max-sm:w-[70px] max-sm:h-[70px] bg-black rounded-[50%]">
              <img
                className="object-cover w-full h-full rounded-full"
                src={profileImg}
                alt=""
              />
            </div>

            <div className="">
              <h3 className="font-[500] text-[20px] leading-[30px] text-[#000000]">
                {fullName || "Alexa Rawles"}
              </h3>
              <p className="font-[400] text-[16px] leading-[30px] text-[silver]">
                {email || "alexarawles@gmail.com"}
              </p>
            </div>
          </div>

          <div className="text-end max-sm:mt-[20px]">
            <button
              onClick={handleSave}
              className="text-white bg-[#4182F9] rounded-[8px] py-[10px] pr-[21px] pl-[32px] max-sm:w-full"
            >
              Save
            </button>
          </div>
        </div>

        <form className="mt-[32px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-[32px] max-sm:flex-col">
            {/* left inputs */}
            <div className="flex-1">
              <ProfileInput
                handleChange={handleChange}
                label="Full Name"
                placeholder="Your First Name"
                name="fullName"
                value={formData.fullName}
              />
              {errors.fullName && (
                <p className="text-red-500 mt-[5px]">{errors.fullName}</p>
              )}

              <ProfileSelect label="Gender" />
              <ProfileSelect
                handleChange={handleChange}
                label="Language"
                name="select"
                value={formData.select}
              />
              {errors.select && (
                <p className="text-red-500 mt-[5px]">{errors.select}</p>
              )}
            </div>

            {/* right inputs */}
            <div className="flex-1">
              <ProfileInput
                handleChange={handleChange}
                label="Email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 mt-[5px]">{errors.email}</p>
              )}

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
