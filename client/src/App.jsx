import React, { useState } from "react";

import Header from "./components/header";
import Register from "./components/register";
import Signin from "./components/signin";
import Home from "./components/home";

import "./App.css";

const App = () => {
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [showSigninModal, setSigninModal] = useState(false);

  const handleSetRegisterModal = () => {
    setSigninModal(false);
    setRegisterModal(!showRegisterModal);
  };

  const handleSetSigninModal = () => {
    setRegisterModal(false);
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
      <Home handleSetRegisterModal={handleSetRegisterModal} />
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
