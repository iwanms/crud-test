export default function AddQuote() {
  return (
    <>
      <h1>Add Quote</h1>
      <form className="flex flex-col gap-3 my-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Title"
        />
        <textarea
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
