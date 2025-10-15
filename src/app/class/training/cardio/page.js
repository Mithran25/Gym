"use client";

import React from "react";
import Image from "next/image";
import cycling from "@/assets/bmuscle_training/bicycle.png";
import treadmill from "@/assets/bmuscle_training/treadmill.png";
import jumping from "@/assets/bmuscle_training/jumping.png";
import yoga from "@/assets/bmuscle_training/yoga.png";
import climber from "@/assets/bmuscle_training/climber.png";
import { motion } from "framer-motion";

const page = () => {

  const training = [
    { id: 1, image: cycling, h4: "Cycling", p: "15 - 30 mins" },
    { id: 2, image: treadmill, h4: "Treadmill", p: "15 - 20 mins" },
    { id: 3, image: jumping, h4: "Jump Rope / Fast Walking", p: "15 - 20 mins" },
    { id: 4, image: yoga, h4: "Yoga / Stretching", p: "15 - 30 mins" },
    { id: 5, image: climber, h4: "Mountain Climbers", p: "3 Sets x 12 Reps" },
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
