// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import gym_1 from "@/assets/man-moving-giant-tire-wheel-gym.jpg";
// import gym_2 from "@/assets/young-fitness-man-studio.jpg";
// import gym_3 from "@/assets/fitness-rings-7530142_1280.jpg";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";

// function useParallax(value, distance) {
//     return useTransform(value, [0, 1], [-distance, distance])
// }

// const Gsap = () => {
//   const ref = useRef(null)
//       const { scrollYProgress } = useScroll({ target: ref })
//       const y = useParallax(scrollYProgress, 300)
//   return (
//     <section className="scroll-section" ref={ref}>
    
//         <motion.div ref={ref}>
//                 <Image src={gym_1} alt="Gym 1" className="slide-image" />

//             </motion.div>

//           <div className="slide text-slide">
//             <h2 style={{y}}>Discover Classes</h2>
//             <p>Start your fitness journey with us.</p>
//             <Link href="/class" className="cta-button">
//               Start →
//             </Link>
//         </div>

//     </section>
//   );
// };

// export default Gsap;
"use client"



import React from 'react'
  import Image from "next/image";
  import gym_1 from "@/assets/man-moving-giant-tire-wheel-gym.jpg";
  import gym_2 from "@/assets/young-fitness-man-studio.jpg";
  import gym_3 from "@/assets/fitness-rings-7530142_1280.jpg";
  import Link from "next/link";
  import Button from "@/app/components/Button.js"
  import { motion } from "framer-motion";
  import ScrollCarousel from '@/components/lightswind/scroll-trigger-carousel.tsx';


  const MotionImage = motion(Image);

const Gsap = () => {
    const features = [
  {
    image: "https://images.pexels.com/photos/9934462/pexels-photo-9934462.jpeg",
  },
  {

    title: "Discover class",
    description: "Start your fitness journey with us.",
    link :"Start"
    // image: "https://images.pexels.com/photos/6988085/pexels-photo-6988085.jpeg",
  },
  
];
  return (
    <div id="gsap">
<ScrollCarousel
  features={features}
  className="my-20"
  maxScrollHeight={2000}
/>
    </div>
  )
}

export default Gsap