import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

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

import DashboardHome from './dashboard/components/home/Home';


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};


const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
       <Toaster position="top-center" reverseOrder={false} />
      {!isDashboard && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />

        {/* Dashboard Routes with Auto Protection */}
        <Route path='/dashboard/*' element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  )
}

export default App;