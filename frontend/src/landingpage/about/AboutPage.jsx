import Hero from './Hero';
import Team from './Team';
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

const AboutPage = () => {
  return (
    <>
      <FadeUp delay={0}>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Team />
      </FadeUp>
    </>
  )
}

export default AboutPage;