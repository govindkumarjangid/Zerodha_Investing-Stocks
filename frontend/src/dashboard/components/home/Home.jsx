import TopBar from './TopBar';
import DashBoard from './DashBoard';

const Home = () => {

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <TopBar />
      <DashBoard />
    </div>
  );
}

export default Home;
