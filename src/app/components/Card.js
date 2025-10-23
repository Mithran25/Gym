"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { MdLibraryBooks } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import {
  GiFruitBowl,
  GiBoxingGloveSurprise,
  GiTakeMyMoney,
} from "react-icons/gi";
import { BiCycling } from "react-icons/bi";

const Plans = [
  {
    id: 1,
    icon: <MdLibraryBooks size={80} color="white" />,
    title: "Free Lesson",
    content: "Our FREE LESSON offers you a risk-free start.",
  },
  {
    id: 2,
    icon: <CgGym size={80} color="white" />,
    title: "Workout",
    content: "Professional WORKOUT programs customized for you.",
  },
  {
    id: 3,
    icon: <GiFruitBowl size={80} color="white" />,
    title: "Protein",
    content: "Food and nutrition guidance for your fitness.",
  },
  {
    id: 4,
    icon: <GiBoxingGloveSurprise size={80} color="white" />,
    title: "Boxing",
    content: "Specialized sessions like BOXING for cardio and strength.",
  },
  {
    id: 5,
    icon: <BiCycling size={80} color="white" />,
    title: "Cycling",
    content: "Specialized sessions like CYCLING for endurance.",
  },
  {
    id: 6,
    icon: <GiTakeMyMoney size={80} color="white" />,
    title: "Price",
    content: "Premium coaching and facilities at the best PRICE.",
  },
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Imagee({ plan }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <motion.div ref={ref}>
        <p>{plan.icon}</p>
        <h4>{plan.title}</h4>
        <p>{plan.content}</p>
      </motion.div>
      <motion.h2
        id="plan-id"
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${plan.id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      <h2>Why Choose Us</h2>
      {Plans.map((plan) => (
        <Imagee key={plan.id} plan={plan} />
      ))}

      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
