import { Typography } from "@mui/material";

const DashboardHome = () => {
  return (
    <div className=" border-gray-200 min-h-40 bg-white  p-5">
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
      >
        Dashboard Home
      </Typography>
    </div>
  );
};

export default DashboardHome;
