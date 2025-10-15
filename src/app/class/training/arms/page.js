"use client";


import React from "react";
import Image from "next/image";
import arm from "@/assets/bmuscle_training/arm.png";
import bi1 from "@/assets/bmuscle_training/bi1.png";
import bi2 from "@/assets/bmuscle_training/bi3.png";
import tri1 from "@/assets/bmuscle_training/tri1.png";
import tri2 from "@/assets/bmuscle_training/tri2.png";
import gym from "@/assets/bmuscle_training/gym.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image: arm, h4: "Dumbell Cur", p: "3 Sets x 12 Reps" },
    { id: 2, image: bi1, h4: "Barbell Curl", p: "3 Sets x 12 Reps" },
    { id: 3, image: bi2, h4: "Machine Bicep Curl", p: "3 Sets x 12 Reps" },
    { id: 4, image: gym, h4: "Cable Curl", p: "3 Sets x 12 Reps" },
    { id: 5, image: tri1, h4: "Tricep Rope Pushdown", p: "3 Sets x 12 Reps" },
    {
      id: 6,
      image: tri2,
      h4: "Overhead Tricep Extension - Bench",
      p: "3 Sets x 12 Reps",
    },
  ];

  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Arms Workout</h2>
      <div>
        {training.map((training) => (
          <div key={training.id} className="training_class">
            <Image src={training.image} alt="" />
            <ul>
              <h4>{training.h4}</h4>
              <p>{training.p}</p>
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default page;
