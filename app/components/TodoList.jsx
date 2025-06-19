"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const getData = async () => {
  const res = await fetch("https://crud-api-node-mongo.vercel.app/api/todos");
  if (!res.ok) throw new Error("Failed to fetch");
  const result = await res.json();
  return result.data;
};

const postTodo = async (newTodo) => {
  const res = await fetch("https://crud-api-node-mongo.vercel.app/api/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const deleteTodo = async (id) => {
  const res = await fetch(
    `https://crud-api-node-mongo.vercel.app/api/todos/${id}`,
    { method: "DELETE" }
  );
  return res.json();
};

const updateTodo = async (id) => {
  const res = await fetch(
    `https://crud-api-node-mongo.vercel.app/api/todos/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        text: "Updated Todo",
        priority: "medium",
        deadline: "2025-11-11",
        complete: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};

export default function TodoList() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    text: "",
    priority: "low",
    deadline: "",
  });

  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setFormData({ text: "", priority: "low", deadline: "" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading)
    return (
      <div role="status " classNameName="flex items-center justify-center h-screen">
        <svg
          aria-hidden="true"
          classNameName="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span classNameName="sr-only">Loading...</span>
      </div>
    );

  if (error) return <div>Something went wrong</div>;

  return (
    <div classNameName="p-6 max-w-md mx-auto space-y-4">
      <h1 classNameName="text-xl font-bold">📝 Todo List</h1>

      {/* Input Form */}
      <div classNameName="space-y-2">
        <input
          type="text"
          placeholder="Enter todo text"
          classNameName="w-full px-3 py-2 border rounded"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
        <select
          classNameName="w-full px-3 py-2 border rounded"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          classNameName="w-full px-3 py-2 border rounded"
          value={formData.deadline}
          onChange={(e) =>
            setFormData({ ...formData, deadline: e.target.value })
          }
        />
        <button
          classNameName="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={() => mutation.mutate({ ...formData, complete: false })}
        >
          ➕ Add Todo
        </button>
      </div>

      {/* Todo List */}
      <ul classNameName="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            classNameName="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p classNameName="font-semibold">{todo.text}</p>
              <p classNameName="text-sm text-gray-500">
                Priority: {todo.priority} | Deadline: {todo.deadline}
              </p>
            </div>
            <div classNameName="space-x-2">
              <button
                onClick={() => updateMutation.mutate(todo._id)}
                classNameName="bg-yellow-500 text-white px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMutation.mutate(todo._id)}
                classNameName="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
