import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    updateValue();
  }, []);

  useEffect(() => {
    console.log("Value is updated!");
  }, [value]);

  const updateValue = () => {
    setTimeout(() => {
      setValue(new Date().toLocaleTimeString());
      updateValue();
    }, 1000);
  };

  return <div>{value}</div>;
};

export default App;
