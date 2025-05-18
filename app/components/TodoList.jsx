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
      method: "PUT",
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">📝 Todo List</h1>

      {/* Input Form */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter todo text"
          className="w-full px-3 py-2 border rounded"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
        <select
          className="w-full px-3 py-2 border rounded"
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
          className="w-full px-3 py-2 border rounded"
          value={formData.deadline}
          onChange={(e) =>
            setFormData({ ...formData, deadline: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={() => mutation.mutate({ ...formData, complete: false })}
        >
          ➕ Add Todo
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{todo.text}</p>
              <p className="text-sm text-gray-500">
                Priority: {todo.priority} | Deadline: {todo.deadline}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => updateMutation.mutate(todo._id)}
                className="bg-yellow-500 text-white px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMutation.mutate(todo._id)}
                className="bg-red-500 text-white px-2 rounded"
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
