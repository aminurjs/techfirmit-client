import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="md:w-1/5 bg-white h-screen fixed top-0 left-0">
        <div className="flex items-center pl-5 py-4 h-20 border-b border-gray-200">
          <Link to={"/"} className="mr-3">
            <img
              className="w-10"
              src="https://i.ibb.co/dGYT0sQ/logo.png"
              alt=""
            />
          </Link>
          <div className="hidden md:block">
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
            >
              <Link to={"/"}>TechFirm IT</Link>
            </Typography>
          </div>
        </div>
        <div className="p-2">
          <DashboardMenu />
        </div>
      </div>
      <div className="w-full bg-slate-100 min-h-screen">
        <div className="flex">
          <div className="w-20 md:w-1/5"></div>
          <div className="w-[calc(100%-80px)] md:w-4/5 border-b border-gray-200 h-20 bg-white flex items-center pl-5">
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
            >
              Dashboard
            </Typography>
          </div>
        </div>
        <div className="flex">
          <div className="w-20 md:w-1/5"></div>
          <div className="w-[calc(100%-80px)] md:w-4/5 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
