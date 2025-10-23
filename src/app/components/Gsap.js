"use client";

import React from "react";
import Scroll from "@/app/components/Scroll";

const Gsap = () => {
  const features = [
    {
      image: "/young-fitness-man-studio.jpg",
    },
    {
      title: "Discover class",
      description: "Start your fitness journey with us.",
      link: "Start",
    },
  ];
  return (
    <div id="gsap">
      <Scroll features={features} className="my-20" maxScrollHeight={2000} />
    </div>
  );
};

export default Gsap;
