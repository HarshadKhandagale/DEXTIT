import React, { useState } from "react";


import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Card = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
    setIsScaled(!isScaled);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setIsScaled(!isScaled);
  };

  const handleBackClick = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
    setIsScaled(!isScaled);
  };

 

  return (
    <div className="grid grid-cols-3 h-full">
      <div className="flex-1  h-full col-span-2  ">
      
        <img
          
          src="bridgepic.jpg"
          title="Title of image"
          alt="alt text here"
          
          className={` ${isScaled ? "flex transform scale-125" : ""}`}
        />
      </div>
      <div className=" flex-1 w-28 col-span-1 ">
        {!showRegisterForm && !showLoginForm && (
          <div className="mt-64 mr-30 fixed">
            <h2 className="font-bold text-4xl text-center">Welcome!</h2>
            <h3 className="mt-2 text-3xl text-center">
              Structured Health Monitoring
              <br />
              Solutions
            </h3>

            <button
              onClick={handleLoginClick}
              className="w-24 mt-10 ml-12 bg-sky-400 text-white py-2 rounded-[9px]"
            >
              LOGIN
            </button>
            <button
              onClick={handleRegisterClick}
              className="w-24 mt-10 ml-20  bg-white text-blue-400 py-2 rounded-[9px]"
            >
              REGISTER
            </button>
           
          </div>
        )}

        {showRegisterForm && (
          <div className="form-container">
            {/* <h2>Register</h2> */}
            <RegisterForm onBackClick={handleBackClick} />
          </div>
        )}

        {showLoginForm && (
          <div className="form-container">
            {/* <h2>Login</h2> */}
            <LoginForm onBackClick={handleBackClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;