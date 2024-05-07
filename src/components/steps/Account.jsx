import React, { useContext, useState } from "react";
import { stepperContext } from "../../contexts/stepperContext";

const Account = () => {
  const { userData, setUserData } = useContext(stepperContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // To Clear error message when field changes
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid email format" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    } else if (name === "phone") {
      if (!validatePhoneNumber(value)) {
        setErrors({ ...errors, phone: "Invalid phone number format" });
      } else {
        setErrors({ ...errors, phone: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone } = userData;
    if (!validateEmail(email)) {
      setErrors({ ...errors, email: "Invalid email format" });
    }
    if (!validatePhoneNumber(phone)) {
      setErrors({ ...errors, phone: "Invalid phone number format" });
    }
  };

  return (
    <div className="flex flex-col ">
      <form onSubmit={handleSubmit}>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Username
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["username"] || ""}
              name="username"
              placeholder="Username"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={userData["email"] || ""}
              name="email"
              placeholder="Email"
              type="email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Address
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder="Address"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Phone Number
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={userData["phone"] || ""}
              name="phone"
              placeholder="Phone Number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              required
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">{errors.phone}</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
