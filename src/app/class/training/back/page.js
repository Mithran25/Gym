"use client";

import React from "react";
import Image from "next/image";
import lat from "@/assets/bmuscle_training/lat.png";
import b2 from "@/assets/bmuscle_training/b2.png";
import row from "@/assets/bmuscle_training/row.png";
import deadlift from "@/assets/bmuscle_training/weight-lift.png";
import pullup from "@/assets/bmuscle_training/pullup.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image:lat, h4: "Lat PullDown - Cable", p: "3 Sets x 12 Reps" },
    { id: 2, image:b2 , h4: "Barbell Bent-Over Row", p: "3 Sets x 12 Reps" },
    { id: 3, image: row, h4: "Seated Cable Row", p: "3 Sets x 12 Reps" },
    { id: 4, image: deadlift, h4: "Deadlift", p: "3 Sets x 12 Reps" },
    { id: 5, image:pullup, h4: "Pull-Up", p: "3 Sets x 12 Reps" },
  ];

  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Back Workout</h2>
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
