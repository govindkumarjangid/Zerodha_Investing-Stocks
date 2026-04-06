import Hero from './Hero';
import ProductSections from './ProductSections';
import Universe from './Universe';
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

const ProductPage = () => {
    return (
        <>
            <FadeUp delay={0}>
              <Hero />
            </FadeUp>
            <ProductSections />
            <FadeUp delay={0.2}>
              <Universe />
            </FadeUp>
        </>
    )
}

export default ProductPage;