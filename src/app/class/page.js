"use client";

import React , { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '@/store/isOpen';
import Link from 'next/link';
import Image from "next/image";
import lean from "@/assets/lean.jpg";
import fat from "@/assets/fat.jpg";
import muscle from "@/assets/muscle.png";
import { motion } from "framer-motion";

const Class = () => {

  const[cardio,setCradio] = useState(false);
  
  useEffect(() => {
  localStorage.setItem("cardio", JSON.stringify(cardio));
}, [cardio]); 

  const handleCardio = ()=>{
   setCradio(true);
  }
  const handleClass = ()=>{
    setCradio(false);
  }
  const MotionLink = motion(Link);

  return (
    <section className="class">
        <h2>Hi,</h2>
      <div className="class_want">
        <h2>Are You Trying To ?</h2>
        <div >
          <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training" onClick={handleClass}>
            <Image src={muscle} alt="" />
            <h3>Build Muscle</h3>
          </MotionLink>
          <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training" onClick={handleCardio}>
            <Image src={fat} alt="" />
            <h3>Get Lean</h3>
          </MotionLink>
          <MotionLink
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }} href="/class/training" onClick={handleClass}>
            <Image src={lean} alt="" />
            <h3>Gain Weight</h3>
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default Class;
