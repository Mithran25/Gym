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
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const WhyChoose = () => {
  const Plans = [
    {
      id: 1,
      image: lesson,
      title: "Free Lesson",
      content:
        "Our FREE LESSON offers you a risk-free start, allowing you to sample our expert training.",
    },
    {
      id: 2,
      image: workout,
      title: "Workout",
      content:
        "Our professional WORKOUT programs are customized for maximum results, ensuring you train smarter, not just harder.",
    },
    {
      id: 3,
      image: food,
      title: "Protein",
      content:
        "We offer FOOD and nutrition guidance, because true fitness starts in the kitchen.",
    },
    {
      id: 4,
      image: boxing,
      title: "Boxing",
      content:
        "For dynamic training, explore specialized sessions like BOXING for cardio and strength.",
    },
    {
      id: 5,
      image: cycling,
      title: "Cycling",
      content:
        "For dynamic training, explore specialized sessions like CYCLING for endurance.",
    },
    {
      id: 6,
      image: price,
      title: "Price",
      content:
        "Join us today and discover premium coaching and facilities—all available at the best PRICE.",
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
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              key={plan.id}
              className="plan_content"
            >
              <Image src={plan.image} width={70} height={50} alt="" />
              <h4>{plan.title}</h4>
              <p>{plan.content}</p>
            </motion.section>
          ))}
        </section>
      </div>

      <div className="choosee">
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
      </div>
    </section>
  );
};

export default WhyChoose;
