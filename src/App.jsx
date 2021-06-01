import React from "react";
import { registerRootComponent } from "expo";
import { Routes } from "./Routes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Routes />
      <Navbar />
    </>
  );
}

export default registerRootComponent(App);
