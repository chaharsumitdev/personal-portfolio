import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Footer from "@/components/footer/footer";
import Services from "@/components/services/services";
import AnimatedArrow from "@/components/animated-arrow/animated-arrow";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-[1564px] flex-col items-center justify-between bg-white sm:items-start">
        <About />
        <Experience />
        <Services />
        <Skills />
        <Footer />
        {/* <AnimatedArrow /> */}
      </main>
    </div>
  );
}
