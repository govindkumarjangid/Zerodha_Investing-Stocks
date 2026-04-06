import React from 'react'
import Hero from './Hero';
import Steps from './Steps';
import OpenAccount from '../UI/OpenAccount';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Signup = () => {
  return (
    <>
      <FadeUp delay={0}>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Steps />
      </FadeUp>
      <FadeUp delay={0.3}>
        <OpenAccount />
      </FadeUp>
    </>
  )
}

export default Signup;