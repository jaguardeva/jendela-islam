"use client";

import * as React from "react";
import SearchComponent from "./Search";
import Link from "next/link";

interface Datas {
  nomor: number;
  nama: string;
  namaLatin: string;
  arti: string;
}

export default function Card({ datas }: { datas: Datas[] }) {
  const [query, setQuery] = React.useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredData = datas.filter((data) => {
    return data.namaLatin.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col gap-3 lg:flex-row items-center justify-between mb-4 lg:mb-10">
        <h1 className="text-2xl font-bold text-center">
          Daftar Surat Al-Quran
        </h1>
        <SearchComponent handleChange={handleSearchChange} query={query} />
      </div>
      <div className="w-full grid lg:grid-cols-4 gap-4">
        {filteredData.map((data, index) => (
          <Link
            href={`/alquran/${data.nomor}`}
            key={index}
            className="flex gap-3"
          >
            <div className="w-full flex items-center border-2 hover:border-yellow-500  gap-6 p-4 rounded text-gray-600 transition duration-75">
              <div className="text-lg font-medium">{data.nomor}.</div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold">{data.namaLatin}</div>
                  <p className="text-sm">({data.arti})</p>
                </div>
                <p className="lafadz text-xl">{data.nama}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
