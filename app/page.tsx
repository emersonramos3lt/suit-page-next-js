import CenterContent from "@/components/CenterContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShopSection from "@/components/ShopSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <CenterContent />
      <ShopSection />
      <Footer />
    </main>
  );
}
