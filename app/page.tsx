"use client";

import { createContext, useEffect, useState } from "react";
import SecondComponent from "./components/SecondComponent";
import FirstComponent from "./components/FirstComponent";
import TodoContextType, { TodoType } from "./Type";



export const TodoContext = createContext<TodoContextType>({
  todos: [],
  loading: false,
  error: "",
});

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getData = async () => {
    try {
      const res = await fetch("https://crud-api-node-mongo.vercel.app/api/todos");
      const data = await res.json();
      setTodos(data.data);
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, loading, error }}>
     
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <h1 className="text-4xl underline underline-offset-8 font-bold text-center text-indigo-700 mb-8">
          Todo App Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-8 items-start justify-center">
          <FirstComponent />
          <SecondComponent />
        </div>
        {error && (
          <div className="text-red-500 text-center mt-6 font-semibold">
            {error}
          </div>
        )}
      </div>
     
    </TodoContext.Provider>
  );
}
