import { IoIosSearch } from "react-icons/io";

export default function SearchComponent() {
  return (
    <div className="flex items-center relative text-gray-600 w-full">
      <input
        type="text"
        className="border-2 px-4 py-2 w-full lg:w-[30rem] rounded outline-none"
        placeholder="Search..."
      />
      <IoIosSearch
        className="absolute top-1/2 right-3 -translate-y-1/2"
        size={20}
      />
    </div>
  );
}
