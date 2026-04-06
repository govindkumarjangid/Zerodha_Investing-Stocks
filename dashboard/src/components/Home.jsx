import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../configs/axiosInstance.js';
import TopBar from './TopBar';
import DashBoard from './DashBoard';

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fn = async () => {
      try {
        const { data } = await axiosInstance.get('/auth/me');

        if (data.success) {
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          window.location.href = "http://localhost:5173/signup";
        }
      } catch (error) {
        console.error("Auth Error:", error);
        window.location.href = "http://localhost:5173/signup";
      } finally {
        setLoading(false);
      }
    };
    fn();
  }, []);

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <>
      <TopBar user={user} />
      <DashBoard />
    </>
  );
}

export default Home;
