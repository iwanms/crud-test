"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const remove = async () => {
    const confirmed = confirm("are you sure ?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/quote?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button className="text-red-400" onClick={remove}>
      <HiOutlineTrash />
    </button>
  );
};

export default RemoveBtn;
