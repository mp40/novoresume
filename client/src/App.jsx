import React, { useState } from "react";

import Header from "./components/header";
import Register from "./components/register";
import Signin from "./components/signin";

import "./App.css";

const App = () => {
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [showSigninModal, setSigninModal] = useState(false);

  const handleSetRegisterModal = () => {};

  const handleSetSigninModal = () => {};

  const handleRegister = () => {};

  return (
    <div className='App'>
      <Header
        handleSetRegisterModal={handleSetRegisterModal}
        handleSetSigninModal={handleSetSigninModal}
      />
    </div>
  );
};

export default App;
