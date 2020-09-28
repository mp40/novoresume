import React, { useState } from "react";

import Header from "./components/header";
import Register from "./components/register";
import Signin from "./components/signin";

import "./App.css";

const App = () => {
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [showSigninModal, setSigninModal] = useState(false);

  const handleSetRegisterModal = () => {
    setRegisterModal(!showRegisterModal);
  };

  const handleSetSigninModal = () => {
    setSigninModal(!showSigninModal);
  };

  const handleRegister = () => {};

  const handleSignin = () => {};

  return (
    <div className='App'>
      <Header
        handleSetRegisterModal={handleSetRegisterModal}
        handleSetSigninModal={handleSetSigninModal}
      />
      {showRegisterModal && (
        <Register
          handleRegister={handleRegister}
          handleSetSigninModal={handleSetSigninModal}
        />
      )}
      {showSigninModal && (
        <Signin
          handleSignin={handleSignin}
          handleSetRegisterModal={handleSetRegisterModal}
        />
      )}
    </div>
  );
};

export default App;
