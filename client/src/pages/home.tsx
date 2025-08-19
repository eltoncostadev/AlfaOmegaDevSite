import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Mission from "@/components/sections/mission";
import Technology from "@/components/sections/technology";
import Portfolio from "@/components/sections/portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Mission />
        <Technology />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
