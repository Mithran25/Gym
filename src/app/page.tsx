import Header from "@/app/components/Header";
import Blog from "@/app/blog/page";
import Card from "@/app/components/Card";
import Home from "@/app/components/Home";
import About from "@/app/components/About";

export default function Page() {
  return (
    <section>
      <Header />
      <Home />
      <Card />

      {/* <Gsap /> */}
      <Blog/>
      <About/>
    </section>
  );
}

// className={`plan_card ${isTopCard ? 'top-card' : ''}`}
