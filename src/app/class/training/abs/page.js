"use client";

import React from "react";
import Image from "next/image";
import abs from "@/assets/bmuscle_training/abs.png";
import ab2 from "@/assets/bmuscle_training/ab2.png";
import ab3 from "@/assets/bmuscle_training/ab3.png";
import ab4 from "@/assets/bmuscle_training/ab4.png";
import plank from "@/assets/bmuscle_training/plank.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image: abs, h4: "Sit Up", p: "3 Sets x 12 Reps" },
    { id: 2, image: ab2, h4: "Cable Crunch", p: "3 Sets x 12 Reps" },
    { id: 3, image: ab3, h4: "Russian Twist", p: "3 Sets x 12 Reps" },
    { id: 4, image: ab4, h4: "Hanging Leg Raise", p: "3 Sets x 12 Reps" },
    { id: 5, image: plank, h4: "Plank", p: "3 Sets x 12 Reps" },
  ];

  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Abs Workout</h2>
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
