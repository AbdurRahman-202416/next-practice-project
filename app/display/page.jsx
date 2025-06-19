"use client";
import { use, useEffect, useState } from "react";
import useUserStore from "../Store/store";
import Popup from "../components/Popup";

export default function DisplayPage() {
  const { users } = useUserStore();
  const [Data, setData] = useState([]);

  useEffect(() => {
    console.log(users);
    const data = JSON.parse(localStorage.getItem("userData"));
    setData(data);
    data?.map((user) => {
      console.log(user);
    });
  }, []);
  const demoData = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
  ];
  const [selectedDomain, setSelectedDomain] = useState("Dhaka");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-sm mx-auto inset-0 p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <ul className="divide-y divide-gray-200">
        {Data?.map((user) => (
          <li key={Math.random()} className="py-4">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold">{`Name : ${user.firstName}`}</h2>
              <p className="text-gray-600 ">{`Email : ${user.email}`}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className=" flex justify-between ">
        <input
          className="border px-1 py-1 border-gray-800 mx-2 rounded-sm"
          value={selectedDomain}
          onChange={() => {}}
          disabled={true}
          readOnly
          placeholder="Selected your Division"
          type="text"
          name="Division"
          id="Division"
        />
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Seletct Division
        </button>

        <Popup
          domains={demoData}
          selectedDomain={selectedDomain}
          setSelectedDomain={setSelectedDomain}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      </div>
  
    </div>
  );
}
