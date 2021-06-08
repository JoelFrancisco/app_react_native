import React from "react";
import { registerRootComponent } from "expo";
import { Routes } from "./Routes";

function App() {
  return (
    <Routes />
  );
}

export default registerRootComponent(App);
