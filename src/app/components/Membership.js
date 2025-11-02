"use client";

import React from "react";
import { motion } from "framer-motion";

const Membership = () => {
  return (
    <section className="price">
      <h2>Membership</h2>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4>First Month</h4>
          <dd>
            <li>$1,100</li>
            <li>onboarding & personalized workout setup.</li>
          </dd>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4>From Second Month</h4>
          <dd>
            <li>$800</li>
            <li>Continue your membership at a regular rate.</li>
          </dd>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true}}
        >
          <h4>Offer</h4>

          <dd>
            <li>Exclusive for 10th, 11th, 12th students</li>
            <li>Valid for 7 months</li>
            <li>Only $500 total</li>
          </dd>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
