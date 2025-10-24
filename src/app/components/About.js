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

const About = () => {

      const [ishover, setIshover] = useState(null);

  const image = [
    { id: 1, image: chest },
    { id: 2, image: chest },
    { id: 3, image: chest },
    { id: 4, image: chest },
    { id: 5, image: chest },
    { id: 6, image: chest },
    { id: 7, image: chest },
    { id: 8, image: chest },
    { id: 9, image: chest },
    { id: 10, image: chest },
    { id: 11, image: chest },
    { id: 12, image: chest },
    { id: 13, image: chest },
    { id: 14, image: chest },
  ];


  return (
    <section className="about">
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

      <div>
        <div className="about-img">
        <Image src={chest} alt=""/>
      </div>
      <div className="about-content">
        <p>At SJArnold, we believe in more than just workouts—we believe in transformation. Our mission is to empower you to push your limits, achieve your goals, and become the strongest version of yourself.</p>
        <h5>Join us, and make your strength your satisfaction.</h5>
      </div>
      </div>
    </section>

//   <div className="about">
//       <div
//         className="about-content"
//         onMouseEnter={() => { console.log("enter"); setIshover(true); }}
//         onMouseLeave={() => { console.log("leave"); setIshover(false); }}
//         onClick={() => setIshover(v => !v)}
//       >
//       <h2>hover</h2>
//         {ishover && (
//           <Image className="hover" src={chest} alt="Hover" />
//         )}
//       </div>
//     </div>
  );
};

export default About;
