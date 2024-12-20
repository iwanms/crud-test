"use client";

import { Router } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddQuote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !description) {
      alert("title & description cannot empty");
    }

    try {
      const res = await fetch("http://localhost:3000/api/quote", {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to save Quotes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add Quote</h1>
      <form className="flex flex-col gap-3 my-3" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Title"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={description}
          className="border border-slate-500 px-8 py-2"
          placeholder="Quote..."
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-full">
          Save Quote
        </button>
      </form>
    </>
  );
}
