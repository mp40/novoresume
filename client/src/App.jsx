import React, { useState } from "react";

import Header from "./components/header";

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
