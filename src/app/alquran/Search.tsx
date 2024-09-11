"use client";

import { IoIosSearch } from "react-icons/io";
import * as React from "react";

interface propsType {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchComponent({ query, handleChange }: propsType) {
  return (
    <div className="flex items-center gap-3 w-full lg:w-fit">
      <div className=" w-full flex items-center relative text-gray-600">
        <input
          type="text"
          className="border-2 px-4 py-2 w-full lg:w-[30rem] rounded outline-none"
          placeholder="Search..."
          onChange={handleChange}
          value={query}
        />
        <IoIosSearch
          className="absolute top-1/2 right-3 -translate-y-1/2"
          size={20}
        />
      </div>
    </div>
  );
}
