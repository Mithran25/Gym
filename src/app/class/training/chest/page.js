"use client";

import React from "react";
import Image from "next/image";
import upper from "@/assets/bmuscle_training/upper.png";
import c1 from "@/assets/bmuscle_training/c1.png";
import c3 from "@/assets/bmuscle_training/c3.png";
import c2 from "@/assets/bmuscle_training/c2.png";
import pushup from "@/assets/bmuscle_training/pushup.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image: upper, h4: "Incline Dumbell Press", p: "3 Sets x 12 Reps" },
    { id: 2, image: c1, h4: "Barbell Bench Press", p: "3 Sets x 12 Reps" },
    { id: 3, image: c3, h4: "Pec Dec", p: "3 Sets x 12 Reps" },
    { id: 4, image: c2, h4: "Cable Standing Chest Fly", p: "3 Sets x 12 Reps" },
    { id: 5, image: pushup, h4: "Push-Up & Dip", p: "3 Sets x 12 Reps" },
  ];
  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Chest Workout</h2>
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
