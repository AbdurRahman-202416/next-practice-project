"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const getData = async () => {
  const res = await fetch("https://crud-api-node-mongo.vercel.app/api/todos");
  if (!res.ok) throw new Error("Failed to fetch");
  const result = await res.json();
  return result.data;
};

const postTodo = async () => {
  const res = await fetch("https://crud-api-node-mongo.vercel.app/api/todos", {
    method: "POST",
    body: JSON.stringify({
      text: "New Todo",
      priority: "low",
      deadline: "2025-12-31",
      complete: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const deleteTodo = async (id: string) => {
  const res = await fetch(
    `https://crud-api-node-mongo.vercel.app/api/todos/${id}`,
    { method: "DELETE" }
  );
  return res.json();
};

const updateTodo = async (id: string) => {
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
      <h1 className="text-xl font-bold">Todo List</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => mutation.mutate()}
      >
        Add New Todo
      </button>
      <ul className="space-y-2">
        {todos.map((todo: any) => (
          <li
            key={todo._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{todo.text}</span>
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
