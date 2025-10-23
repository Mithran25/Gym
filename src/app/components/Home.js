"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main>
      <div className="home_background">
        <video autoPlay loop muted playsInline>
          <source src="/10988080-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="home-content fs-2 text-white"
      >
        <h1>Make Your Strength Your Satisfaction</h1>
      </motion.section>
    </main>
  );
};

export default Home;
