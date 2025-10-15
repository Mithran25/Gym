"use client";

import React, { useState } from "react";
import Image from "next/image";
import gym_1 from "@/assets/man-moving-giant-tire-wheel-gym.jpg";
import gym_2 from "@/assets/young-fitness-man-studio.jpg";
import gym_3 from "@/assets/fitness-rings-7530142_1280.jpg";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="blog">
      {/* <h3>Blog</h3> */}
      <div className="blogworkout_plan">
        <div className="blog_img">
          <div className="blog_card">
            <motion.ul
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.2 }}><Image className="img_card card_1" src={gym_1} alt=""></Image></motion.ul>
            <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.2 }} className="chest">Chest</motion.p>
            <motion.ul
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.2 }}><Image className="img_card card_2" src={gym_2} alt=""></Image></motion.ul>
            <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.2 }} className="back">Back</motion.p>
          </div>
        </div>
        <div className="blog_content">
          <h2>Discover class</h2>
          <p>
            A workout is more than just movement; it's a commitment to a
            stronger, healthier, and more capable you. At our gym, we understand
            that every fitness journey is unique. That's why we don't offer
            generic routines; we offer personalized, progressive programs
            designed to unlock your true athletic potential, regardless of your
            starting point.
          </p>
          <Link href="/class">Show</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
