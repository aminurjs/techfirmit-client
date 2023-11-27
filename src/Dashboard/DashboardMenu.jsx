import { FaClipboardList, FaUsers } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./menu.css";

const DashboardMenu = () => {
  return (
    <>
      <NavLink
        to={"/dashboard/employee-list"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaUsers className="text-2xl" />{" "}
        <span className="hidden md:block">Employee List</span>
      </NavLink>{" "}
      <NavLink
        to={"/dashboard/progress"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <SiGooglesheets className="text-2xl" />{" "}
        <span className="hidden md:block">Progress</span>
      </NavLink>
      <NavLink
        to={"/dashboard/all-employee-list"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaUsers className="text-2xl" />{" "}
        <span className="hidden md:block">All Employee List</span>
      </NavLink>
      <NavLink
        to={"/dashboard/payment-history"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaClipboardList className="text-2xl" />{" "}
        <span className="hidden md:block">Payment History</span>
      </NavLink>
    </>
  );
};

export default DashboardMenu;
