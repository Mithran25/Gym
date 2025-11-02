import Header from "@/app/components/Header";
import Blog from "@/app/blog/page";
import Card from "@/app/components/Card";
import Home from "@/app/components/Home";
import About from "@/app/components/About";
import WhyChoose from "@/app/components/WhyChoose";
import Membership from "@/app/components/Membership"
import Footer from "@/app/components/Footer"


export default function Page() {
  return (
    <section>
      <Header />
      <Home />
      {/* <Card /> */}
      <WhyChoose/>
      <Membership />
      {/* <Gsap /> */}
      <Blog/>
      <section id="about">
        <About/>
      </section>
      <Footer/>
    </section>
  );
}

// className={`plan_card ${isTopCard ? 'top-card' : ''}`}
