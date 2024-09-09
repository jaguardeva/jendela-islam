import React from "react";
import axios from "axios";
import Container from "@/app/components/ui/Container/page";

interface Ayat {
  nomor: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  nomorAyat: number;
}

const getSuratByNomor = async (nomor: string) => {
  try {
    const response = await axios.get(
      `https://equran.id/api/v2/surat/${nomor}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default async function page({ params }: { params: { nomor: string } }) {
  const { data } = await getSuratByNomor(params.nomor);
  console.log(data.ayat);
  return (
    <main className="py-6">
      <Container>
        <div className="flex flex-col gap-4">
          {data?.ayat.map((ayat: Ayat, index: number) => (
            <div
              key={index}
              className="p-4 lg:p-5 bg-gray-50 border-2 rounded-lg flex flex-col gap-3"
            >
              <p className="text-sm lg:text-lg font-medium">{ayat.nomorAyat}</p>

              <p className="text-2xl lg:text-3xl lafadz leading-[50px] lg:leading-[70px] text-right">
                {ayat.teksArab}
              </p>

              <p className="text-sm lg:text-base italic text-teal-500 font-medium">
                {ayat.teksLatin}
              </p>
              <p className="text-sm lg:text-base font-medium">
                {ayat.teksIndonesia}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
