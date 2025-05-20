"use client";
import { useEffect, useState } from "react";
import useUserStore from "../Store/store";

export default function DisplayPage() {
  const { users } = useUserStore();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setData(data);
    console.log("users" + data);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">User List</h1>

      <ul className="divide-y divide-gray-200">
        {Data?.map((user) => (
          <li key={Math.random()} className="py-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{user.firstName}</h2>
              <p className="text-gray-600 ml-4">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}