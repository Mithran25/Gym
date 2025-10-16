"use client";

import React, { useState } from "react";
import Image from "next/image";
import gym_1 from "@/assets/man-moving-giant-tire-wheel-gym.jpg";
import gym_2 from "@/assets/young-fitness-man-studio.jpg";
import gym_3 from "@/assets/fitness-rings-7530142_1280.jpg";
import Link from "next/link";
import Button from "@/app/components/Button.js"

const Blog = () => {
  return (
    <section className="blog">
      {/* <h3>Blog</h3> */}
      <div className="blogworkout_plan">
        <div className="blog_card">
            <Image className="img_card card_1" src={gym_1} alt=""></Image>
            <Image className="img_card card_2" src={gym_2} alt=""></Image>
            <Image className="img_card card_3" src={gym_3} alt=""></Image>
            {/* <Image className="img_card card_4" src={shoulder} alt=""></Image> */}

        </div>
        <div className="blog_content">
          <h2>Discover class</h2>
          <p>Start your fitness journey with us.</p>
          <Link href="/class"><h5>Start</h5><svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg></Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
