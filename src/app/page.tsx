
import Header from "@/app/components/Header";
import Blog from "@/app/blog/page";
import Card from "@/app/components/Card";
import Home from "@/app/components/Home";
import WhyChoose from "@/app/components/WhyChoose"

export default function Page() {
  

  return (
    <section>
      <Header />
      <Home />
      <WhyChoose/>
      <Blog/>
    </section>
  );
}


// className={`plan_card ${isTopCard ? 'top-card' : ''}`}