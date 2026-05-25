import { Preloader } from "@/components/Preloader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Origin } from "@/components/sections/Origin";
import { Brewing } from "@/components/sections/Brewing";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Origin />
        <Brewing />
        <Gallery />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
