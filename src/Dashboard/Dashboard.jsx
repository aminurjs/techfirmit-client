import { Typography } from "@mui/material";
import { FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-white h-screen fixed top-0 left-0">
        <div className="flex items-center pl-5 py-4 h-20 border-b border-gray-200">
          <Link to={"/"} className="mr-3">
            <img
              className="w-10"
              src="https://i.ibb.co/dGYT0sQ/logo.png"
              alt=""
            />
          </Link>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
          >
            <Link to={"/"}>TechFirm IT</Link>
          </Typography>
        </div>
        <div className="p-2">
          <NavLink
            to={"/dashboard/employee-list"}
            className="w-full my-2 py-3 pl-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
          >
            <FaUsers className="text-2xl" /> Employee List
          </NavLink>
        </div>
      </div>
      <div className="w-full bg-slate-100 min-h-screen">
        <div className=" border-b border-gray-200 h-20 bg-white"></div>
        <div className="flex">
          <div className="w-1/5"></div>
          <div className="w-4/5 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
