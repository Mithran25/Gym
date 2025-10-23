// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { Fragment } from "react";
// import lesson from "@/assets/lessons.png";
// import workout from "@/assets/gym.png";
// import food from "@/assets/healthy-food.png";
// import boxing from "@/assets/boxing-glove.png";
// import cycling from "@/assets/cycling.png";
// import price from "@/assets/best-price.png";
// import { useInView } from "react-intersection-observer";

// const Card = () => {

//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"], 
//   });

//   const Plans = [
//     {
//       id: 1,
//       image: lesson,
//       title: "Free Lesson",
//       content:
//         "Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training.",
//     },
//     {
//       id: 2,
//       image: workout,
//       title: "Workout",
//       content:
//         "Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder.",
//     },
//     {
//       id: 3,
//       image: food,
//       title: "Protein",
//       content:
//         "We offer FOOD and nutrition guidance, because true fitness starts in the kitchen.",
//     },
//     {
//       id: 4,
//       image: boxing,
//       title: "Boxing",
//       content:
//         "For dynamic training, explore specialized sessions like BOXING for cardio and strength.",
//     },
//     {
//       id: 5,
//       image: cycling,
//       title: "Cycling",
//       content:
//         "For dynamic training, explore specialized sessions like CYCLING for endurance.",
//     },
//     {
//       id: 6,
//       image: price,
//       title: "Price",
//       content:
//         "Join us today and discover premium coaching and facilities—all available at the best PRICE.",
//     },
//   ];
//   const segment = 1 / Plans.length;

  

//   return (
//     <section
//       className="choosee-us"
//       ref={scrollRef}
//       style={{
//         position: "relative",
//         height: `${Plans.length * 100}vh`,
//       }}
//     >
//     <h3>Why Choose US</h3>
//       <div className="plancontent">
//         {Plans.map((plan, index) => {

//           const start = index * segment;
//           const end = start + segment;
          
//           const FADE_DURATION = segment * 0.1;

//           const fadeStart = start;

//           const fullyVisibleStart = start + FADE_DURATION;

//           const fadeOutStart = end - FADE_DURATION;

//           const fadeEnd = end;

//           const y = useTransform(
//   scrollYProgress,
//   [fadeStart, fullyVisibleStart, fadeOutStart, fadeEnd],
//   ["-80%", "0%", "0%", "80%"]
// );

// {/* const y = useTransform(scrollYProgress, [fadeStart, fullyVisibleStart, fadeOutStart, fadeEnd], ["-50%", "0%", "0%", "50%"]); */}

          
          
//           return (
//             <motion.div
//               style={{
//                 position: "absolute",
//                 y,
//                 opacity:1,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 textAlign: "center",
//                 width: "100%",
//     height: "100%",
//               }}
//               key={plan.id}
//               className="plan-content"
//             >
//               <Image src={plan.image} width={70} height={50} alt="" />
//               <h4>{plan.title}</h4>
//               <p>{plan.content}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Card;


// import React from 'react';
// import { motion } from 'framer-motion'; 

// // --- DUMMY DATA AND IMPORTS (Replace 'lesson', etc., with your actual imports) ---
// const lesson = "/images/lesson.png"; 
// const workout = "/images/workout.png";
// const food = "/images/food.png";
// const boxing = "/images/boxing.png";
// const cycling = "/images/cycling.png";
// const price = "/images/price.png";

// const Plans = [
//     { id: 1, image: lesson, title: "Free Lesson", content: "Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training." },
//     { id: 2, image: workout, title: "Workout", content: "Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder." },
//     { id: 3, image: food, title: "Protein", content: "We offer FOOD and nutrition guidance, because true fitness starts in the kitchen." },
//     { id: 4, image: boxing, title: "Boxing", content: "For dynamic training, explore specialized sessions like BOXING for cardio and strength." },
//     { id: 5, image: cycling, title: "Cycling", content: "For dynamic training, explore specialized sessions like CYCLING for endurance." },
//     { id: 6, image: price, title: "Price", content: "Join us today and discover premium coaching and facilities—all available at the best PRICE." },
// ];
// // ----------------------------------------------------------------------------------

// const Card = () => {
//     return (
//         <div className="choosee">
//             <h3>Why Choose Us</h3>
            
//             {/* The CRITICAL container for the stacking effect */}
//             <section className="card-stack-container">
                
//                 {/* CARD 1: index 0 (Top Card) - Gradient Background, Button 
//                 */}
//                 <motion.section
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     key={1}
//                     className="plan_card stacked-card"
//                     style={{
//                         '--card-index': 0, // Hardcoded index 0
//                     }}
//                 >
//                     <img src={lesson} width={70} height={50} alt="Free Lesson" className="card-icon" />
//                     <h4>Free Lesson</h4>
//                     <p>Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training.</p>
//                 </motion.section>

//                 {/* CARD 2: index 1 - Simple Background, No Button/Content 
//                 */}
//                 <motion.section
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     key={2}
//                     className="plan_card stacked-card"
//                     style={{
//                         '--card-index': 1, // Hardcoded index 1
//                     }}
//                     id='card_2'
//                 >
//                     <img src={workout} width={70} height={50} alt="Workout" className="card-icon" />
//                     <h4>Workout</h4>
//                     <p>Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder.</p>
//                 </motion.section>

//                 {/* CARD 3: index 2 - Simple Background, No Button/Content 
//                 */}
//                 <motion.section
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     key={3}
//                     className="plan_card stacked-card"
//                     style={{
//                         '--card-index': 2, // Hardcoded index 2
//                     }}
//                 >
//                     <img src={food} width={70} height={50} alt="Protein" className="card-icon" />
//                     <h4>Protein</h4>
//                     <p>We offer FOOD and nutrition guidance, because true fitness starts in the kitchen.</p>
//                 </motion.section>

//                 {/* CARD 4, 5, 6... (Continue this pattern for the remaining cards) 
//                   You would continue to manually increase the index and update the content.
//                 */}
                
//             </section>
//         </div>
//     );
// };

// export default Card;



// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// import lesson from "@/assets/lessons.png";
// import workout from "@/assets/gym.png";
// import food from "@/assets/healthy-food.png";
// import boxing from "@/assets/boxing-glove.png";
// import cycling from "@/assets/cycling.png";
// import price from "@/assets/best-price.png";

// const Plans = [
//   { id: 1, image: lesson, title: "Free Lesson", content: "Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training." },
//   { id: 2, image: workout, title: "Workout", content: "Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder." },
//   { id: 3, image: food, title: "Protein", content: "We offer FOOD and nutrition guidance, because true fitness starts in the kitchen." },
//   { id: 4, image: boxing, title: "Boxing", content: "For dynamic training, explore specialized sessions like BOXING for cardio and strength." },
//   { id: 5, image: cycling, title: "Cycling", content: "For dynamic training, explore specialized sessions like CYCLING for endurance." },
//   { id: 6, image: price, title: "Price", content: "Join us today and discover premium coaching and facilities—all available at the best PRICE." },
// ];

// export default function CardParallax() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const numCards = Plans.length;

//   const handleRight = () => setActiveIndex(prev => (prev + 1) % numCards);
//   const handleLeft = () => setActiveIndex(prev => (prev - 1 + numCards) % numCards);

//   const cardRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: cardRef });
//   const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
//   const ySpring = useSpring(yParallax, { stiffness: 50, damping: 20 });

//   const getCardStyles = (index) => {
//     const diff = (index - activeIndex + numCards) % numCards;

//     if (diff === 0) return { transform: `translateY(0px) scale(1)`, opacity: 1, zIndex: 10, isTop: true };
//     if (diff === 1) return { transform: `translateY(500px) scale(1)`, opacity: 0, zIndex: 9, isTop: false };

//     const translateY = diff * -30;
//     const scale = 1 - diff * 0.05;
//     const opacity = 1 - diff * 0.25;
//     return { transform: `translateY(${translateY}px) scale(${scale})`, opacity, zIndex: 10 - diff, isTop: false };
//   };

//   return (
//     <section className="home-body" ref={cardRef}>
//       <div className="choosee">
//         <h3>Why Choose Us</h3>
//         <section className="card-stack-container-wrapper">
//           {Plans.map((plan, i) => {
//             const styles = getCardStyles(i);
//             return (
//               <motion.section
//                 className={`plan_card ${styles.isTop ? "top-card" : ""}`}
//                 style={{ y: ySpring }}
//                 animate={{ transform: styles.transform, opacity: styles.opacity, zIndex: styles.zIndex }}
//                 transition={{ duration: 0.42, ease: "easeIn" }}
//                 onClick={styles.isTop ? handleRight : undefined}
//                 key={plan.id}
//               >
//                 <Image className="img" src={plan.image} width={70} height={50} alt="" />
//                 <h4>{plan.title}</h4>
//                 <p>{plan.content}</p>
//               </motion.section>
//             );
//           })}

//           <ul className="carousel-nav">
//             <li onClick={handleLeft}><MdArrowBackIos /></li>
//             <li onClick={handleRight}><MdArrowForwardIos /></li>
//           </ul>
//         </section>
//       </div>
//     </section>
//   );
// }

  
  "use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"
import lesson from "@/assets/lessons.png";
import workout from "@/assets/gym.png";
import food from "@/assets/healthy-food.png";
import boxing from "@/assets/boxing-glove.png";
import cycling from "@/assets/cycling.png";
import price from "@/assets/best-price.png";
import Image from "next/image";
import { MdLibraryBooks } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiFruitBowl , GiBoxingGloveSurprise , GiTakeMyMoney } from "react-icons/gi";
import { BiCycling } from "react-icons/bi";

const Plans = [
  { id: 1, icon: <MdLibraryBooks size={80} color="white" />, title: "Free Lesson", content: "Our FREE LESSON offers you a risk-free start." },
  { id: 2, icon: <CgGym size={80} color="white" />, title: "Workout", content: "Professional WORKOUT programs customized for you." },
  { id: 3, icon: <GiFruitBowl size={80} color="white" />, title: "Protein", content: "Food and nutrition guidance for your fitness." },
  { id: 4, icon: <GiBoxingGloveSurprise  size={80} color="white" />, title: "Boxing", content: "Specialized sessions like BOXING for cardio and strength." },
  { id: 5, icon: <BiCycling size={80} color="white" />, title: "Cycling", content: "Specialized sessions like CYCLING for endurance." },
  { id: 6, icon: <GiTakeMyMoney size={80} color="white" />, title: "Price", content: "Premium coaching and facilities at the best PRICE." },
];

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Imagee({ plan }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        
        <section className="img-container">
        
            <motion.div ref={ref}>
                {/* <Image
                    src={plan.image}
                    alt={plan.title}
                /> */}
                <p>{plan.icon}</p>
                <h4>{plan.title}</h4>
                <p>{plan.content}</p>
            </motion.div>
            <motion.h2 id="plan-id"
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${plan.id}`}</motion.h2>
        </section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example">
    
             <h2>Why Choose Us</h2>
            {Plans.map((plan) => (
                <Imagee key={plan.id} plan={plan} />
            ))}
            
            <motion.div className="progress" style={{ scaleX }} />
           
        
        </div>
    )
}

