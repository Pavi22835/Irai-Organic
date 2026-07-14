import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default MainLayout;