import Container from "../ui/Container/page";

export default function HeroSection() {
  return (
    <Container>
      <div className="border w-full text-center">
        <h1 className="text-4xl font-medium mb-3">
          Membuka Jalan Menuju Pemahaman Islami
        </h1>
        <p className="w-full mx-auto max-w-2xl mb-3">
          {`Temukan berbagai artikel Islami, bacaan Al-Qur\'an, Tahlil, dan Yasin
          yang memperkaya iman dan pengetahuan. Jelajahi dan perkuat
          spiritualitas Anda setiap hari`}
        </p>
        <h3 className="text-lg font-medium">
          Mari Memperdalam Ilmu Agama Bersama!
        </h3>
      </div>
    </Container>
  );
}
