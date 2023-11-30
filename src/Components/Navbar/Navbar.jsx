import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";

const drawerWidth = 240;
const navItems = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/contact-us", name: "Contact Us" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const axios = useAxios();
  const handleLogOut = () => {
    handleCloseUserMenu();
    const toastId = toast.loading("Logging out ...");
    logout()
      .then(() => {
        toast.success("Successfully Logged out!!", { id: toastId });
        axios
          .post("/auth/logout", user)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            return swal(error.code);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.message, { id: toastId });
        // An error happened.
      });
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex gap-2 justify-center items-center py-3">
        <Link to={"/"}>
          <img
            className="w-10"
            src="https://i.ibb.co/dGYT0sQ/logo.png"
            alt=""
          />
        </Link>
        <Typography variant="h6" component="div" sx={{ color: "#262626" }}>
          <Link to={"/"}>TechFirm IT</Link>
        </Typography>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <NavLink to={item.path}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText sx={{ fontWeight: "600" }} primary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
        {user && (
          <ListItem disablePadding>
            <NavLink to="dashboard">
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  sx={{ fontWeight: "600" }}
                  primary={"Dashboard"}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#fff", py: 1 }}>
          <Toolbar sx={{ m: "0 auto", maxWidth: "1280px", width: "100%" }}>
            <IconButton
              color="#262626"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
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
            <Box sx={{ display: { xs: "none", md: "block" }, mr: 2 }}>
              {navItems.map((item) => (
                <NavLink key={item.id} to={item.path}>
                  <Button sx={{ color: "#111" }}>{item.name}</Button>
                </NavLink>
              ))}
              {user && (
                <NavLink to="dashboard">
                  <Button sx={{ color: "#111" }}>Dashboard</Button>
                </NavLink>
              )}
            </Box>
            {!user ? (
              <Link to="/login">
                <button className="py-2 px-5 text-white text-lg font-medium uppercase mr-3  bg-gradient-to-r from-blue-02 to-blue-01 hover:bg-transparent duration-500  rounded active:scale-95">
                  Login
                </button>
              </Link>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, border: "1px solid #ddd" }}
                  >
                    <Avatar alt={user?.displayName} src={user?.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <div className="py-2 px-4 flex flex-col items-center w-48">
                    <IconButton sx={{ p: 0, mb: 1, border: "1px solid #ddd" }}>
                      <Avatar alt={user?.displayName} src={user?.photoURL} />
                    </IconButton>
                    <h2 className="mt-2  text-neutral-900  font-medium text-lg text-center">
                      {user?.displayName}
                    </h2>
                    <h2 className="mb-4  text-neutral-900  font-medium text-sm text-center">
                      {user?.email}
                    </h2>
                    <MenuItem onClick={handleLogOut}>
                      <Typography
                        textAlign="center"
                        sx={{
                          fontWeight: "600",
                          width: 100,
                        }}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </div>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
