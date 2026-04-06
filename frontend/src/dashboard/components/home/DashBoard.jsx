import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WatchList from '../watchlist/WatchList';
import Summary from './Summary';
import Orders from '../features/Orders';
import Holdings from '../features/Holdings';
import Positions from '../features/Positions';
import Funds from '../features/Funds';
import Apps from '../features/Apps';
import { GeneralContextProvider } from '../../../../context/GeneralContext';

// Simple slide/fade wrapper for dashboard views
const ViewWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="h-full w-full"
  >
    {children}
  </motion.div>
);

const DashBoard = () => {
  return (
    <div className="flex w-full flex-1 overflow-hidden">
      <div className="w-104 border-r border-gray-200 overflow-y-auto">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </div>
      <div className="flex-1 p-6 overflow-y-auto relative">
        <AnimatePresence mode='wait'>
          <Routes>
            <Route exact path="/" element={<ViewWrapper><Summary /></ViewWrapper>} />
            <Route path="orders" element={<ViewWrapper><Orders /></ViewWrapper>} />
            <Route path="holdings" element={<ViewWrapper><Holdings /></ViewWrapper>} />
            <Route path="positions" element={<ViewWrapper><Positions /></ViewWrapper>} />
            <Route path="funds" element={<ViewWrapper><Funds /></ViewWrapper>} />
            <Route path="apps" element={<ViewWrapper><Apps /></ViewWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DashBoard;