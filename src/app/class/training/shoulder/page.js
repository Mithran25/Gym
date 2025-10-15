"use client";

import React from "react";
import Image from "next/image";
import s1 from "@/assets/bmuscle_training/s1.png";
import s2 from "@/assets/bmuscle_training/s2.png";
import s3 from "@/assets/bmuscle_training/s3.png";
import s4 from "@/assets/bmuscle_training/s4.png";
import pullup from "@/assets/bmuscle_training/pullup.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image: s1, h4: "Shoulder Press", p: "3 Sets x 12 Reps" },
    {
      id: 2,
      image: s2,
      h4: "Barbell Overhead Bench Press",
      p: "3 Sets x 12 Reps",
    },
    { id: 3, image: s3, h4: "Lateral Raise Dumbell", p: "3 Sets x 12 Reps" },
    { id: 4, image: s4, h4: "Barbell Upright Row", p: "3 Sets x 12 Reps" },
    { id: 5, image: pullup, h4: "PullUp", p: "3 Sets x 12 Reps" },
  ];

  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Shoulder Workout</h2>
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
