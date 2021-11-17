import React, { useReducer, useState } from "react";
import { createContext } from "react";

export const Appointiescontext = createContext();

export const Appointiesdata = (props) => {
  const appointies = async () => {
    const response = await fetch("http://localhost:5000/get", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const addappointies = async (data) => {
    const response = await fetch("http://localhost:5000/add", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const updateappointies = async (data) => {
    const response = await fetch("http://localhost:5000/update", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const [se, setSe] = useState(0); //se stands for software engineer
  const [pe, setPe] = useState(0); //pe stands for program manager
  const [ds, setDs] = useState(0); //ds stands for data scientist

  console.log(se , pe , ds)

  return (
    <Appointiescontext.Provider value={{ appointies, addappointies , updateappointies , se , setSe , pe , setPe , ds , setDs }}>
      {props.children}
    </Appointiescontext.Provider>
  );
};
