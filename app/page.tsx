import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Guides from "@/components/Guides";
import Checklist from "@/components/Checklist";
import Hotline from "@/components/Hotline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tools />
        <Guides />
        <Checklist />
        <Hotline />
      </main>
      <Footer />
    </>
  );
}
