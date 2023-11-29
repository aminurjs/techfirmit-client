import { FaClipboardList, FaHome, FaUsers } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import "./menu.css";
import useAdmin from "../Hooks/useAdmin";
import useHR from "../Hooks/useHR";
import useEmployee from "../Hooks/useEmployee";

const DashboardMenu = () => {
  const [isAdmin] = useAdmin();
  const [isHR] = useHR();
  const [isEmployee] = useEmployee();
  return (
    <>
      <Link
        to={"/dashboard"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHome className="text-2xl" />{" "}
        <span className="hidden md:block">Home</span>
      </Link>
      {isAdmin && (
        <NavLink
          to={"/dashboard/all-employee-list"}
          className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
        >
          <FaUsers className="text-2xl" />{" "}
          <span className="hidden md:block">All Employee List</span>
        </NavLink>
      )}
      {isHR && (
        <>
          <NavLink
            to={"/dashboard/employee-list"}
            className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
          >
            <FaUsers className="text-2xl" />{" "}
            <span className="hidden md:block">Employee List</span>
          </NavLink>
          <NavLink
            to={"/dashboard/progress"}
            className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
          >
            <SiGooglesheets className="text-2xl" />{" "}
            <span className="hidden md:block">Progress</span>
          </NavLink>
        </>
      )}
      {isEmployee && (
        <>
          <NavLink
            to={"/dashboard/payment-history"}
            className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
          >
            <FaClipboardList className="text-2xl" />{" "}
            <span className="hidden md:block">Payment History</span>
          </NavLink>
          <NavLink
            to={"/dashboard/work-sheet"}
            className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
          >
            <SiGooglesheets className="text-2xl" />{" "}
            <span className="hidden md:block">Work Sheet</span>
          </NavLink>
        </>
      )}
    </>
  );
};

export default DashboardMenu;
