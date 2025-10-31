import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Benefits />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
