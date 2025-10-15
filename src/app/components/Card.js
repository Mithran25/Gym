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
//       className="choose-us"
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

//           const opacity = useTransform(
//             scrollYProgress, 
//             [fadeStart, fullyVisibleStart, fadeOutStart, fadeEnd],
//             [0, 1, 1, 0]
//           );
          
          
//           return (
//             <motion.div
//               style={{
//                 position: "absolute",
//                 opacity,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 textAlign: "center",
//                 overflowX:"hidden",
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


import React from 'react';
import { motion } from 'framer-motion'; 

// --- DUMMY DATA AND IMPORTS (Replace 'lesson', etc., with your actual imports) ---
const lesson = "/images/lesson.png"; 
const workout = "/images/workout.png";
const food = "/images/food.png";
const boxing = "/images/boxing.png";
const cycling = "/images/cycling.png";
const price = "/images/price.png";

const Plans = [
    { id: 1, image: lesson, title: "Free Lesson", content: "Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training." },
    { id: 2, image: workout, title: "Workout", content: "Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder." },
    { id: 3, image: food, title: "Protein", content: "We offer FOOD and nutrition guidance, because true fitness starts in the kitchen." },
    { id: 4, image: boxing, title: "Boxing", content: "For dynamic training, explore specialized sessions like BOXING for cardio and strength." },
    { id: 5, image: cycling, title: "Cycling", content: "For dynamic training, explore specialized sessions like CYCLING for endurance." },
    { id: 6, image: price, title: "Price", content: "Join us today and discover premium coaching and facilities—all available at the best PRICE." },
];
// ----------------------------------------------------------------------------------

const Card = () => {
    return (
        <div className="choosee">
            <h3>Why Choose Us</h3>
            
            {/* The CRITICAL container for the stacking effect */}
            <section className="card-stack-container">
                
                {/* CARD 1: index 0 (Top Card) - Gradient Background, Button 
                */}
                <motion.section
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    key={1}
                    className="plan_card stacked-card"
                    style={{
                        '--card-index': 0, // Hardcoded index 0
                    }}
                >
                    <img src={lesson} width={70} height={50} alt="Free Lesson" className="card-icon" />
                    <h4>Free Lesson</h4>
                    <p>Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training.</p>
                </motion.section>

                {/* CARD 2: index 1 - Simple Background, No Button/Content 
                */}
                <motion.section
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.2 }}
                    key={2}
                    className="plan_card stacked-card"
                    style={{
                        '--card-index': 1, // Hardcoded index 1
                    }}
                    id='card_2'
                >
                    <img src={workout} width={70} height={50} alt="Workout" className="card-icon" />
                    <h4>Workout</h4>
                    <p>Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder.</p>
                </motion.section>

                {/* CARD 3: index 2 - Simple Background, No Button/Content 
                */}
                <motion.section
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    key={3}
                    className="plan_card stacked-card"
                    style={{
                        '--card-index': 2, // Hardcoded index 2
                    }}
                >
                    <img src={food} width={70} height={50} alt="Protein" className="card-icon" />
                    <h4>Protein</h4>
                    <p>We offer FOOD and nutrition guidance, because true fitness starts in the kitchen.</p>
                </motion.section>

                {/* CARD 4, 5, 6... (Continue this pattern for the remaining cards) 
                  You would continue to manually increase the index and update the content.
                */}
                
            </section>
        </div>
    );
};

export default Card;