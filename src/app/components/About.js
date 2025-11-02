"use client";

import React, { useState } from "react";
import Image from "next/image";
import chest from "@/assets/chest.png";
import back from "@/assets/back.png";
import shoulder from "@/assets/shoulder.png";
import abs from "@/assets/abs.png";
import leg from "@/assets/leg.png";
import arms from "@/assets/arms.png";
import cardioo from "@/assets/cardio.png";
import golden from "@/assets/blob-haikei.png";
import arnold from "@/assets/arnold.png";
import we from "@/assets/Weroom.png";

const About = () => {

  return (
    <section className="about">   

      <div>
      <div className="container">
      <p></p>
      {/* <Image src={golden} alt=""/> */}
      <ul><Image src={arnold} alt=""/></ul>
      <ul><Image src={we} alt=""/></ul>

</div>
      <div className="about-content">
        <p>At SJArnold, we believe in more than just workouts - we believe in transformation. Our mission is to empower you to push your limits, achieve your goals, and become the strongest version of yourself.</p>
        <p>Join with us, and make your strength your satisfaction.</p>
      </div>
      </div>
    </section>
  );
};

export default About;
{/* <h2>About Us</h2> */}
      {/* <div>
        {image.map((item) => (
          <div
            key={item.id}
            className="about-content"
            onMouseEnter={() => setIshover(item.id)}
            onMouseLeave={() => setIshover(null)}
            onClick={() => setIshover(prev => (prev !== item.id ? null : item.id))}
          >
            {ishover === item.id && (
              <Image
                className="hover"
                src={item.image}
                alt=""
                width={200}
                height={150}
              />
            )}
          </div>
        ))}
      </div> */}