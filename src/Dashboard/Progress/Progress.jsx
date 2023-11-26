import { Typography } from "@mui/material";

const Progress = () => {
  return (
    <div>
      <div className=" border-gray-200 h-40 bg-white  p-5">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          Progress Cooking...
        </Typography>
      </div>
    </div>
  );
};

export default Progress;
