import Hero from './Hero';
import CreateTicket from './CreateTicket';
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

const SupportPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-30 text-text-color px-4 sm:px-6 lg:px-8 w-full">
        <FadeUp delay={0}>
          <Hero />
        </FadeUp>
        <FadeUp delay={0.2}>
          <CreateTicket />
        </FadeUp>
      </div>
    </>
  )
}

export default SupportPage;