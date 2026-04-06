import { motion } from 'framer-motion';
import Hero from './Hero';
import Trust from './Trust';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../UI/OpenAccount';

// Animation wrapper
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

const HomePage = () => {
  return (
    <>
      <FadeUp delay={0}>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Trust/>
      </FadeUp>
      <FadeUp delay={0.1}>
        <Awards />
      </FadeUp>
      <FadeUp delay={0.1}>
        <Pricing />
      </FadeUp>
      <FadeUp delay={0.1}>
        <Education />
      </FadeUp>
      <FadeUp delay={0.1}>
        <OpenAccount />
      </FadeUp>
    </>
  )
}

export default HomePage;