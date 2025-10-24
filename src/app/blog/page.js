"use client";

import React, { useState } from "react";
import Image from "next/image";
import gym_1 from "@/assets/man-moving-giant-tire-wheel-gym.jpg";
import gym_2 from "@/assets/young-fitness-man-studio.jpg";
import gym_3 from "@/assets/fitness-rings-7530142_1280.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="blog">
      {/* <div className="blog_background">
            <video autoPlay loop muted playsInline>
              <source src="/blog_1.mp4" type="video/mp4" />
            </video>
            </div> */}

      {/* <h3>Blog</h3> */}
      <div className="blogworkout_plan">
        <div className="blog_card">
          <Image className="img_card card_1" src={gym_1} alt=""></Image>
          <Image className="img_card card_2" src={gym_2} alt=""></Image>
          <Image className="img_card card_3" src={gym_3} alt=""></Image>
        </div>
        <div className="blog_content">
          <h2>Discover class</h2>
          <p>Start your fitness journey with us.</p>
          <Link href="/class">
            <h5>START</h5>
            <dd><FaArrowRight /></dd>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
