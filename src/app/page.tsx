
import Header from "@/app/components/Header";
import Blog from "@/app/blog/page";
import Card from "@/app/components/Card";
import Home from "@/app/components/Home";
import WhyChoose from "@/app/components/WhyChoose"
import Anima from "@/app/components/Anima"
// import Gsap from "@/app/components/Gsap"

export default function Page() {

  return (
    <section>
      <Header />
      <Home />

      {/* <Anima/> */}
      <Card/>
      {/* <Blog/> */}
      {/* <Gsap/> */}
{/*       
      <Back/> */}
    </section>
  );
}


// className={`plan_card ${isTopCard ? 'top-card' : ''}`}