import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-brand-900 text-white py-6 text-center">
        <p>&copy; 2026 Agrolink AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
