"use client";

import React , { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '@/store/isOpen';
import Link from 'next/link';
import Image from "next/image";
import lean from "@/assets/lean.png";
import fat from "@/assets/fat.png";
import muscle from "@/assets/muscle.png";


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
  

  return (
    <section className="class">
        <h2>Hi,</h2>
      <div className="class_want">
        <h2>Are You Trying To ?</h2>
        <div >
          <Link href="/class/training" onClick={handleClass}>
            <Image src={muscle} alt="" />
            <h3>Build Muscle</h3>
          </Link>
          <Link href="/class/training" onClick={handleCardio}>
            <Image src={fat} alt="" />
            <h3>Get Lean</h3>
          </Link>
          <Link href="/class/training" onClick={handleClass}>
            <Image src={lean} alt="" />
            <h3>Gain Weight</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Class;
