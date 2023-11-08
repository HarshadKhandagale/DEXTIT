import React, { useState } from "react";


const RegisterForm = ({ onBackClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration form submitted:", formData);
  };

  const handleRegister = () => {
    
    console.log("Register logic");
    
    onBackClick();
  };

  return (
    <div className="mt-24 mr-24 fixed">
      <div className="bg-blue-200 rounded-[45px] p-4 shadow-md w-72 h-90 ">
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-12">
          <label>Username:</label>

          <input
          className="w-60 px-4 py-2 rounded-[12px] bg-white text-blue-500 focus:outline-none"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className=" mt-8">
          <label>Email:</label>
          <input
          className="w-60 px-4 py-2 rounded-[12px] bg-white text-blue-500 focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className=" mt-8">
          <label>Password:</label>
          <input
          className="w-60 px-4 py-2 rounded-[12px] bg-white text-blue-500 focus:outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit"
        className="w-24 mt-8 ml-20 bg-sky-400 text-white py-2 rounded-[9px]">
          Register
          </button>

        <button onClick={onBackClick} className="mt-4 ml-24 text-black">
          Back
          </button>
      </form>
      </div>
      
    </div>
  );
};

export default RegisterForm;