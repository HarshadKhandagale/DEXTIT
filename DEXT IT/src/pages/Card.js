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
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex ">
        <img
          
          src="bridgepic.jpeg"
          title="Title of image"
          alt="alt text here"
          
          className={` ${isScaled ? "flex transform scale-125" : ""}`}
        />
      </div>
      <div className=" col-span-1  ">
        {!showRegisterForm && !showLoginForm && (
          <div className="mt-64 mr-24">
            <h2 className="font-bold text-4xl ">Welcome!</h2>
            <h3 className="mt-2 text-3xl">
              Structured Health Monitoring
              <br />
              Solutions
            </h3>

            <button
              onClick={handleLoginClick}
              className="w-24 mt-8 bg-sky-400 text-white py-2 rounded-[9px]"
            >
              Login 
            </button>
            <button
              onClick={handleRegisterClick}
              className="w-24 mt-8 ml-8  bg-white-400 text-blue-400 py-2 rounded-[9px]"
            >
              Register
            </button>
           
          </div>
        )}

        {showRegisterForm && (
          <div className="flex  flex-col-1 justify-end mt-64 mr-24">
            <h2>Register</h2>
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