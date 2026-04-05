import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { GeneralContextProvider } from './GeneralContext';

const DashBoard = () => {
  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      <div className="w-104 border-r border-gray-200 overflow-y-auto">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  )
}

export default DashBoard;