import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
