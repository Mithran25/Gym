"use client";

import React from "react";

import Image from "next/image";
import { Fragment, useState } from "react";
import lesson from "@/assets/lessons.png";
import workout from "@/assets/gym.png";
import food from "@/assets/healthy-food.png";
import boxing from "@/assets/boxing-glove.png";
import cycling from "@/assets/cycling.png";
import price from "@/assets/best-price.png";
import { motion } from "framer-motion";
import { MdLibraryBooks } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import {
  GiFruitBowl,
  GiBoxingGloveSurprise,
  GiTakeMyMoney,
} from "react-icons/gi";
import { BiCycling } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const WhyChoose = () => {
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
      title: "Membership",
      content: "Affordable Fitness Plans and Premium coaching.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const numCards = Plans.length;

  const handleRight = () => setActiveIndex((prev) => (prev + 1) % numCards);
  const handleLeft = () =>
    setActiveIndex((prev) => (prev - 1 + numCards) % numCards);

  const getCardStyles = (index) => {
    const diff = (index - activeIndex + numCards) % numCards;

    if (diff > 3) {
      return {
        transform: "translate3d(-300px , 0 , -300px)",
        opacity: 0,
        zIndex: 1,
        isTop: false,
      };
    }

    const translateX = diff * 20;
    const scale = 1 - diff * 0.03;
    const opacity = 1 - diff * 0.2;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex: 10 - diff,
      isTop: diff === 0,
    };
  };
  return (
    <section className="home-body">
      <div className="choose-us">
        <h3>Why Choose Us</h3>
        <section>
          {Plans.map((plan) => (
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                transform:"translateY(-20px)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              key={plan.id}
              className="plan_content"
            >
              <p>{plan.icon}</p>
              <h4>{plan.title}</h4>
              <p>{plan.content}</p>
            </motion.section>
          ))}
        </section>
      </div>

      {/* <div className="choosee">
        <h3>Why Choose Us</h3>
        <section className="card-stack-container-wrapper">
          {Plans.map((plan, i) => {
            const styles = getCardStyles(i);
            return (
              <motion.section
                className={`plan_card ${styles.isTop ? "top-card" : ""}`}
                animate={{
                  transform: styles.transform,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                }}
                transition={{ duration: 0.34, ease: "easeIn" }}
                onClick={styles.isTop ? handleRight : undefined}
                key={plan.id}
              >
                <Image
                  className="img"
                  src={plan.image}
                  width={70}
                  height={50}
                  alt=""
                />
                <h4>{plan.title}</h4>
                <p>{plan.content}</p>
              </motion.section>
            );
          })}
          <ul className="carousel-nav">
            <li onClick={handleLeft}>
              <MdArrowBackIos />
            </li>
            <li onClick={handleRight}>
              <MdArrowForwardIos />
            </li>
          </ul>
        </section>
      </div> */}
    </section>
  );
};

export default WhyChoose;
