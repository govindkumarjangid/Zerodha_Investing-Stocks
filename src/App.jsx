import {Routes, Route} from "react-router-dom"

import Navbar from './landingpage/UI/Navbar';
import HomePage from './landingpage/home/HomePage';
import Signup from './landingpage/signup/Signup';
import AboutPage from './landingpage/about/AboutPage';
import ProductsPage from './landingpage/products/ProductPage';
import SupportPage from './landingpage/support/SupportPage';
import Footer from './landingpage/UI/Footer';
import NotFound from './landingpage/UI/NotFound';
import PricingPage from "./landingpage/pricing/PricingPage";
import ScrollToTop from "./landingpage/UI/ScrollToTop";

const App = () => {
  return (
    <>
    <Navbar />
    <ScrollToTop />
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound />}/>
     </Routes>
    <Footer />
    </>
  )
}

export default App;