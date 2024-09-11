import Container from "../components/ui/Container";
import axios from "axios";
import Card from "./Card";

const getData = async () => {
  try {
    const res = await axios.get("https://equran.id/api/v2/surat");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function AlquranPage() {
  const { data } = await getData();
  return (
    <main className="py-6">
      <Container>
        <Card datas={data}></Card>
      </Container>
    </main>
  );
}
