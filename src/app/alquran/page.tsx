import React from "react";
import Container from "../components/ui/Container/page";
import axios from "axios";
import Link from "next/link";
import SearchComponent from "../components/Search/page";

// Define the structure of the response data
interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

const getAlquran = async () => {
  try {
    const response = await axios.get("https://equran.id/api/v2/surat", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Assuming the response contains 'data' property with Surah array
  } catch (error) {
    console.log(error);
  }
};

export default async function AlquranPage() {
  const { data } = await getAlquran();

  return (
    <main className="py-6">
      <Container>
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between mb-4 lg:mb-10">
          <h1 className="text-2xl font-bold text-center">
            Daftar Surat Al-Quran
          </h1>
          <SearchComponent />
        </div>
        <div className="w-full grid lg:grid-cols-4 gap-4">
          {data?.map((data: Surah, index: number) => (
            <Link
              href={`/alquran/${data.nomor}`}
              key={index}
              className="flex gap-3"
            >
              <div className="w-full flex items-center border-2 hover:border-yellow-500 gap-6 p-4 rounded text-gray-600 transition duration-75">
                <div className="text-lg font-medium">{data.nomor}.</div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold">
                      {data.namaLatin}
                    </div>
                    <p className="text-sm">({data.arti})</p>
                  </div>
                  <p className="lafadz text-xl">{data.nama}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
