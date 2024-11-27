"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !description) {
      alert("title & description cannot empty");
    }

    try {
      const res = await fetch(`http://localhost:3000/api/quote/${id}`, {
        method: "PUT",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to update Quotes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Edit Quote</h1>
      <form className="flex flex-col gap-3 my-3" onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Title"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          placeholder="Quote..."
        ></textarea>
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-full">
          Save Quote
        </button>
      </form>
    </>
  );
}
