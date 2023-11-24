import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLink = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/rooms", name: "Rooms" },
    { id: 3, path: "/bookings", name: "My Booking" },
    { id: 4, path: "/about-us", name: "About Us" },
    { id: 5, path: "/contact-us", name: "Contact Us" },
    { id: 6, path: "/events", name: "Events" },
    { id: 7, path: "/gallery", name: "Gallery" },
    { id: 8, path: "/faq", name: "FAQ" },
  ];
  return (
    <div>
      <h3 className="text-xl font-medium text-dark-01 pb-3 mb-5 border-b border-gray-200">
        {" "}
        Menu
      </h3>
      {navLink.map((menu) => (
        <li
          className="bg-base-300 w-full mb-2 text-dark-01 hover:text-dark-03 hover:underline"
          key={menu.id}
        >
          <NavLink to={menu.path}>
            <NavLink to={menu.path}>
              <Button sx={{ width: "100%" }} variant="text">
                {menu.name}
              </Button>
            </NavLink>
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
