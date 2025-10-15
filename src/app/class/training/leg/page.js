"use client";

import React from "react";
import Image from "next/image";
import leg1 from "@/assets/bmuscle_training/leg1.png";
import leg2 from "@/assets/bmuscle_training/leg2.png";
import legpress from "@/assets/bmuscle_training/legpress.png";
import deadlift from "@/assets/bmuscle_training/weight-lift.png";
import leg3 from "@/assets/bmuscle_training/leg3.png";
import { motion } from "framer-motion";

const page = () => {
  const training = [
    { id: 1, image: leg1, h4: "Squat Barbell", p: "3 Sets x 12 Reps" },
    { id: 2, image: leg2, h4: "Leg Curl", p: "3 Sets x 12 Reps" },
    { id: 3, image: legpress, h4: "Leg Press", p: "3 Sets x 12 Reps" },
    { id: 4, image: deadlift, h4: "Romanian Deadlift", p: "3 Sets x 12 Reps" },
    { id: 5, image: leg3, h4: "Standing Calf Raises", p: "3 Sets x 12 Reps" },
  ];

  return (
    <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} className="workout_class">
      <h2>Leg Workout</h2>
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
