import React, { useContext } from "react";
import { TodoContext } from "../page";
import TodoContextType, { TodoType } from "../Type";
import Loader from "./Loader";

export default function SecondComponent() {
  const { todos, loading } = useContext(TodoContext) as TodoContextType;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Todos from Second Component
      </h1>

      {loading ? (
       <Loader/>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos?.map((todo: TodoType, index: number) => (
            <li
              key={index}
              className="bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-lg text-gray-800 font-semibold">{todo.text}</p>
              <span className="text-xs text-gray-500">Task #{index + 1}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
