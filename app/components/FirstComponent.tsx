import React, { useContext } from "react";
import { TodoContext } from "../page";

export default function FirstComponent() {
  const { todos, loading } = useContext(TodoContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Todos from First Component
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-40" role="status">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591..."
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393..."
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos?.map((todo, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {todo.text}
              </h2>
              <p className="text-sm text-gray-600">ID: {index + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
