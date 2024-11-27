import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold text-2xl">
        Quotes
      </Link>
      <Link href={"/addQuote"} className="bg-white px-3 py-2">
        Add Quote
      </Link>
    </nav>
  );
};

export default Navbar;
