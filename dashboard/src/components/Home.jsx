import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../configs/axiosInstance.js';
import TopBar from './TopBar';
import DashBoard from './DashBoard';

const Home = () => {

  return (
    <>
      <TopBar />
      <DashBoard />
    </>
  );
}

export default Home;
