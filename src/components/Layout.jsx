import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Background />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;