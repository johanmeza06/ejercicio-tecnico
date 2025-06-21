import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container mx-auto overscroll-y-none">
      <Outlet />
    </div>
  );
};
export default AppLayout;
