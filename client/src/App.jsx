import React, { useState } from "react";

import Header from "./components/header";
import Register from "./components/register";
import Signin from "./components/signin";
import Home from "./components/home";
import Store from "./components/store";

import { fetchSignup, fetchSignin } from "./fetch";

const App = () => {
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [showSigninModal, setSigninModal] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleSetRegisterModal = () => {
    setSigninModal(false);
    setRegisterModal(!showRegisterModal);
  };

  const handleSetSigninModal = () => {
    setRegisterModal(false);
    setSigninModal(!showSigninModal);
  };

  const handleRegister = async (user) => {
    const res = await fetchSignup(user);

    if (res.error) {
      return;
    }

    setRegisterModal(false);
  };

  const handleSignin = async (user) => {
    const res = await fetchSignin(user);

    if (res.error) {
      return;
    }

    setSigninModal(false);
    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);
  };

  return (
    <div className='App'>
      <Header
        handleSetRegisterModal={handleSetRegisterModal}
        handleSetSigninModal={handleSetSigninModal}
        handleSignOut={handleSignOut}
        signedIn={signedIn}
      />
      {!signedIn && <Home handleSetRegisterModal={handleSetRegisterModal} />}
      {signedIn && <Store />}
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
