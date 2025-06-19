'use client';
import React, { useState } from "react";
import Popup from "./Popup";

export default function Test() {
  const location: string[] = [
    "Dhanmandi",
    "Mohammadpur",
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  return (
    <div className="mx-auto max-w-sm py-6 px-2">
      <h1 className=" text-2xl  font-semibold text-center  ">Show daynamic Data</h1>
      <button onClick={()=>setShowPopup(!showPopup)} className=" mx-auto my-4  text-center bg-green-600 text-white px-4 py-2 rounded-sm ">Show Popup</button>
      <Popup
        domains={location}
        selectedDomain={selectedDomain}
        setSelectedDomain={setSelectedDomain}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
}
