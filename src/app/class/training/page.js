"use client";

import React from "react";
import Image from "next/image";
import chest from "@/assets/chest.png";
import back from "@/assets/back.png";
import shoulder from "@/assets/shoulder.png";
import abs from "@/assets/abs.png";
import leg from "@/assets/leg.png";
import arms from "@/assets/arms.png";
import cardioo from "@/assets/cardio.png";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  const cardio = JSON.parse(localStorage.getItem("cardio"));
  const MotionLink = motion(Link);

  return (
    <section className="workout">
      <h2>Training</h2>

      <div>
      {cardio && (
          <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/cardio" className="training">
            <Image src={cardioo} alt="" />
            <h4>Cardio</h4>
          </MotionLink>
        )}
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/chest" className="training">
          <Image src={chest} alt="" />
          <h4>Chest Workout</h4>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/back" className="training">
          <Image src={back} alt="" />
          <h4>Back Workout</h4>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/leg" className="training">
          <Image src={leg} alt="" />
          <h4>Leg Workout</h4>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/shoulder" className="training">
          <Image src={shoulder} alt="" />
          <h4>Shoulder Workout</h4>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/abs" className="training">
          <Image src={abs} alt="" />
          <h4>Abs</h4>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training/arms" className="training">
          <Image src={arms} alt="" />
          <h4>Arms ( Biceps + Triceps )</h4>
        </MotionLink>

        
      </div>
    </section>
  );
};

export default page;
